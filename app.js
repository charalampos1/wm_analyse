// ============================================================
// WM 2026 Match Simulator — Echte Daten & KI-Analyse
// ============================================================

(() => {
  'use strict';

  // ----------------------------------------------------------
  // Gemini API Configuration (hardcoded)
  // ----------------------------------------------------------
  const GEMINI_API_KEY = '';
  const GEMINI_MODEL = 'gemini-3.1-flash-lite';

  // ----------------------------------------------------------
  // WM 2026 Venues with GPS Coordinates
  // ----------------------------------------------------------
  const VENUES = {
    MEX: { name: 'Estadio Azteca', city: 'Mexico City', country: '🇲🇽', lat: 19.3029, lon: -99.1505, tz: 'America/Mexico_City' },
    GDL: { name: 'Estadio Akron', city: 'Guadalajara', country: '🇲🇽', lat: 20.6820, lon: -103.4625, tz: 'America/Mexico_City' },
    MTY: { name: 'Estadio BBVA', city: 'Monterrey', country: '🇲🇽', lat: 25.6705, lon: -100.2436, tz: 'America/Monterrey' },
    TOR: { name: 'BMO Field', city: 'Toronto', country: '🇨🇦', lat: 43.6332, lon: -79.4186, tz: 'America/Toronto' },
    VAN: { name: 'BC Place', city: 'Vancouver', country: '🇨🇦', lat: 49.2768, lon: -123.1120, tz: 'America/Vancouver' },
    NYC: { name: 'MetLife Stadium', city: 'East Rutherford', country: '🇺🇸', lat: 40.8135, lon: -74.0745, tz: 'America/New_York' },
    LAX: { name: 'SoFi Stadium', city: 'Los Angeles', country: '🇺🇸', lat: 33.9535, lon: -118.3392, tz: 'America/Los_Angeles' },
    DAL: { name: 'AT&T Stadium', city: 'Arlington', country: '🇺🇸', lat: 32.7473, lon: -97.0945, tz: 'America/Chicago' },
    SFO: { name: "Levi's Stadium", city: 'Santa Clara', country: '🇺🇸', lat: 37.4033, lon: -121.9694, tz: 'America/Los_Angeles' },
    MIA: { name: 'Hard Rock Stadium', city: 'Miami Gardens', country: '🇺🇸', lat: 25.9580, lon: -80.2389, tz: 'America/New_York' },
    ATL: { name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: '🇺🇸', lat: 33.7553, lon: -84.4006, tz: 'America/New_York' },
    HOU: { name: 'NRG Stadium', city: 'Houston', country: '🇺🇸', lat: 29.6847, lon: -95.4107, tz: 'America/Chicago' },
    PHI: { name: 'Lincoln Financial Field', city: 'Philadelphia', country: '🇺🇸', lat: 39.9008, lon: -75.1675, tz: 'America/New_York' },
    SEA: { name: 'Lumen Field', city: 'Seattle', country: '🇺🇸', lat: 47.5952, lon: -122.3316, tz: 'America/Los_Angeles' },
    BOS: { name: 'Gillette Stadium', city: 'Foxborough', country: '🇺🇸', lat: 42.0909, lon: -71.2643, tz: 'America/New_York' },
    KC:  { name: 'Arrowhead Stadium', city: 'Kansas City', country: '🇺🇸', lat: 39.0489, lon: -94.4839, tz: 'America/Chicago' },
  };

  // ----------------------------------------------------------
  // Team Flags
  // ----------------------------------------------------------
  const FLAGS = {
    'Mexiko': '🇲🇽', 'Südafrika': '🇿🇦', 'Südkorea': '🇰🇷', 'Tschechien': '🇨🇿',
    'Kanada': '🇨🇦', 'Bosnien-Herzegowina': '🇧🇦', 'Katar': '🇶🇦', 'Schweiz': '🇨🇭',
    'Brasilien': '🇧🇷', 'Marokko': '🇲🇦', 'Haiti': '🇭🇹', 'Schottland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'USA': '🇺🇸', 'Paraguay': '🇵🇾', 'Australien': '🇦🇺', 'Türkei': '🇹🇷',
    'Deutschland': '🇩🇪', 'Curaçao': '🇨🇼', 'Elfenbeinküste': '🇨🇮', 'Ecuador': '🇪🇨',
    'Niederlande': '🇳🇱', 'Japan': '🇯🇵', 'Schweden': '🇸🇪', 'Tunesien': '🇹🇳',
    'Belgien': '🇧🇪', 'Ägypten': '🇪🇬', 'Iran': '🇮🇷', 'Neuseeland': '🇳🇿',
    'Spanien': '🇪🇸', 'Kap Verde': '🇨🇻', 'Saudi-Arabien': '🇸🇦', 'Uruguay': '🇺🇾',
    'Frankreich': '🇫🇷', 'Senegal': '🇸🇳', 'Irak': '🇮🇶', 'Norwegen': '🇳🇴',
    'Argentinien': '🇦🇷', 'Algerien': '🇩🇿', 'Österreich': '🇦🇹', 'Jordanien': '🇯🇴',
    'Portugal': '🇵🇹', 'DR Kongo': '🇨🇩', 'Usbekistan': '🇺🇿', 'Kolumbien': '🇨🇴',
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Kroatien': '🇭🇷', 'Ghana': '🇬🇭', 'Panama': '🇵🇦',
  };

  // ----------------------------------------------------------
  // Groups
  // ----------------------------------------------------------
  const GROUPS = {
    A: ['Mexiko', 'Südafrika', 'Südkorea', 'Tschechien'],
    B: ['Kanada', 'Bosnien-Herzegowina', 'Katar', 'Schweiz'],
    C: ['Brasilien', 'Marokko', 'Haiti', 'Schottland'],
    D: ['USA', 'Paraguay', 'Australien', 'Türkei'],
    E: ['Deutschland', 'Curaçao', 'Elfenbeinküste', 'Ecuador'],
    F: ['Niederlande', 'Japan', 'Schweden', 'Tunesien'],
    G: ['Belgien', 'Ägypten', 'Iran', 'Neuseeland'],
    H: ['Spanien', 'Kap Verde', 'Saudi-Arabien', 'Uruguay'],
    I: ['Frankreich', 'Senegal', 'Irak', 'Norwegen'],
    J: ['Argentinien', 'Algerien', 'Österreich', 'Jordanien'],
    K: ['Portugal', 'DR Kongo', 'Usbekistan', 'Kolumbien'],
    L: ['England', 'Kroatien', 'Ghana', 'Panama'],
  };

  // ----------------------------------------------------------
  // All 72 Group Stage Matches
  // Status: 'played' (with scores) or 'upcoming'
  // Times in ET (Eastern Time), 24h format
  // ----------------------------------------------------------
  const MATCHES = [
    // ==================== MATCHDAY 1 (June 11–17) ====================

    // June 11
    { id: 1,  g: 'A', md: 1, date: '2026-06-11', time: '15:00', h: 'Mexiko',       a: 'Südafrika',          v: 'MEX', hs: 2, as: 0 },
    { id: 2,  g: 'A', md: 1, date: '2026-06-11', time: '21:00', h: 'Südkorea',      a: 'Tschechien',         v: 'GDL', hs: 2, as: 1 },

    // June 12
    { id: 3,  g: 'B', md: 1, date: '2026-06-12', time: '15:00', h: 'Kanada',        a: 'Bosnien-Herzegowina', v: 'TOR', hs: 1, as: 1 },
    { id: 4,  g: 'D', md: 1, date: '2026-06-12', time: '21:00', h: 'USA',           a: 'Paraguay',            v: 'LAX', hs: 4, as: 1 },

    // June 13
    { id: 5,  g: 'B', md: 1, date: '2026-06-13', time: '15:00', h: 'Katar',         a: 'Schweiz',            v: 'SFO', hs: 1, as: 1 },
    { id: 6,  g: 'C', md: 1, date: '2026-06-13', time: '18:00', h: 'Haiti',         a: 'Schottland',         v: 'BOS', hs: 0, as: 1 },
    { id: 7,  g: 'C', md: 1, date: '2026-06-13', time: '21:00', h: 'Brasilien',     a: 'Marokko',            v: 'NYC', hs: 1, as: 1 },
    { id: 8,  g: 'D', md: 1, date: '2026-06-13', time: '22:00', h: 'Australien',    a: 'Türkei',             v: 'VAN', hs: 2, as: 0 },

    // June 14
    { id: 9,  g: 'E', md: 1, date: '2026-06-14', time: '12:00', h: 'Deutschland',   a: 'Curaçao',            v: 'HOU', hs: 7, as: 1 },
    { id: 10, g: 'F', md: 1, date: '2026-06-14', time: '15:00', h: 'Niederlande',   a: 'Japan',              v: 'DAL', hs: 2, as: 2 },
    { id: 11, g: 'E', md: 1, date: '2026-06-14', time: '18:00', h: 'Elfenbeinküste',a: 'Ecuador',            v: 'PHI', hs: 1, as: 0 },
    { id: 12, g: 'F', md: 1, date: '2026-06-14', time: '21:00', h: 'Schweden',      a: 'Tunesien',           v: 'MTY', hs: 5, as: 1 },

    // June 15
    { id: 13, g: 'H', md: 1, date: '2026-06-15', time: '12:00', h: 'Spanien',       a: 'Kap Verde',          v: 'ATL', hs: 0, as: 0 },
    { id: 14, g: 'G', md: 1, date: '2026-06-15', time: '15:00', h: 'Belgien',       a: 'Ägypten',            v: 'MIA', hs: 1, as: 1 },
    { id: 15, g: 'H', md: 1, date: '2026-06-15', time: '18:00', h: 'Saudi-Arabien', a: 'Uruguay',            v: 'HOU', hs: 1, as: 1 },
    { id: 16, g: 'G', md: 1, date: '2026-06-15', time: '21:00', h: 'Iran',          a: 'Neuseeland',         v: 'SEA', hs: 2, as: 2 },

    // June 16
    { id: 17, g: 'I', md: 1, date: '2026-06-16', time: '15:00', h: 'Frankreich',    a: 'Senegal',            v: 'NYC', hs: 2, as: 1 },
    { id: 18, g: 'I', md: 1, date: '2026-06-16', time: '18:00', h: 'Irak',          a: 'Norwegen',           v: 'PHI', hs: 0, as: 2 },
    { id: 19, g: 'J', md: 1, date: '2026-06-16', time: '21:00', h: 'Argentinien',   a: 'Algerien',           v: 'DAL', hs: 5, as: 0 },
    { id: 20, g: 'J', md: 1, date: '2026-06-17', time: '00:00', h: 'Österreich',    a: 'Jordanien',          v: 'LAX', hs: 3, as: 1 },

    // June 17
    { id: 21, g: 'K', md: 1, date: '2026-06-17', time: '13:00', h: 'Portugal',      a: 'DR Kongo',           v: 'HOU', hs: 3, as: 0 },
    { id: 22, g: 'L', md: 1, date: '2026-06-17', time: '16:00', h: 'England',       a: 'Kroatien',           v: 'DAL', hs: 2, as: 1 },
    { id: 23, g: 'L', md: 1, date: '2026-06-17', time: '19:00', h: 'Ghana',         a: 'Panama',             v: 'ATL', hs: 2, as: 0 },
    { id: 24, g: 'K', md: 1, date: '2026-06-17', time: '22:00', h: 'Usbekistan',    a: 'Kolumbien',          v: 'SFO', hs: 0, as: 2 },

    // ==================== MATCHDAY 2 (June 18–23) ====================

    // June 18
    { id: 25, g: 'A', md: 2, date: '2026-06-18', time: '12:00', h: 'Tschechien',    a: 'Südafrika',          v: 'ATL', hs: 1, as: 1 },
    { id: 26, g: 'B', md: 2, date: '2026-06-18', time: '15:00', h: 'Schweiz',       a: 'Bosnien-Herzegowina', v: 'LAX', hs: 2, as: 1 },
    { id: 27, g: 'B', md: 2, date: '2026-06-18', time: '18:00', h: 'Kanada',        a: 'Katar',              v: 'VAN', hs: 2, as: 0 },
    { id: 28, g: 'A', md: 2, date: '2026-06-18', time: '21:00', h: 'Mexiko',        a: 'Südkorea',           v: 'GDL', hs: 2, as: 1 },

    // June 19
    { id: 29, g: 'D', md: 2, date: '2026-06-19', time: '15:00', h: 'USA',           a: 'Australien',         v: 'SEA', hs: 2, as: 0 },
    { id: 30, g: 'C', md: 2, date: '2026-06-19', time: '18:00', h: 'Schottland',    a: 'Marokko',            v: 'BOS', hs: 0, as: 2 },
    { id: 31, g: 'C', md: 2, date: '2026-06-19', time: '20:30', h: 'Brasilien',     a: 'Haiti',              v: 'PHI', hs: 4, as: 0 },
    { id: 32, g: 'D', md: 2, date: '2026-06-19', time: '23:00', h: 'Türkei',        a: 'Paraguay',           v: 'SFO', hs: 1, as: 2 },

    // June 20 — HEUTE
    { id: 33, g: 'F', md: 2, date: '2026-06-20', time: '13:00', h: 'Niederlande',   a: 'Schweden',           v: 'HOU' },
    { id: 34, g: 'E', md: 2, date: '2026-06-20', time: '16:00', h: 'Deutschland',   a: 'Elfenbeinküste',     v: 'TOR' },
    { id: 35, g: 'E', md: 2, date: '2026-06-20', time: '20:00', h: 'Ecuador',       a: 'Curaçao',            v: 'KC'  },
    { id: 36, g: 'F', md: 2, date: '2026-06-20', time: '23:00', h: 'Tunesien',      a: 'Japan',              v: 'MTY' },

    // June 21
    { id: 37, g: 'H', md: 2, date: '2026-06-21', time: '12:00', h: 'Spanien',       a: 'Saudi-Arabien',      v: 'ATL' },
    { id: 38, g: 'G', md: 2, date: '2026-06-21', time: '15:00', h: 'Belgien',       a: 'Iran',               v: 'LAX' },
    { id: 39, g: 'H', md: 2, date: '2026-06-21', time: '18:00', h: 'Uruguay',       a: 'Kap Verde',          v: 'MIA' },
    { id: 40, g: 'G', md: 2, date: '2026-06-21', time: '21:00', h: 'Neuseeland',    a: 'Ägypten',            v: 'VAN' },

    // June 22
    { id: 41, g: 'J', md: 2, date: '2026-06-22', time: '13:00', h: 'Argentinien',   a: 'Österreich',         v: 'DAL' },
    { id: 42, g: 'I', md: 2, date: '2026-06-22', time: '17:00', h: 'Frankreich',    a: 'Irak',               v: 'PHI' },
    { id: 43, g: 'I', md: 2, date: '2026-06-22', time: '20:00', h: 'Norwegen',      a: 'Senegal',            v: 'NYC' },
    { id: 44, g: 'J', md: 2, date: '2026-06-22', time: '23:00', h: 'Jordanien',     a: 'Algerien',           v: 'SFO' },

    // June 23
    { id: 45, g: 'K', md: 2, date: '2026-06-23', time: '13:00', h: 'Portugal',      a: 'Usbekistan',         v: 'HOU' },
    { id: 46, g: 'L', md: 2, date: '2026-06-23', time: '16:00', h: 'England',       a: 'Ghana',              v: 'BOS' },
    { id: 47, g: 'L', md: 2, date: '2026-06-23', time: '19:00', h: 'Panama',        a: 'Kroatien',           v: 'TOR' },
    { id: 48, g: 'K', md: 2, date: '2026-06-23', time: '22:00', h: 'Kolumbien',     a: 'DR Kongo',           v: 'GDL' },

    // ==================== MATCHDAY 3 (June 24–27) ====================

    // June 24 — Groups A, B, C
    { id: 49, g: 'A', md: 3, date: '2026-06-24', time: '12:00', h: 'Tschechien',    a: 'Mexiko',             v: 'MEX' },
    { id: 50, g: 'A', md: 3, date: '2026-06-24', time: '12:00', h: 'Südafrika',     a: 'Südkorea',           v: 'MTY' },
    { id: 51, g: 'B', md: 3, date: '2026-06-24', time: '18:00', h: 'Schweiz',       a: 'Kanada',             v: 'VAN' },
    { id: 52, g: 'B', md: 3, date: '2026-06-24', time: '18:00', h: 'Bosnien-Herzegowina', a: 'Katar',        v: 'SEA' },
    { id: 53, g: 'C', md: 3, date: '2026-06-24', time: '21:00', h: 'Marokko',       a: 'Haiti',              v: 'NYC' },
    { id: 54, g: 'C', md: 3, date: '2026-06-24', time: '21:00', h: 'Schottland',    a: 'Brasilien',          v: 'BOS' },

    // June 25 — Groups D, E, F
    { id: 55, g: 'D', md: 3, date: '2026-06-25', time: '12:00', h: 'Türkei',        a: 'USA',                v: 'LAX' },
    { id: 56, g: 'D', md: 3, date: '2026-06-25', time: '12:00', h: 'Paraguay',      a: 'Australien',         v: 'SFO' },
    { id: 57, g: 'E', md: 3, date: '2026-06-25', time: '18:00', h: 'Curaçao',       a: 'Elfenbeinküste',     v: 'PHI' },
    { id: 58, g: 'E', md: 3, date: '2026-06-25', time: '18:00', h: 'Ecuador',       a: 'Deutschland',        v: 'NYC' },
    { id: 59, g: 'F', md: 3, date: '2026-06-25', time: '21:00', h: 'Japan',         a: 'Schweden',           v: 'DAL' },
    { id: 60, g: 'F', md: 3, date: '2026-06-25', time: '21:00', h: 'Tunesien',      a: 'Niederlande',        v: 'KC'  },

    // June 26 — Groups G, H, I
    { id: 61, g: 'G', md: 3, date: '2026-06-26', time: '12:00', h: 'Ägypten',       a: 'Iran',               v: 'SEA' },
    { id: 62, g: 'G', md: 3, date: '2026-06-26', time: '12:00', h: 'Neuseeland',    a: 'Belgien',            v: 'VAN' },
    { id: 63, g: 'H', md: 3, date: '2026-06-26', time: '18:00', h: 'Kap Verde',     a: 'Spanien',            v: 'ATL' },
    { id: 64, g: 'H', md: 3, date: '2026-06-26', time: '18:00', h: 'Saudi-Arabien', a: 'Uruguay',            v: 'MIA' },
    { id: 65, g: 'I', md: 3, date: '2026-06-26', time: '21:00', h: 'Norwegen',      a: 'Frankreich',         v: 'BOS' },
    { id: 66, g: 'I', md: 3, date: '2026-06-26', time: '21:00', h: 'Senegal',       a: 'Irak',               v: 'TOR' },

    // June 27 — Groups J, K, L
    { id: 67, g: 'J', md: 3, date: '2026-06-27', time: '12:00', h: 'Jordanien',     a: 'Argentinien',        v: 'DAL' },
    { id: 68, g: 'J', md: 3, date: '2026-06-27', time: '12:00', h: 'Algerien',      a: 'Österreich',         v: 'KC'  },
    { id: 69, g: 'K', md: 3, date: '2026-06-27', time: '18:00', h: 'DR Kongo',      a: 'Usbekistan',         v: 'ATL' },
    { id: 70, g: 'K', md: 3, date: '2026-06-27', time: '18:00', h: 'Kolumbien',     a: 'Portugal',           v: 'MIA' },
    { id: 71, g: 'L', md: 3, date: '2026-06-27', time: '21:00', h: 'England',       a: 'Panama',             v: 'HOU' },
    { id: 72, g: 'L', md: 3, date: '2026-06-27', time: '21:00', h: 'Kroatien',      a: 'Ghana',              v: 'PHI' },
  ];

  // ----------------------------------------------------------
  // WMO Weathercodes → Beschreibung + Emoji
  // ----------------------------------------------------------
  const WEATHER_CODES = {
    0: { text: 'Klarer Himmel', emoji: '☀️' },
    1: { text: 'Überwiegend klar', emoji: '🌤️' },
    2: { text: 'Teilweise bewölkt', emoji: '⛅' },
    3: { text: 'Bewölkt', emoji: '☁️' },
    45: { text: 'Nebel', emoji: '🌫️' },
    48: { text: 'Raureif-Nebel', emoji: '🌫️' },
    51: { text: 'Leichter Nieselregen', emoji: '🌦️' },
    53: { text: 'Mäßiger Nieselregen', emoji: '🌦️' },
    55: { text: 'Starker Nieselregen', emoji: '🌧️' },
    61: { text: 'Leichter Regen', emoji: '🌦️' },
    63: { text: 'Mäßiger Regen', emoji: '🌧️' },
    65: { text: 'Starker Regen', emoji: '🌧️' },
    71: { text: 'Leichter Schneefall', emoji: '🌨️' },
    73: { text: 'Mäßiger Schneefall', emoji: '🌨️' },
    75: { text: 'Starker Schneefall', emoji: '❄️' },
    80: { text: 'Leichte Regenschauer', emoji: '🌦️' },
    81: { text: 'Mäßige Regenschauer', emoji: '🌧️' },
    82: { text: 'Starke Regenschauer', emoji: '⛈️' },
    85: { text: 'Leichte Schneeschauer', emoji: '🌨️' },
    86: { text: 'Starke Schneeschauer', emoji: '❄️' },
    95: { text: 'Gewitter', emoji: '⛈️' },
    96: { text: 'Gewitter mit Hagel', emoji: '⛈️' },
    99: { text: 'Schweres Gewitter mit Hagel', emoji: '⛈️' },
  };

  // ----------------------------------------------------------
  // DOM Elements
  // ----------------------------------------------------------
  const $ = (id) => document.getElementById(id);

  const dom = {
    matchSelect:      $('match-select'),
    matchInfoCard:    $('match-info-card'),
    matchTeams:       $('match-teams'),
    matchGroupBadge:  $('match-group-badge'),
    matchMdBadge:     $('match-md-badge'),
    matchDate:        $('match-date'),
    matchVenue:       $('match-venue'),
    matchWeather:     $('match-weather'),
    matchWeatherLoad: $('match-weather-loading'),
    matchScore:       $('match-score-display'),
    matchStatus:      $('match-status-badge'),
    customPrompt:     $('custom-prompt'),
    startBtn:         $('start-btn'),
    btnText:          $('btn-text'),
    btnIconPlay:      $('btn-icon-play'),
    btnSpinner:       $('btn-spinner'),
    outputSection:    $('output-section'),
    loadingSection:   $('loading-section'),
    errorSection:     $('error-section'),
    errorMessage:     $('error-message'),
    reportContent:    $('report-content'),
    reportHeader:     $('report-header'),
    reportTitle:      $('report-title'),
    reportMeta:       $('report-meta'),
    toastContainer:   $('toast-container'),
  };

  // ----------------------------------------------------------
  // State
  // ----------------------------------------------------------
  let currentWeather = null;

  // ----------------------------------------------------------
  // Utility: Check if a match is played
  // ----------------------------------------------------------
  function isMatchPlayed(match) {
    return match.hs !== undefined && match.as !== undefined;
  }

  // ----------------------------------------------------------
  // Utility: Format date for display
  // ----------------------------------------------------------
  function formatDate(dateStr, timeStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    const [hh, mm] = timeStr.split(':').map(Number);
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const dt = new Date(y, m - 1, d);
    return `${days[dt.getDay()]}, ${d}. ${months[m - 1]} ${y} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} ET`;
  }

  // ----------------------------------------------------------
  // Populate Match Dropdown
  // ----------------------------------------------------------
  function populateMatchSelect() {
    const mdLabels = {
      1: 'Spieltag 1 · 11.–17. Juni',
      2: 'Spieltag 2 · 18.–23. Juni',
      3: 'Spieltag 3 · 24.–27. Juni',
    };

    [1, 2, 3].forEach(md => {
      const group = document.createElement('optgroup');
      group.label = mdLabels[md];

      const mdMatches = MATCHES.filter(m => m.md === md)
        .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

      mdMatches.forEach(match => {
        const opt = document.createElement('option');
        opt.value = match.id;
        const hFlag = FLAGS[match.h] || '';
        const aFlag = FLAGS[match.a] || '';
        const played = isMatchPlayed(match);
        const score = played ? ` [${match.hs}:${match.as}]` : '';
        const dateShort = match.date.slice(5).replace('-', '.');
        opt.textContent = `${dateShort} | ${hFlag} ${match.h} vs ${match.a} ${aFlag}${score}`;
        if (played) opt.className = 'text-slate-400';
        group.appendChild(opt);
      });

      dom.matchSelect.appendChild(group);
    });
  }

  // ----------------------------------------------------------
  // Group Standings Calculator
  // ----------------------------------------------------------
  function getGroupStandings(groupId) {
    const teams = GROUPS[groupId];
    const stats = {};

    teams.forEach(t => {
      stats[t] = { team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
    });

    MATCHES.filter(m => m.g === groupId && isMatchPlayed(m)).forEach(m => {
      const home = stats[m.h];
      const away = stats[m.a];
      if (!home || !away) return;

      home.p++; away.p++;
      home.gf += m.hs; home.ga += m.as;
      away.gf += m.as; away.ga += m.hs;

      if (m.hs > m.as) {
        home.w++; home.pts += 3;
        away.l++;
      } else if (m.hs < m.as) {
        away.w++; away.pts += 3;
        home.l++;
      } else {
        home.d++; home.pts += 1;
        away.d++; away.pts += 1;
      }

      home.gd = home.gf - home.ga;
      away.gd = away.gf - away.ga;
    });

    return Object.values(stats).sort((a, b) =>
      b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team)
    );
  }

  function formatStandings(groupId) {
    const standings = getGroupStandings(groupId);
    let table = `Gruppe ${groupId}:\n`;
    table += `Platz | Team              | Sp | S | U | N | Tore  | TD  | Pkt\n`;
    table += `------|-------------------|----|----|----|----|-------|-----|----\n`;
    standings.forEach((s, i) => {
      table += `${i + 1}.    | ${s.team.padEnd(17)} | ${s.p}  | ${s.w}  | ${s.d}  | ${s.l}  | ${s.gf}:${s.ga}   | ${s.gd >= 0 ? '+' : ''}${s.gd}  | ${s.pts}\n`;
    });
    return table;
  }

  // ----------------------------------------------------------
  // Get previous results for a team
  // ----------------------------------------------------------
  function getTeamResults(teamName) {
    return MATCHES
      .filter(m => (m.h === teamName || m.a === teamName) && isMatchPlayed(m))
      .map(m => {
        const isHome = m.h === teamName;
        const opponent = isHome ? m.a : m.h;
        const score = isHome ? `${m.hs}:${m.as}` : `${m.as}:${m.hs}`;
        const result = (isHome ? m.hs > m.as : m.as > m.hs) ? 'S' :
                       (m.hs === m.as) ? 'U' : 'N';
        return `${result} ${score} vs. ${opponent} (Spieltag ${m.md})`;
      })
      .join('\n');
  }

  // ----------------------------------------------------------
  // Weather API (Open-Meteo)
  // ----------------------------------------------------------
  async function fetchWeather(venueId, dateStr, timeStr) {
    const venue = VENUES[venueId];
    if (!venue) return null;

    const [hh] = timeStr.split(':').map(Number);

    try {
      // Determine if we need forecast or historical data
      const matchDate = new Date(dateStr + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const diffDays = Math.ceil((matchDate - today) / (1000 * 60 * 60 * 24));

      let url;
      if (diffDays < 0) {
        // Past: use archive API
        url = `https://archive-api.open-meteo.com/v1/archive?latitude=${venue.lat}&longitude=${venue.lon}&start_date=${dateStr}&end_date=${dateStr}&hourly=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m&timezone=${encodeURIComponent(venue.tz)}`;
      } else {
        // Future or today: use forecast API
        url = `https://api.open-meteo.com/v1/forecast?latitude=${venue.lat}&longitude=${venue.lon}&hourly=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m&forecast_days=16&timezone=${encodeURIComponent(venue.tz)}`;
      }

      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`Weather API: ${resp.status}`);
      const data = await resp.json();

      if (!data.hourly || !data.hourly.time) return null;

      // Find the hour closest to the match time
      // Convert ET time to venue local time approximately
      const targetHour = hh; // Simplified — we search for closest match
      const targetDateStr = dateStr;

      let bestIdx = -1;
      let bestDiff = Infinity;

      data.hourly.time.forEach((t, i) => {
        const dt = new Date(t);
        const dayStr = dt.toISOString().slice(0, 10);
        if (dayStr === targetDateStr) {
          const hourDiff = Math.abs(dt.getHours() - targetHour);
          if (hourDiff < bestDiff) {
            bestDiff = hourDiff;
            bestIdx = i;
          }
        }
      });

      if (bestIdx === -1) {
        // Try finding any data point on that date
        for (let i = 0; i < data.hourly.time.length; i++) {
          if (data.hourly.time[i].startsWith(targetDateStr)) {
            bestIdx = i;
            break;
          }
        }
      }

      if (bestIdx === -1) return null;

      const weatherCode = data.hourly.weathercode[bestIdx];
      const weatherInfo = WEATHER_CODES[weatherCode] || { text: 'Unbekannt', emoji: '❓' };

      return {
        temp: Math.round(data.hourly.temperature_2m[bestIdx]),
        humidity: data.hourly.relativehumidity_2m?.[bestIdx] ?? '–',
        wind: Math.round(data.hourly.windspeed_10m[bestIdx]),
        code: weatherCode,
        text: weatherInfo.text,
        emoji: weatherInfo.emoji,
      };
    } catch (err) {
      console.warn('Weather fetch failed:', err);
      return null;
    }
  }

  // ----------------------------------------------------------
  // Prompt Builder
  // ----------------------------------------------------------
  function buildPrompt(match, weather, customText) {
    const venue = VENUES[match.v];
    const standings = formatStandings(match.g);
    const homeResults = getTeamResults(match.h);
    const awayResults = getTeamResults(match.a);
    const played = isMatchPlayed(match);

    const weatherDesc = weather
      ? `${weather.emoji} ${weather.text}, ${weather.temp}°C, Wind: ${weather.wind} km/h, Luftfeuchtigkeit: ${weather.humidity}%`
      : 'Keine Wetterdaten verfügbar';

    if (played) {
      // -- SPIELBERICHT für gespielte Partie --
      let prompt = `Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 Gruppenspiel.

**Partie:** ${FLAGS[match.h]} ${match.h} ${match.hs} : ${match.as} ${match.a} ${FLAGS[match.a]}
**Gruppe:** ${match.g} · Spieltag ${match.md}
**Datum:** ${formatDate(match.date, match.time)}
**Stadion:** ${venue.name}, ${venue.city}
**Wetterbedingungen:** ${weatherDesc}

**Aktuelle Gruppentabelle:**
${standings}

**Bisherige Turnierergebnisse ${match.h}:**
${homeResults || 'Erstes Spiel im Turnier'}

**Bisherige Turnierergebnisse ${match.a}:**
${awayResults || 'Erstes Spiel im Turnier'}

Erstelle einen realistischen, spannenden Spielbericht mit:
- **Spielverlauf** mit konkreten Torschützen (reale Spieler der Nationalmannschaften!) und Spielminuten, passend zum Endergebnis ${match.hs}:${match.as}
- **Taktische Analyse** beider Teams (Aufstellung, Formation, Spielstil)
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen** auf das Spiel
- **Stimmung im Stadion** und Zuschauer-Atmosphäre
- **Auswirkung auf die Gruppentabelle** — wer profitiert, wer steht unter Druck?
- **Fazit und Ausblick** auf die nächsten Spiele

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler der Nationalmannschaften. Sei detailliert und emotional.`;

      if (customText) prompt += `\n\n**Zusätzliche Anweisungen:** ${customText}`;
      return prompt;

    } else {
      // -- PROGNOSE für kommendes Spiel --
      let prompt = `Du bist ein erstklassiger Fußball-Analyst. Erstelle eine detaillierte Spielprognose und Vorschau für folgendes WM 2026 Gruppenspiel.

**Partie:** ${FLAGS[match.h]} ${match.h} vs. ${match.a} ${FLAGS[match.a]}
**Gruppe:** ${match.g} · Spieltag ${match.md}
**Datum:** ${formatDate(match.date, match.time)}
**Stadion:** ${venue.name}, ${venue.city}
**Wetterbedingungen am Spielort:** ${weatherDesc}

**Aktuelle Gruppentabelle vor dem Spiel:**
${standings}

**Bisherige Turnierergebnisse ${match.h}:**
${homeResults || 'Erstes Spiel im Turnier'}

**Bisherige Turnierergebnisse ${match.a}:**
${awayResults || 'Erstes Spiel im Turnier'}

Analysiere das kommende Spiel umfassend:

1. **Ausgangslage & Motivation** — Was steht für jedes Team auf dem Spiel? Gruppenkonstellation, Punkte-Situation, muss ein Team zwingend gewinnen?
2. **Kader & Verletzungen** — Bekannte Ausfälle, Sperren, Fitnesszustand der Schlüsselspieler
3. **Erwartete Aufstellungen** — Reale, aktuelle Spieler beider Nationalmannschaften mit Formationen (z.B. 4-3-3, 3-5-2)
4. **Taktik-Analyse** — Wie werden beide Teams voraussichtlich spielen? Pressing, Ballbesitz, Konter, etc.
5. **Schlüsselduelle** — Welche Spieler-Matchups entscheiden das Spiel?
6. **Wettquoten & Favoritenrolle** — Wer ist Favorit und warum?
7. **Wetter-Einfluss** — Wie beeinflussen ${weatherDesc} das Spiel?
8. **Historische Bilanz** — Bisherige Duelle beider Nationen
9. **Prognose** — Dein Ergebnis-Tipp mit Begründung, erwartete Torschützen
10. **Fazit** — Kurze Zusammenfassung und Empfehlung

Formatiere alles mit Markdown. Verwende reale, aktuelle Spieler der Nationalmannschaften. Sei fundiert und detailliert.`;

      if (customText) prompt += `\n\n**Zusätzliche Anweisungen:** ${customText}`;
      return prompt;
    }
  }

  // ----------------------------------------------------------
  // Gemini API Call
  // ----------------------------------------------------------
  async function callGeminiAPI(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const msg = err?.error?.message || `HTTP ${response.status}`;
      if (response.status === 401 || response.status === 403) throw new Error('Ungültiger API-Key.');
      if (response.status === 429) throw new Error('Rate-Limit erreicht. Bitte kurz warten.');
      throw new Error(`API-Fehler: ${msg}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      if (data?.candidates?.[0]?.finishReason === 'SAFETY') throw new Error('Antwort aus Sicherheitsgründen blockiert.');
      throw new Error('Keine Antwort von der API erhalten.');
    }
    return text;
  }

  // ----------------------------------------------------------
  // UI: Show Match Info
  // ----------------------------------------------------------
  async function showMatchInfo(match) {
    if (!match) {
      dom.matchInfoCard.classList.add('hidden');
      return;
    }

    const venue = VENUES[match.v];
    const played = isMatchPlayed(match);
    const hFlag = FLAGS[match.h] || '';
    const aFlag = FLAGS[match.a] || '';

    // Teams
    dom.matchTeams.innerHTML = `
      <span class="text-2xl sm:text-3xl font-display font-black text-white">${hFlag} ${match.h}</span>
      <span class="text-lg sm:text-xl font-bold text-slate-600 mx-3">vs</span>
      <span class="text-2xl sm:text-3xl font-display font-black text-white">${match.a} ${aFlag}</span>
    `;

    // Badges
    dom.matchGroupBadge.textContent = `Gruppe ${match.g}`;
    dom.matchMdBadge.textContent = `Spieltag ${match.md}`;

    // Date & Venue
    dom.matchDate.textContent = formatDate(match.date, match.time);
    dom.matchVenue.textContent = `${venue.name}, ${venue.city} ${venue.country}`;

    // Score
    if (played) {
      dom.matchScore.innerHTML = `<span class="text-4xl font-display font-black text-white">${match.hs} : ${match.as}</span>`;
      dom.matchScore.classList.remove('hidden');
      dom.matchStatus.textContent = 'Gespielt';
      dom.matchStatus.className = 'px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20';
      dom.btnText.textContent = 'Spielbericht generieren';
    } else {
      dom.matchScore.innerHTML = '';
      dom.matchScore.classList.add('hidden');

      // Check if it's today
      const today = new Date().toISOString().slice(0, 10);
      if (match.date === today) {
        dom.matchStatus.textContent = 'Heute';
        dom.matchStatus.className = 'px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 animate-pulse';
      } else {
        dom.matchStatus.textContent = 'Anstehend';
        dom.matchStatus.className = 'px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20';
      }
      dom.btnText.textContent = 'Spielprognose generieren';
    }

    // Show card
    dom.matchInfoCard.classList.remove('hidden');

    // Fetch weather async
    dom.matchWeather.classList.add('hidden');
    dom.matchWeatherLoad.classList.remove('hidden');

    currentWeather = await fetchWeather(match.v, match.date, match.time);

    dom.matchWeatherLoad.classList.add('hidden');
    if (currentWeather) {
      dom.matchWeather.innerHTML = `
        <span class="text-2xl">${currentWeather.emoji}</span>
        <div>
          <div class="text-sm font-semibold text-white">${currentWeather.temp}°C · ${currentWeather.text}</div>
          <div class="text-xs text-slate-500">Wind: ${currentWeather.wind} km/h · Luftfeuchtigkeit: ${currentWeather.humidity}%</div>
        </div>
      `;
      dom.matchWeather.classList.remove('hidden');
    } else {
      dom.matchWeather.innerHTML = `
        <span class="text-2xl">❓</span>
        <div class="text-sm text-slate-500">Wetterdaten nicht verfügbar</div>
      `;
      dom.matchWeather.classList.remove('hidden');
    }
  }

  // ----------------------------------------------------------
  // UI: Toast
  // ----------------------------------------------------------
  function showToast(message, type = 'error') {
    const colors = {
      error: 'bg-red-500/90 border-red-400/30',
      success: 'bg-emerald-500/90 border-emerald-400/30',
      info: 'bg-sky-500/90 border-sky-400/30',
    };
    const toast = document.createElement('div');
    toast.className = `pointer-events-auto px-5 py-3 rounded-xl border ${colors[type] || colors.info} text-white text-sm font-medium shadow-2xl backdrop-blur-sm toast-enter`;
    toast.textContent = message;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ----------------------------------------------------------
  // UI: Loading State
  // ----------------------------------------------------------
  function setLoading(loading) {
    dom.startBtn.disabled = loading;
    if (loading) {
      dom.btnIconPlay.classList.add('hidden');
      dom.btnSpinner.classList.remove('hidden');
      dom.btnText.textContent = 'Generiere...';
      dom.loadingSection.classList.remove('hidden');
      dom.outputSection.classList.add('hidden');
      dom.errorSection.classList.add('hidden');
    } else {
      dom.btnIconPlay.classList.remove('hidden');
      dom.btnSpinner.classList.add('hidden');
      dom.loadingSection.classList.add('hidden');
      // btn text is restored by showMatchInfo
    }
  }

  // ----------------------------------------------------------
  // UI: Show Report
  // ----------------------------------------------------------
  function showReport(markdown, match) {
    const played = isMatchPlayed(match);
    const hFlag = FLAGS[match.h] || '';
    const aFlag = FLAGS[match.a] || '';
    const venue = VENUES[match.v];

    dom.reportTitle.textContent = `${hFlag} ${match.h} vs. ${match.a} ${aFlag}`;
    dom.reportMeta.textContent = `Gruppe ${match.g} · Spieltag ${match.md} · ${venue.name}, ${venue.city} · ${played ? 'Spielbericht' : 'Spielprognose'}`;

    dom.reportContent.innerHTML = marked.parse(markdown);
    dom.errorSection.classList.add('hidden');
    dom.loadingSection.classList.add('hidden');
    dom.outputSection.classList.remove('hidden');
    dom.outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ----------------------------------------------------------
  // UI: Show Error
  // ----------------------------------------------------------
  function showError(message) {
    dom.errorMessage.textContent = message;
    dom.errorSection.classList.remove('hidden');
    dom.outputSection.classList.add('hidden');
    dom.loadingSection.classList.add('hidden');
  }

  // ----------------------------------------------------------
  // Start Simulation
  // ----------------------------------------------------------
  async function startSimulation() {
    const matchId = parseInt(dom.matchSelect.value, 10);
    const match = MATCHES.find(m => m.id === matchId);
    if (!match) {
      showToast('Bitte wähle ein Spiel aus.', 'error');
      return;
    }

    const customText = dom.customPrompt.value.trim();
    const prompt = buildPrompt(match, currentWeather, customText || null);

    setLoading(true);
    try {
      const report = await callGeminiAPI(prompt);
      showReport(report, match);
      showToast(isMatchPlayed(match) ? 'Spielbericht generiert!' : 'Spielprognose generiert!', 'success');
    } catch (err) {
      console.error('Simulation error:', err);
      showError(err.message);
      showToast(err.message, 'error');
    } finally {
      setLoading(false);
      // Restore button text
      const m = MATCHES.find(m => m.id === matchId);
      if (m) dom.btnText.textContent = isMatchPlayed(m) ? 'Spielbericht generieren' : 'Spielprognose generieren';
    }
  }

  // ----------------------------------------------------------
  // Initialize
  // ----------------------------------------------------------
  function init() {
    populateMatchSelect();

    // Match change handler
    dom.matchSelect.addEventListener('change', () => {
      const id = parseInt(dom.matchSelect.value, 10);
      const match = MATCHES.find(m => m.id === id);
      showMatchInfo(match);
    });

    // Start button
    dom.startBtn.addEventListener('click', startSimulation);

    // Pre-select a good default — find today's first upcoming match or the latest played one
    const today = new Date().toISOString().slice(0, 10);
    const todayMatch = MATCHES.find(m => m.date === today);
    const firstUpcoming = MATCHES.find(m => !isMatchPlayed(m));
    const defaultMatch = todayMatch || firstUpcoming || MATCHES[0];
    dom.matchSelect.value = defaultMatch.id;
    showMatchInfo(defaultMatch);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
