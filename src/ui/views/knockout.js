import { store } from '../../state/store.js';
import { showToast } from '../components.js';
import { fetchWeather } from '../../services/weather.js';
import { callGeminiAPI } from '../../services/gemini.js';
import { marked } from 'marked';

/**
 * Parse the prediction score from an AI response.
 * Looks for patterns like:
 * - **TIPP: [Team] [X]:[Y] [Team]**
 * - **TIPP: X:Y**
 * - **90-MIN: [Team] [X]:[Y] [Team]**
 * - **GESAMT: [Team] [A]:[B] [Team]**
 */
function parseKoPrediction(report) {
  const result = { nine0: null, total: null };

  // Parse 90-minute prediction
  const nine0Patterns = [
    /\*\*90-MIN:\s*(?:.*?\s+)?(\d+)\s*[:\-–—]\s*(\d+)\s*(?:.*?)?\*\*/i,
    /\*\*TIPP:\s*(?:.*?\s+)?(\d+)\s*[:\-–—]\s*(\d+)\s*(?:.*?)?\*\*/i,
    /TIPP:\s*(?:.*?\s+)?(\d+)\s*[:\-–—]\s*(\d+)/i,
  ];
  for (const pattern of nine0Patterns) {
    const match = report.match(pattern);
    if (match) {
      result.nine0 = { home: parseInt(match[1], 10), away: parseInt(match[2], 10) };
      break;
    }
  }

  // Parse total/extra time prediction
  const totalPatterns = [
    /\*\*GESAMT:\s*(?:.*?\s+)?(\d+)\s*[:\-–—]\s*(\d+)\s*(?:.*?)?\*\*/i,
  ];
  for (const pattern of totalPatterns) {
    const match = report.match(pattern);
    if (match) {
      result.total = { home: parseInt(match[1], 10), away: parseInt(match[2], 10) };
      break;
    }
  }

  return result;
}

/**
 * Determine confidence level from the AI response text.
 */
function parseKoConfidence(report) {
  const lower = report.toLowerCase();
  if (/\b(hoch|high|strong|sicher|clear|confident)\b/i.test(lower)) return 'Hoch';
  if (/\b(niedrig|low|weak|unsicher|uncertain|doubtful)\b/i.test(lower)) return 'Niedrig';
  return 'Mittel';
}

/**
 * Render a KO prediction highlight box with 90-min and total scores.
 */
function renderKoPredictionBox(prediction, homeTeam, awayTeam) {
  if (!prediction || !prediction.nine0) return '';

  const confidence = parseKoConfidence(
    document.getElementById('ko-analysis-content')?.textContent || ''
  );
  const confidenceColor = confidence === 'Hoch' ? 'text-emerald-400' : confidence === 'Niedrig' ? 'text-amber-400' : 'text-sky-400';
  const confidenceBg = confidence === 'Hoch' ? 'bg-emerald-500/10 border-emerald-500/30' : confidence === 'Niedrig' ? 'bg-amber-500/10 border-amber-500/30' : 'bg-sky-500/10 border-sky-500/30';

  let html = `
    <div class="prediction-highlight card p-4 mb-4 border-2 border-accent/40 bg-gradient-to-r from-accent/5 to-transparent">
      <div class="text-xs font-bold text-accent uppercase tracking-wider mb-2">⚡ KI-Spielprognose (K.O.-Runde)</div>
      <div class="mb-3">
        <div class="text-[10px] text-txt-muted uppercase tracking-wider mb-1">90 Minuten (Tipp)</div>
        <div class="flex items-center justify-center gap-3">
          <span class="text-lg font-display font-bold text-white">${homeTeam || 'Heim'}</span>
          <span class="text-5xl font-display font-black text-accent tracking-wider">${prediction.nine0.home} : ${prediction.nine0.away}</span>
          <span class="text-lg font-display font-bold text-white">${awayTeam || 'Gast'}</span>
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 mb-2">
        <span class="px-3 py-1 rounded-md ${confidenceBg} ${confidenceColor} text-xs font-bold border">${confidence} Konfidenz</span>
        <span class="text-xs text-txt-muted">4 Punkte bei richtigem Exaktergebnis</span>
      </div>
    </div>`;

  // Add total score if available
  if (prediction.total) {
    html += `
    <div class="card p-3 mb-4 border border-border/60 bg-bg-card">
      <div class="text-[10px] text-txt-muted uppercase tracking-wider mb-1 text-center">Gesamtergebnis (nach Verlängerung)</div>
      <div class="flex items-center justify-center gap-3">
        <span class="text-base font-display font-bold text-white">${homeTeam || 'Heim'}</span>
        <span class="text-3xl font-display font-bold text-txt font-mono">${prediction.total.home} : ${prediction.total.away}</span>
        <span class="text-base font-display font-bold text-white">${awayTeam || 'Gast'}</span>
      </div>
    </div>`;
  }

  return html;
}

/**
 * Official FIFA World Cup 2026 Bracket Structure
 * 
 * R32 (Round of 32) = Sechzehntelfinale — 16 matches (Match 73-88)
 * R16 (Round of 16) = Achtelfinale — 8 matches
 * QF = Viertelfinale — 4 matches
 * SF = Halbfinale — 2 matches
 * Third = Spiel um Platz 3
 * Final = Finale
 */

// Real-world R32 matchups (fixed team names, dates, times, venues)
const R32_BRACKET = [
  { id: 'r32-73',  matchNum: 73,  h: 'Südafrika',            a: 'Kanada',              date: '2026-06-28', time: '',       v: 'LAX' },
  { id: 'r32-74',  matchNum: 74,  h: 'Deutschland',          a: 'Paraguay',            date: '2026-06-29', time: '22:30',  v: 'BOS' },
  { id: 'r32-75',  matchNum: 75,  h: 'Niederlande',          a: 'Marokko',             date: '2026-06-30', time: '02:00',  v: 'MTY' },
  { id: 'r32-76',  matchNum: 76,  h: 'Brasilien',            a: 'Japan',               date: '2026-06-29', time: '19:00',  v: 'HOU' },
  { id: 'r32-77',  matchNum: 77,  h: 'Frankreich',           a: 'Schweden',            date: '2026-06-30', time: '23:00',  v: 'NYC' },
  { id: 'r32-78',  matchNum: 78,  h: 'Elfenbeinküste',       a: 'Norwegen',            date: '2026-06-30', time: '19:00',  v: 'DAL' },
  { id: 'r32-79',  matchNum: 79,  h: 'Mexiko',               a: 'Ecuador',             date: '2026-07-01', time: '02:00',  v: 'MEX' },
  { id: 'r32-80',  matchNum: 80,  h: 'England',              a: 'DR Kongo',            date: '2026-07-01', time: '18:00',  v: 'ATL' },
  { id: 'r32-81',  matchNum: 81,  h: 'USA',                  a: 'Bosnien-Herzegowina', date: '2026-07-02', time: '02:00',  v: 'SFO' },
  { id: 'r32-82',  matchNum: 82,  h: 'Belgien',              a: 'Senegal',             date: '2026-07-01', time: '22:00',  v: 'SEA' },
  { id: 'r32-83',  matchNum: 83,  h: 'Portugal',             a: 'Kroatien',            date: '2026-07-03', time: '01:00',  v: 'TOR' },
  { id: 'r32-84',  matchNum: 84,  h: 'Spanien',              a: 'Österreich',          date: '2026-07-02', time: '21:00',  v: 'LAX' },
  { id: 'r32-85',  matchNum: 85,  h: 'Schweiz',              a: 'Algerien',            date: '2026-07-03', time: '05:00',  v: 'VAN' },
  { id: 'r32-86',  matchNum: 86,  h: 'Argentinien',          a: 'Kap Verde',           date: '2026-07-04', time: '00:00',  v: 'MIA' },
  { id: 'r32-87',  matchNum: 87,  h: 'Kolumbien',            a: 'Ghana',               date: '2026-07-04', time: '03:30',  v: 'KC' },
  { id: 'r32-88',  matchNum: 88,  h: 'Australien',           a: 'Ägypten',             date: '2026-07-03', time: '20:00',  v: 'DAL' },
];

// Official R16 pairings (from R32 winners)
const R16_PAIRS = [
  { id: 'r16-1', matchNum: 89, label: 'W74 vs W77',  sources: ['r32-74', 'r32-77'], date: '2026-07-04', time: '23:00', v: 'PHI' },
  { id: 'r16-2', matchNum: 90, label: 'W73 vs W75',  sources: ['r32-73', 'r32-75'], date: '2026-07-04', time: '19:00', v: 'HOU' },
  { id: 'r16-3', matchNum: 91, label: 'W76 vs W78',  sources: ['r32-76', 'r32-78'], date: '2026-07-05', time: '22:00', v: 'NYC' },
  { id: 'r16-4', matchNum: 92, label: 'W79 vs W80',  sources: ['r32-79', 'r32-80'], date: '2026-07-06', time: '02:00', v: 'MEX' },
  { id: 'r16-5', matchNum: 93, label: 'W83 vs W84',  sources: ['r32-83', 'r32-84'], date: '2026-07-06', time: '21:00', v: 'DAL' },
  { id: 'r16-6', matchNum: 94, label: 'W81 vs W82',  sources: ['r32-81', 'r32-82'], date: '2026-07-07', time: '02:00', v: 'SEA' },
  { id: 'r16-7', matchNum: 95, label: 'W86 vs W88',  sources: ['r32-86', 'r32-88'], date: '2026-07-07', time: '18:00', v: 'ATL' },
  { id: 'r16-8', matchNum: 96, label: 'W85 vs W87',  sources: ['r32-85', 'r32-87'], date: '2026-07-07', time: '22:00', v: 'VAN' },
];

// QF pairings (from R16 winners)
const QF_PAIRS = [
  { id: 'qf-1', matchNum: 97, sources: ['r16-1', 'r16-2'], date: '2026-07-09', time: '22:00', v: 'BOS' },
  { id: 'qf-2', matchNum: 98, sources: ['r16-5', 'r16-6'], date: '2026-07-10', time: '21:00', v: 'LAX' },
  { id: 'qf-3', matchNum: 99, sources: ['r16-3', 'r16-4'], date: '2026-07-11', time: '23:00', v: 'MIA' },
  { id: 'qf-4', matchNum: 100, sources: ['r16-7', 'r16-8'], date: '2026-07-12', time: '02:00', v: 'KC' },
];

// SF pairings (from QF winners)
const SF_PAIRS = [
  { id: 'sf-1', matchNum: 101, sources: ['qf-1', 'qf-2'], date: '2026-07-14', time: '21:00', v: 'DAL' },
  { id: 'sf-2', matchNum: 102, sources: ['qf-3', 'qf-4'], date: '2026-07-15', time: '21:00', v: 'ATL' },
];

const KO_LS_KEY = 'wm_sim_ko_results';

function loadKoResults() {
  try {
    return JSON.parse(localStorage.getItem(KO_LS_KEY)) || {};
  } catch { return {}; }
}

function saveKoResults(results) {
  localStorage.setItem(KO_LS_KEY, JSON.stringify(results));
}

function getWinner(matchId, koResults) {
  const res = koResults[matchId];
  if (!res || res.hs === undefined || res.as === undefined) return null;
  if (res.hs > res.as) return res.home;
  if (res.as > res.hs) return res.away;
  return null; // Draw — no winner in KO
}

function getLoser(matchId, koResults) {
  const res = koResults[matchId];
  if (!res || res.hs === undefined || res.as === undefined) return null;
  if (res.hs < res.as) return res.home;
  if (res.as < res.hs) return res.away;
  return null;
}

function formatSquad(squadData) {
  if (!squadData || squadData.length === 0) return 'Keine Kaderdaten verfügbar';
  const byPos = { TW: [], ABW: [], MF: [], ANG: [] };
  squadData.forEach(p => {
    const pos = p.pos || 'MF';
    if (byPos[pos]) byPos[pos].push(p.name);
    else byPos[pos] = [p.name];
  });
  let result = '';
  if (byPos.TW.length) result += `- Torhüter: ${byPos.TW.join(', ')}\n`;
  if (byPos.ABW.length) result += `- Abwehr: ${byPos.ABW.join(', ')}\n`;
  if (byPos.MF.length) result += `- Mittelfeld: ${byPos.MF.join(', ')}\n`;
  if (byPos.ANG.length) result += `- Angriff: ${byPos.ANG.join(', ')}\n`;
  return result.trim();
}

function getKoTeamResults(teamName) {
  return store.matches
    .filter(m => (m.h === teamName || m.a === teamName) && store.isMatchPlayed(m))
    .map(m => {
      const isHome = m.h === teamName;
      const opponent = isHome ? m.a : m.h;
      const score = isHome ? `${m.hs}:${m.as}` : `${m.as}:${m.hs}`;
      const result = (isHome ? m.hs > m.as : m.as > m.hs) ? 'S' : (m.hs === m.as) ? 'U' : 'N';
      return `${result} ${score} vs. ${opponent} (Gruppe ${m.g}, Spieltag ${m.md})`;
    }).join('\n');
}

/**
 * Build a description of the tournament format and context.
 */
function getTournamentFormat() {
  return `**Turnierformat WM 2026:**
- 12 Gruppen (A–L) mit je 4 Teams
- Die Gruppenersten und -zweiten (24 Teams) sind direkt für die K.O.-Runde qualifiziert
- Die 8 besten Gruppendritten erreichen ebenfalls das Sechzehntelfinale (Runde der 32)
- Ab dem Sechzehntelfinale geht es im einfachen K.O.-System weiter: Achtelfinale → Viertelfinale → Halbfinale → Finale
- Platz 3 wird in einem separaten Spiel ermittelt`;
}

function getKnockoutPatterns() {
  return `**Historische K.O.-Muster bei Weltmeisterschaften:**
- In K.O.-Spielen gewinnen Gruppenerste gegen Gruppenzweite in etwa 65% der Fälle
- Spiele in der K.O.-Phase sind oft defensiver und enger als Gruppenpartien
- Circa 25–30% aller K.O.-Spiele gehen in die Verlängerung
- Elfmeterschießen entscheiden etwa 20–25% der K.O.-Spiele
- Favoriten setzen sich im Achtelfinale in etwa 70–75% der Fälle durch
- Im Halbfinale und Finale sind die Spiele meist besonders taktisch geprägt
- Die Wahrscheinlichkeit für Verlängerung steigt in den späteren Runden`;
}

/**
 * Build a Gemini prompt for a KO match.
 * For played matches: generates a match report.
 * For upcoming matches: generates a prediction.
 */
function buildKoPrompt(match, weather) {
  const home = match.homeName;
  const away = match.awayName;
  const hFlag = store.teams[home]?.flag || '';
  const aFlag = store.teams[away]?.flag || '';
  const homeData = store.teams[home];
  const awayData = store.teams[away];
  const hasResult = match.result && match.result.hs !== undefined;
  const weatherDesc = weather
    ? `${weather.emoji} ${weather.text}, ${weather.temp}°C, Wind: ${weather.wind} km/h, Luftfeuchtigkeit: ${weather.humidity}%`
    : 'Keine Wetterdaten verfügbar';
  const homeResults = getKoTeamResults(home);
  const awayResults = getKoTeamResults(away);
  const tournamentFormat = getTournamentFormat();
  const knockoutPatterns = getKnockoutPatterns();

  // Get round name
  let roundName = 'K.O.-Spiel';
  if (match.matchNum) roundName = `Sechzehntelfinale (Match #${match.matchNum})`;
  else if (match.id?.startsWith('r16')) roundName = 'Achtelfinale';
  else if (match.id?.startsWith('qf')) roundName = 'Viertelfinale';
  else if (match.id?.startsWith('sf')) roundName = 'Halbfinale';
  else if (match.id === 'third') roundName = 'Spiel um Platz 3';
  else if (match.id === 'final') roundName = '🏆 Finale';

  if (hasResult) {
    const res = match.result;
    return `Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 K.O.-Spiel.

**WICHTIG: Deine Analyse muss ausschließlich auf den unten bereitgestellten Daten basieren. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse und Tabellen sind für diesen Bericht gültig. Falls dir ein Spieler oder Team aus anderen Kontexten bekannt ist, ignoriere dieses Wissen vollständig.**

${tournamentFormat}

**Partie:** ${hFlag} ${home} ${res.hs} : ${res.as} ${away} ${aFlag}
**Runde:** ${roundName}
**Wetterbedingungen:** ${weatherDesc}

**Team-Insights ${home}:**
- Trainer: ${homeData?.coach || 'unbekannt'} | System: ${homeData?.system || 'unbekannt'}
- Spielweise: ${homeData?.info || 'unbekannt'}
**Vollständiger Kader ${home}:**
${formatSquad(homeData?.squad)}

**Bisherige Turnierergebnisse ${home}:**
${homeResults || 'Erstes Spiel im Turnier'}

**Team-Insights ${away}:**
- Trainer: ${awayData?.coach || 'unbekannt'} | System: ${awayData?.system || 'unbekannt'}
- Spielweise: ${awayData?.info || 'unbekannt'}
**Vollständiger Kader ${away}:**
${formatSquad(awayData?.squad)}

**Bisherige Turnierergebnisse ${away}:**
${awayResults || 'Erstes Spiel im Turnier'}

Erstelle einen realistischen, spannenden Spielbericht mit:
- **Spielverlauf** mit konkreten Torschützen (reale Spieler!) und Spielminuten, passend zum Endergebnis ${res.hs}:${res.as}
- **Taktische Analyse** beider Teams
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen**
- **Stimmung im Stadion**
- **Bedeutung des Ergebnisses** für den weiteren Turnierverlauf
- **Fazit und Ausblick**

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler aus den bereitgestellten Kadern. Sei detailliert und emotional.`;
  } else {
    return `Du bist ein erfahrener Tippspiel-Experte und Fußball-Analyst. Dein Ziel ist es, die bestmögliche Spielprognose für ein WM 2026 K.O.-Spiel zu erstellen, um bei einem Tippspiel (wie kicktipp) die maximale Punktzahl zu erzielen.

**WICHTIG: Nutze AUSSCHLIESSLICH die unten bereitgestellten Daten. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse, Tabellen und Turnierinformationen sind gültig.**

## Tippspiel-Scoring (kicktipp)
- **4 Punkte:** Richtiges Ergebnis (exakte Tore nach 90 Minuten)
- **3 Punkte:** Richtige Tordifferenz
- **2 Punkte:** Richtige Tendenz (Heimsieg, Unentschieden, Auswärtssieg)
- **Bei Unentschieden:** 4 Punkte bei richtigem Exaktergebnis, sonst 2 Punkte bei richtiger Tendenz

**Wichtig für K.O.-Runde:** Bei K.O.-Spielen wird das Ergebnis nach 90 Minuten getippt. Bitte gib daher ZWEI Prognosen an:
1. **90-Minuten-Ergebnis** (das, was getippt wird)
2. **Gesamtergebnis** (nach Verlängerung und/oder Elfmeterschießen)

Deine Prognose muss so optimiert sein, dass sie das 90-Minuten-Ergebnis trifft (4 Punkte), da dies die höchste Punktzahl bringt.

## Turnierformat WM 2026
${tournamentFormat}

## Historische K.O.-Muster
${knockoutPatterns}

## Partie
${hFlag} ${home} vs. ${away} ${aFlag}
**Runde:** ${roundName}
**Wetterbedingungen:** ${weatherDesc}

## Team-Insights ${home}
- Trainer: ${homeData?.coach || 'unbekannt'} | System: ${homeData?.system || 'unbekannt'}
- Spielweise: ${homeData?.info || 'unbekannt'}
- Vollständiger Kader:
${formatSquad(homeData?.squad)}

## Team-Insights ${away}
- Trainer: ${awayData?.coach || 'unbekannt'} | System: ${awayData?.system || 'unbekannt'}
- Spielweise: ${awayData?.info || 'unbekannt'}
- Vollständiger Kader:
${formatSquad(awayData?.squad)}

## Bisherige Turnierergebnisse ${home}
${homeResults || 'Erstes Spiel im Turnier'}

## Bisherige Turnierergebnisse ${away}
${awayResults || 'Erstes Spiel im Turnier'}

## Deine Analyse

Erstelle eine umfassende, strukturierte Analyse:

### 1. Ausgangslage & Motivation
- Welche Bedeutung hat dieses K.O.-Spiel für beide Teams? (Keine zweite Chance!)
- Wie wirkt sich der Druck der K.O.-Runde auf die Spielweise aus?

### 2. Datengetriebene Analyse
- Aktuelle Form (letzte Spiele: S/U/N mit Ergebnis)
- Torstatistiken (geschossene/erhaltene Tore, Differenz)
- Stärken und Schwächen basierend auf Kader und System
- Historische Muster bei WM-K.O.-Spielen mit ähnlichen Konstellationen

### 3. Psychologie & Sentiment
- Druck-Situation im K.O.-Spiel: Muss ein Team gewinnen? Kann es sich ein Risiko erlauben?
- Team-Moral: Vertrauen durch letzte Ergebnisse?
- Underdog/Favoriten-Dynamik im K.O.-Kontext

### 4. Taktische Analyse
- Erwartete Aufstellungen (mit realen Spielern aus den Kadern)
- Taktische Schlüsselduelle
- Wie könnte das Spiel verlaufen? (Vorsichtig-defensiv vs. offensiv)
- Rolle der Bank und Ersatzspieler für Verlängerung

### 5. Wetter & Rahmenbedingungen
- Wie beeinflusst das Wetter (${weatherDesc}) das Spiel?
- Stadionfaktor (Reiseaufwand, Höhe, Klima)

### 6. Verlängerung & Elfmeterschießen
- Wie wahrscheinlich ist die Verlängerung? (basierend auf K.O.-Statistiken)
- Welche Teams sind stark im Elfmeterschießen?
- **Gesamtergebnis-Prognose** (nach 120 Min. + evtl. Elfmeter)

### 7. Prognose & Tippspiel-Optimierung
- **90-Minuten-Ergebnis (Tipp):** [Heim-Tore] : [Gast-Tore]
- **Gesamtergebnis (nach Verlängerung):** [Heim-Tore] : [Gast-Tore]
- **Begründung:** Warum genau dieses 90-Minuten-Ergebnis?
- **Konfidenz:** Hoch / Mittel / Niedrig
- **Alternative Szenarien:** Was könnte schiefgehen?
- **Tippspiel-Empfehlung:** Welcher Tipp bringt die meisten Punkte? (Exakt / Differenz / Tendenz)

### 8. Fazit
- Zusammenfassung der wichtigsten Argumente
- Endgültiger Tipp

**WICHTIG:** Beende deine Antwort mit klaren Prognose-Zeilen am Ende:
**90-MIN: [Heim-Team] [X]:[Y] [Gast-Team]**
**GESAMT: [Heim-Team] [A]:[B] [Gast-Team]**
**TIPP: [Heim-Team] [X]:[Y] [Gast-Team]**

Formatiere alles mit Markdown. Verwende NUR Spieler aus den bereitgestellten Kadern. Sei fundiert und spezifisch.`;
  }
}

/**
 * Run a Gemini analysis for a KO match.
 * Shows a modal with loading state and displays the result.
 */
async function runKoAnalysis(match) {
  const settingsModal = document.getElementById('settings-modal');
  if (!store.apiKey) {
    showToast('Bitte hinterlege zuerst deinen Gemini API-Key in den Einstellungen.', 'error');
    settingsModal.classList.remove('hidden');
    return;
  }

  // Create analysis modal
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
  modal.innerHTML = `
    <div class="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl relative">
      <button class="ko-modal-close absolute top-4 right-4 text-txt-dim hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div id="ko-analysis-content">
        <div class="text-center py-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
            <div class="w-6 h-6 rounded-full spinner-ring animate-spin"></div>
          </div>
          <h3 class="font-display text-base font-bold text-white mb-1">KI analysiert das K.O.-Spiel…</h3>
          <p class="text-xs text-txt-dim">Kader, Taktik und Druck-Situation werden ausgewertet.</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.ko-modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  try {
    // Fetch weather
    const weather = await fetchWeather('', '', '', {}); // Will return null, that's fine

    const prompt = buildKoPrompt(match, weather);
    const report = await callGeminiAPI(prompt, store.apiKey);

    const hFlag = store.teams[match.homeName]?.flag || '';
    const aFlag = store.teams[match.awayName]?.flag || '';
    const hasResult = match.result && match.result.hs !== undefined;
    const isPrediction = !hasResult;

    // For predictions, extract and display prediction highlight box
    let predictionHtml = '';
    if (isPrediction) {
      const prediction = parseKoPrediction(report);
      predictionHtml = renderKoPredictionBox(prediction, match.homeName, match.awayName);
    }

    document.getElementById('ko-analysis-content').innerHTML = `
      <div class="mb-3">
        <h3 class="font-display text-lg font-bold text-white">${hFlag} ${match.homeName} vs. ${match.awayName} ${aFlag}</h3>
        <p class="text-xs text-txt-dim">${hasResult ? 'Spielbericht' : 'Spielprognose'} · K.O.-Runde</p>
      </div>
      ${predictionHtml}
      <div class="prose prose-invert prose-sm max-w-none">
        ${marked.parse(report)}
      </div>
    `;
  } catch (err) {
    console.error('KO analysis error:', err);
    document.getElementById('ko-analysis-content').innerHTML = `
      <div class="text-center py-6">
        <div class="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
          <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
        </div>
        <h3 class="font-display text-base font-bold text-accent mb-1">Fehler</h3>
        <p class="text-sm text-txt">${err.message}</p>
      </div>
    `;
    showToast(err.message, 'error');
  }
}

export function renderKnockout() {
  const container = document.getElementById('app-content');
  let koResults = loadKoResults();

  // Pre-populate match 73 result (Südafrika 0:1 Kanada)
  if (!koResults['r32-73']) {
    koResults['r32-73'] = { home: 'Südafrika', away: 'Kanada', hs: 0, as: 1 };
    saveKoResults(koResults);
  }

  function render() {
    // R32 uses hard-coded team names from R32_BRACKET
    const r32 = R32_BRACKET.map(slot => ({
      ...slot,
      homeName: slot.h,
      awayName: slot.a,
      result: koResults[slot.id]
    }));

    // R16 from R32 winners
    const r16 = R16_PAIRS.map(pair => {
      const homeName = getWinner(pair.sources[0], koResults);
      const awayName = getWinner(pair.sources[1], koResults);
      return { ...pair, homeName, awayName, result: koResults[pair.id] };
    });

    // QF from R16 winners
    const qf = QF_PAIRS.map(pair => {
      const homeName = getWinner(pair.sources[0], koResults);
      const awayName = getWinner(pair.sources[1], koResults);
      return { ...pair, homeName, awayName, result: koResults[pair.id] };
    });

    // SF from QF winners
    const sf = SF_PAIRS.map(pair => {
      const homeName = getWinner(pair.sources[0], koResults);
      const awayName = getWinner(pair.sources[1], koResults);
      return { ...pair, homeName, awayName, result: koResults[pair.id] };
    });

    // Final + Third place
    const sfW1 = getWinner('sf-1', koResults);
    const sfW2 = getWinner('sf-2', koResults);
    const sfL1 = getLoser('sf-1', koResults);
    const sfL2 = getLoser('sf-2', koResults);

    const finale = { id: 'final', matchNum: 104, homeName: sfW1, awayName: sfW2, result: koResults['final'], date: '2026-07-19', time: '21:00', v: 'NYC' };
    const thirdPlace = { id: 'third', matchNum: 103, homeName: sfL1, awayName: sfL2, result: koResults['third'], date: '2026-07-18', time: '21:00', v: 'MIA' };

    // Determine champion
    const champion = getWinner('final', koResults);
    const thirdWinner = getWinner('third', koResults);

    container.innerHTML = `
      <section class="mb-6">
        <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">K.O.-Runde</h2>
        <p class="text-txt-dim text-sm">Offizielles FIFA WM 2026 Bracket. Klicke auf ein Spiel, um das Ergebnis einzutragen. Der Sieger rückt automatisch vor.</p>
      </section>

      ${champion ? `
        <section class="card p-5 sm:p-6 mb-6 border-t-2 border-gold/60 text-center card-slide">
          <div class="text-4xl mb-2">🏆</div>
          <h3 class="font-display text-2xl font-black text-gold">${store.teams[champion]?.flag || ''} ${champion}</h3>
          <p class="text-sm text-txt-dim mt-1">FIFA Fußball-Weltmeister 2026</p>
        </section>
      ` : ''}

      <div class="space-y-6">
        ${renderRound('Sechzehntelfinale (Runde der 32)', r32, 'lg:grid-cols-4')}
        ${renderRound('Achtelfinale', r16, 'lg:grid-cols-4')}
        ${renderRound('Viertelfinale', qf, 'lg:grid-cols-4')}
        ${renderRound('Halbfinale', sf, 'lg:grid-cols-2')}
        ${renderRound('Spiel um Platz 3', [thirdPlace], 'lg:grid-cols-2')}
        ${renderRound('🏆 Finale', [finale], 'lg:grid-cols-2')}
      </div>
    `;

    // Bind match click handlers
    container.querySelectorAll('[data-ko-match]').forEach(el => {
      el.addEventListener('click', (e) => {
        // Don't trigger on analyse button click
        if (e.target.closest('.ko-analyse-btn')) return;
        const id = el.dataset.koMatch;
        const home = el.dataset.koHome;
        const away = el.dataset.koAway;
        if (!home || !away) {
          showToast('Teams stehen noch nicht fest.', 'info');
          return;
        }
        openKoInput(id, home, away);
      });
    });

    // Bind analyse buttons
    container.querySelectorAll('.ko-analyse-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const matchId = btn.dataset.koAnalyse;
        // Find match data from all rounds
        const allMatches = [...r32, ...r16, ...qf, ...sf, thirdPlace, finale];
        const match = allMatches.find(m => m.id === matchId);
        if (!match || !match.homeName || !match.awayName) {
          showToast('Teams stehen noch nicht fest.', 'info');
          return;
        }
        runKoAnalysis(match);
      });
    });
  }

  function renderRound(title, matches, gridCols = 'lg:grid-cols-4') {
    return `
      <section class="card p-4 sm:p-5">
        <h3 class="font-display text-sm font-bold text-white mb-3 uppercase tracking-wider">${title}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-2">
          ${matches.map(m => renderKoMatch(m)).join('')}
        </div>
      </section>
    `;
  }

  function renderKoMatch(match) {
    const hFlag = match.homeName ? (store.teams[match.homeName]?.flag || '') : '';
    const aFlag = match.awayName ? (store.teams[match.awayName]?.flag || '') : '';

    const hDisplay = match.homeName || '???';
    const aDisplay = match.awayName || '???';

    const hasTeams = match.homeName && match.awayName;
    const res = match.result;
    const hasResult = res && res.hs !== undefined;

    let winner = null;
    if (hasResult) {
      winner = res.hs > res.as ? match.homeName : res.as > res.hs ? match.awayName : null;
    }

    const matchLabel = match.matchNum ? `#${match.matchNum}` : '';

    // Format date for display
    let dateDisplay = '';
    if (match.date) {
      const d = new Date(match.date + 'T12:00:00');
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      dateDisplay = `${day}.${month}.`;
    }

    return `
      <div class="bg-bg rounded-lg border ${hasResult ? 'border-emerald-500/30' : hasTeams ? 'border-border hover:border-accent/40 cursor-pointer' : 'border-border/40 opacity-50'} p-3 transition-all text-sm"
           data-ko-match="${match.id}" data-ko-home="${match.homeName || ''}" data-ko-away="${match.awayName || ''}">
        ${matchLabel ? `<div class="flex items-center justify-between mb-1.5">
          <span class="text-[9px] text-txt-muted font-semibold uppercase tracking-wider">${matchLabel}</span>
          ${dateDisplay ? `<span class="text-[9px] text-txt-muted">${dateDisplay}${match.time ? ' ' + match.time : ''}</span>` : ''}
        </div>` : dateDisplay ? `<div class="text-[9px] text-txt-muted mb-1.5 text-right">${dateDisplay}${match.time ? ' ' + match.time : ''}</div>` : ''}
        <div class="flex items-center justify-between mb-1.5">
          <span class="${winner === match.homeName ? 'text-emerald-400 font-bold' : match.homeName ? 'text-white' : 'text-txt-muted'} truncate flex-1">${hFlag} ${hDisplay}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.hs}</span>` : ''}
        </div>
        <div class="flex items-center justify-between">
          <span class="${winner === match.awayName ? 'text-emerald-400 font-bold' : match.awayName ? 'text-white' : 'text-txt-muted'} truncate flex-1">${aFlag} ${aDisplay}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.as}</span>` : ''}
        </div>
        ${hasTeams ? `
          <button class="ko-analyse-btn mt-2 w-full py-1.5 bg-accent/10 hover:bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors border border-accent/20" data-ko-analyse="${match.id}">
            🤖 KI-Analyse
          </button>
        ` : ''}
      </div>
    `;
  }

  function openKoInput(matchId, home, away) {
    const hFlag = store.teams[home]?.flag || '';
    const aFlag = store.teams[away]?.flag || '';
    const existing = koResults[matchId];

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
    modal.innerHTML = `
      <div class="bg-bg-card border border-border rounded-xl p-6 w-full max-w-xs shadow-2xl relative">
        <button class="ko-modal-close absolute top-4 right-4 text-txt-dim hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 class="font-display text-base font-bold text-white mb-4 text-center">${hFlag} ${home} vs ${away} ${aFlag}</h3>
        <div class="flex items-center justify-center gap-3 mb-4">
          <input type="number" id="ko-hs" min="0" max="20" value="${existing ? existing.hs : ''}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
          <span class="text-xl font-bold text-txt-muted">:</span>
          <input type="number" id="ko-as" min="0" max="20" value="${existing ? existing.as : ''}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
        </div>
        <p class="text-[10px] text-txt-muted text-center mb-3">Bei K.O.-Spielen muss es einen Sieger geben (nach Verlängerung/Elfmeterschießen).</p>
        <div class="flex gap-2">
          <button id="ko-save" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors">Speichern</button>
          ${existing ? '<button id="ko-delete" class="py-2.5 px-4 bg-accent/20 hover:bg-accent/30 text-accent font-bold text-sm rounded-lg transition-colors border border-accent/20">✕</button>' : ''}
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.ko-modal-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

    document.getElementById('ko-save').addEventListener('click', () => {
      const hs = parseInt(document.getElementById('ko-hs').value, 10);
      const as = parseInt(document.getElementById('ko-as').value, 10);
      if (isNaN(hs) || isNaN(as) || hs < 0 || as < 0) {
        showToast('Bitte gültige Werte eingeben.', 'error');
        return;
      }
      if (hs === as) {
        showToast('K.O.-Spiele brauchen einen Sieger (kein Unentschieden).', 'error');
        return;
      }
      koResults[matchId] = { home, away, hs, as };
      saveKoResults(koResults);
      modal.remove();
      render();
      showToast('K.O.-Ergebnis gespeichert!', 'success');
    });

    const delBtn = document.getElementById('ko-delete');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        // Delete this result and all downstream results
        delete koResults[matchId];
        clearDownstream(matchId);
        saveKoResults(koResults);
        modal.remove();
        render();
        showToast('Ergebnis und nachfolgende Runden zurückgesetzt.', 'info');
      });
    }
  }

  /**
   * Clear all results downstream from a given match.
   * Traverses the bracket tree to find and remove dependent results.
   */
  function clearDownstream(matchId) {
    // Find all R16 that depend on this R32
    R16_PAIRS.forEach(p => {
      if (p.sources.includes(matchId)) {
        delete koResults[p.id];
        clearDownstream(p.id);
      }
    });
    // Find all QF that depend on this R16
    QF_PAIRS.forEach(p => {
      if (p.sources.includes(matchId)) {
        delete koResults[p.id];
        clearDownstream(p.id);
      }
    });
    // Find all SF that depend on this QF
    SF_PAIRS.forEach(p => {
      if (p.sources.includes(matchId)) {
        delete koResults[p.id];
        clearDownstream(p.id);
      }
    });
    // Final/Third depend on SF
    if (matchId === 'sf-1' || matchId === 'sf-2') {
      delete koResults['final'];
      delete koResults['third'];
    }
  }

  render();
  return { destroy() { container.innerHTML = ''; } };
}
