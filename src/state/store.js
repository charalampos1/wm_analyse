import { CONFIG } from '../config/settings.js';
import { fetchAllMatches, clearEspnCache } from '../services/espn.js';

import venuesData from '../data/venues.json';
import teamsData from '../data/teams.json';
import matchesData from '../data/matches.json';

export const store = {
  venues: venuesData,
  teams: teamsData,
  matches: matchesData,
  apiKey: '',
  liveDataLoaded: false,
  liveDataError: false,
  liveMatches: [], // Raw ESPN data for extra details (goals, cards, etc.)

  init() {
    this.apiKey = localStorage.getItem(CONFIG.LS_KEY_API) || '';
    
    const savedMatchesStr = localStorage.getItem(CONFIG.LS_KEY_MATCHES);
    if (savedMatchesStr) {
      try {
        const savedMatches = JSON.parse(savedMatchesStr);
        this.matches.forEach(m => {
          const saved = savedMatches.find(sm => sm.id === m.id);
          if (saved && saved.hs !== undefined) {
            m.hs = saved.hs;
            m.as = saved.as;
          }
        });
      } catch (e) {
        console.error("Error loading saved matches", e);
      }
    }
  },

  /**
   * Load live data from ESPN API and merge into matches.
   * Only completed matches get their scores updated.
   * In-progress matches get a liveStatus property.
   */
  async loadLiveData() {
    try {
      const espnData = await fetchAllMatches();
      if (!espnData || espnData.length === 0) {
        this.liveDataError = true;
        return false;
      }

      this.liveMatches = espnData;

      // Merge ESPN results into our matches
      espnData.forEach(espnMatch => {
        // Find matching local match by team names + group
        const localMatch = this.matches.find(m => {
          return (
            (m.h === espnMatch.home && m.a === espnMatch.away) ||
            (m.h === espnMatch.away && m.a === espnMatch.home)
          );
        });

        if (!localMatch) return;

        // Determine if home/away are flipped
        const isFlipped = localMatch.h === espnMatch.away;

        // Store ESPN ID for reference
        localMatch.espnId = espnMatch.espnId;

        // Set live status for in-progress matches
        if (espnMatch.state === 'in') {
          localMatch.liveState = 'live';
          localMatch.liveClock = espnMatch.liveClock || '';
          localMatch.livePeriod = espnMatch.livePeriod || 0;
          // Update score for live matches too
          if (espnMatch.homeScore !== undefined) {
            localMatch.hs = isFlipped ? espnMatch.awayScore : espnMatch.homeScore;
            localMatch.as = isFlipped ? espnMatch.homeScore : espnMatch.awayScore;
            localMatch.isLiveScore = true;
          }
        } else if (espnMatch.completed) {
          // Completed match — set final score
          localMatch.liveState = 'completed';
          localMatch.hs = isFlipped ? espnMatch.awayScore : espnMatch.homeScore;
          localMatch.as = isFlipped ? espnMatch.homeScore : espnMatch.awayScore;
          localMatch.isApiResult = true;
          delete localMatch.isLiveScore;
          delete localMatch.liveClock;
          delete localMatch.livePeriod;
        } else {
          // Upcoming match
          localMatch.liveState = 'scheduled';
        }

        // Store match details (goals, cards)
        if (espnMatch.details) {
          localMatch.details = espnMatch.details;
        }

        // Store team logos
        if (espnMatch.homeLogo) {
          localMatch.homeLogo = isFlipped ? espnMatch.awayLogo : espnMatch.homeLogo;
          localMatch.awayLogo = isFlipped ? espnMatch.homeLogo : espnMatch.awayLogo;
        }
      });

      // Persist API results to localStorage so they survive page reloads even offline
      this.persistMatches();

      this.liveDataLoaded = true;
      this.liveDataError = false;
      return true;
    } catch (e) {
      console.error('[Store] loadLiveData failed:', e);
      this.liveDataError = true;
      return false;
    }
  },

  /**
   * Force refresh live data (clears cache first).
   */
  async refreshLiveData() {
    clearEspnCache();
    return this.loadLiveData();
  },

  /**
   * Check if any match is currently live.
   */
  hasLiveMatch() {
    return this.matches.some(m => m.liveState === 'live');
  },

  /**
   * Get ESPN match details (goals, cards) for a given match.
   */
  getMatchDetails(matchId) {
    const match = this.matches.find(m => m.id === matchId);
    return match?.details || [];
  },

  setApiKey(key) {
    this.apiKey = key;
    if (key) {
      localStorage.setItem(CONFIG.LS_KEY_API, key);
    } else {
      localStorage.removeItem(CONFIG.LS_KEY_API);
    }
  },

  saveMatchResult(matchId, hs, as) {
    const match = this.matches.find(m => m.id === matchId);
    if (match) {
      match.hs = hs;
      match.as = as;
      this.persistMatches();
    }
  },

  persistMatches() {
    const played = this.matches.filter(m => m.hs !== undefined).map(m => ({ id: m.id, hs: m.hs, as: m.as }));
    localStorage.setItem(CONFIG.LS_KEY_MATCHES, JSON.stringify(played));
  },

  getMatch(id) {
    return this.matches.find(m => m.id === id);
  },

  isMatchPlayed(match) {
    return match.hs !== undefined && match.as !== undefined;
  },

  getGroupStandings(groupId) {
    const teams = Object.keys(this.teams).filter(t => this.teams[t].group === groupId);
    const table = teams.map(t => ({ team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }));

    const groupMatches = this.matches.filter(m => m.g === groupId && this.isMatchPlayed(m));

    groupMatches.forEach(m => {
      const hStat = table.find(t => t.team === m.h);
      const aStat = table.find(t => t.team === m.a);

      if (hStat && aStat) {
        hStat.p++; aStat.p++;
        hStat.gf += m.hs; hStat.ga += m.as;
        aStat.gf += m.as; aStat.ga += m.hs;
        hStat.gd = hStat.gf - hStat.ga;
        aStat.gd = aStat.gf - aStat.ga;

        if (m.hs > m.as) { hStat.w++; hStat.pts += 3; aStat.l++; }
        else if (m.hs < m.as) { aStat.w++; aStat.pts += 3; hStat.l++; }
        else { hStat.d++; aStat.d++; hStat.pts += 1; aStat.pts += 1; }
      }
    });

    table.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return b.gf - a.gf;
    });

    return table;
  }
};
