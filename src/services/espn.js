import { CONFIG } from '../config/settings.js';

/**
 * Mapping: ESPN displayName → German team name used in the app.
 * Built from all 48 WM 2026 participants.
 */
const ESPN_TO_DE = {
  'Mexico': 'Mexiko',
  'South Africa': 'Südafrika',
  'South Korea': 'Südkorea',
  'Czechia': 'Tschechien',
  'Canada': 'Kanada',
  'Bosnia-Herzegovina': 'Bosnien-Herzegowina',
  'Qatar': 'Katar',
  'Switzerland': 'Schweiz',
  'Brazil': 'Brasilien',
  'Morocco': 'Marokko',
  'Haiti': 'Haiti',
  'Scotland': 'Schottland',
  'United States': 'USA',
  'Paraguay': 'Paraguay',
  'Australia': 'Australien',
  'Turkey': 'Türkei',
  'Türkiye': 'Türkei',
  'Germany': 'Deutschland',
  'Curaçao': 'Curaçao',
  'Ivory Coast': 'Elfenbeinküste',
  "Côte d'Ivoire": 'Elfenbeinküste',
  'Ecuador': 'Ecuador',
  'Netherlands': 'Niederlande',
  'Japan': 'Japan',
  'Sweden': 'Schweden',
  'Tunisia': 'Tunesien',
  'Belgium': 'Belgien',
  'Egypt': 'Ägypten',
  'Iran': 'Iran',
  'New Zealand': 'Neuseeland',
  'Spain': 'Spanien',
  'Cape Verde': 'Kap Verde',
  'Cabo Verde': 'Kap Verde',
  'Saudi Arabia': 'Saudi-Arabien',
  'Uruguay': 'Uruguay',
  'France': 'Frankreich',
  'Senegal': 'Senegal',
  'Iraq': 'Irak',
  'Norway': 'Norwegen',
  'Argentina': 'Argentinien',
  'Algeria': 'Algerien',
  'Austria': 'Österreich',
  'Jordan': 'Jordanien',
  'Portugal': 'Portugal',
  'DR Congo': 'DR Kongo',
  'Congo DR': 'DR Kongo',
  'Uzbekistan': 'Usbekistan',
  'Colombia': 'Kolumbien',
  'England': 'England',
  'Croatia': 'Kroatien',
  'Ghana': 'Ghana',
  'Panama': 'Panama',
};

/**
 * Extract group letter from ESPN altGameNote like "FIFA World Cup, Group A"
 */
function extractGroup(competition) {
  const note = competition.altGameNote || '';
  const match = note.match(/Group\s+([A-L])/i);
  return match ? match[1] : null;
}

/**
 * Map ESPN team displayName to the German name used in our app.
 */
function mapTeamName(espnName) {
  return ESPN_TO_DE[espnName] || espnName;
}

/**
 * Parse a single ESPN event into our match format.
 * Returns null if the event can't be matched.
 */
function parseEvent(event) {
  const comp = event.competitions?.[0];
  if (!comp) return null;

  const homeTeam = comp.competitors?.find(c => c.homeAway === 'home');
  const awayTeam = comp.competitors?.find(c => c.homeAway === 'away');
  if (!homeTeam || !awayTeam) return null;

  const homeName = mapTeamName(homeTeam.team?.displayName || '');
  const awayName = mapTeamName(awayTeam.team?.displayName || '');
  const group = extractGroup(comp);
  const status = comp.status?.type || {};

  const result = {
    home: homeName,
    away: awayName,
    group,
    espnId: event.id,
    state: status.state, // 'pre', 'in', 'post'
    completed: status.completed || false,
    statusDetail: status.shortDetail || status.detail || '',
    statusDescription: status.description || '',
  };

  // Score (available for in-progress and completed matches)
  if (status.state === 'in' || status.state === 'post') {
    result.homeScore = parseInt(homeTeam.score, 10);
    result.awayScore = parseInt(awayTeam.score, 10);
  }

  // Match details (goals, cards) for completed matches
  if (comp.details && comp.details.length > 0) {
    result.details = comp.details.map(d => ({
      type: d.type?.text || '',
      minute: d.clock?.displayValue || '',
      team: d.team?.id === homeTeam.id ? 'home' : 'away',
      player: d.athletesInvolved?.[0]?.displayName || '',
      isGoal: d.scoringPlay || false,
      isOwnGoal: d.ownGoal || false,
      isYellowCard: d.yellowCard || false,
      isRedCard: d.redCard || false,
    }));
  }

  // Live clock for in-progress matches
  if (status.state === 'in') {
    result.liveClock = comp.status?.displayClock || '';
    result.livePeriod = comp.status?.period || 0;
  }

  // Team logos
  result.homeLogo = homeTeam.team?.logo || '';
  result.awayLogo = awayTeam.team?.logo || '';

  return result;
}

/**
 * Fetch all World Cup matches from ESPN API.
 * Uses localStorage cache to avoid excessive requests.
 * 
 * @returns {Promise<Array>} Parsed match results
 */
export async function fetchAllMatches() {
  // Check cache first
  const cached = getCachedData();
  if (cached) return cached;

  try {
    // Fetch group stage (Jun 11 - Jun 27) and KO rounds (Jun 28 - Jul 19) separately
    // ESPN handles date ranges well
    const urls = [
      `${CONFIG.ESPN_API_BASE}?dates=20260611-20260627&limit=100`,
      `${CONFIG.ESPN_API_BASE}?dates=20260628-20260719&limit=100`,
    ];

    const responses = await Promise.all(
      urls.map(url => fetch(url).then(r => {
        if (!r.ok) throw new Error(`ESPN API error: ${r.status}`);
        return r.json();
      }))
    );

    const allEvents = responses.flatMap(r => r.events || []);
    const parsed = allEvents.map(parseEvent).filter(Boolean);

    // Cache the result
    setCachedData(parsed);

    return parsed;
  } catch (error) {
    console.error('[ESPN] Fetch failed:', error);
    // Return cached data even if expired, as fallback
    const stale = getCachedData(true);
    if (stale) {
      console.warn('[ESPN] Using stale cache as fallback');
      return stale;
    }
    return null;
  }
}

/**
 * Get cached ESPN data from localStorage.
 * @param {boolean} ignoreExpiry - If true, return data even if expired
 */
function getCachedData(ignoreExpiry = false) {
  try {
    const raw = localStorage.getItem(CONFIG.LS_KEY_ESPN_CACHE);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (!ignoreExpiry && (Date.now() - timestamp) > CONFIG.ESPN_CACHE_TTL_MS) {
      return null; // Expired
    }
    return data;
  } catch {
    return null;
  }
}

/**
 * Store ESPN data in localStorage with timestamp.
 */
function setCachedData(data) {
  try {
    localStorage.setItem(CONFIG.LS_KEY_ESPN_CACHE, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch (e) {
    console.warn('[ESPN] Cache write failed:', e);
  }
}

/**
 * Force-clear the ESPN cache (for manual refresh).
 */
export function clearEspnCache() {
  localStorage.removeItem(CONFIG.LS_KEY_ESPN_CACHE);
}
