import { store } from '../../state/store.js';
import { showToast } from '../components.js';
import { fetchWeather } from '../../services/weather.js';
import { callGeminiAPI } from '../../services/gemini.js';
import { marked } from 'marked';

let currentWeather = null;
let container = null;

function formatDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const [hh, mm] = timeStr.split(':').map(Number);
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const dt = new Date(y, m - 1, d);
  return `${days[dt.getDay()]}, ${d}. ${months[m - 1]} ${y} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} ET`;
}

export function formatDateShort(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const [hh, mm] = timeStr.split(':').map(Number);
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  return `${d}. ${months[m - 1]} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function formatStandings(groupId) {
  const standings = store.getGroupStandings(groupId);
  let table = `Gruppe ${groupId}:\n`;
  table += `Platz | Team              | Sp | S | U | N | Tore  | TD  | Pkt\n`;
  table += `------|-------------------|----|----|----|----|-------|-----|----\n`;
  standings.forEach((s, i) => {
    table += `${i + 1}.    | ${s.team.padEnd(17)} | ${s.p}  | ${s.w}  | ${s.d}  | ${s.l}  | ${s.gf}:${s.ga}   | ${s.gd >= 0 ? '+' : ''}${s.gd}  | ${s.pts}\n`;
  });
  return table;
}

function getTeamResults(teamName) {
  return store.matches
    .filter(m => (m.h === teamName || m.a === teamName) && store.isMatchPlayed(m))
    .map(m => {
      const isHome = m.h === teamName;
      const opponent = isHome ? m.a : m.h;
      const score = isHome ? `${m.hs}:${m.as}` : `${m.as}:${m.hs}`;
      const result = (isHome ? m.hs > m.as : m.as > m.hs) ? 'S' : (m.hs === m.as) ? 'U' : 'N';
      return `${result} ${score} vs. ${opponent} (Spieltag ${m.md})`;
    }).join('\n');
}

function getTacticalContext(teamName, groupId) {
  const standings = store.getGroupStandings(groupId);
  const teamStat = standings.find(s => s.team === teamName);
  if (!teamStat || teamStat.p < 2) return "";
  if (teamStat.p === 2) {
    if (teamStat.pts <= 1) return `⚠️ **Sondersituation:** ${teamName} steht massiv unter Druck (nur ${teamStat.pts} Punkte) und MUSS zwingend auf Sieg spielen.`;
    if (teamStat.pts === 6) return `🛡️ **Sondersituation:** ${teamName} ist bereits qualifiziert. Der Trainer wird rotieren.`;
    if (teamStat.pts >= 3 && teamStat.pts <= 4) return `⚖️ **Sondersituation:** ${teamName} reicht unter Umständen ein Unentschieden.`;
  }
  return "";
}

function buildPrompt(match, weather, customText) {
  const venue = store.venues[match.v];
  const standings = formatStandings(match.g);
  const homeResults = getTeamResults(match.h);
  const awayResults = getTeamResults(match.a);
  const played = store.isMatchPlayed(match);
  const weatherDesc = weather
    ? `${weather.emoji} ${weather.text}, ${weather.temp}°C, Wind: ${weather.wind} km/h, Luftfeuchtigkeit: ${weather.humidity}%`
    : 'Keine Wetterdaten verfügbar';
  const hFlag = store.teams[match.h]?.flag || '';
  const aFlag = store.teams[match.a]?.flag || '';

  if (played) {
    let prompt = `Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 Gruppenspiel.

**Partie:** ${hFlag} ${match.h} ${match.hs} : ${match.as} ${match.a} ${aFlag}
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
- **Spielverlauf** mit konkreten Torschützen (reale Spieler!) und Spielminuten, passend zum Endergebnis ${match.hs}:${match.as}
- **Taktische Analyse** beider Teams
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen**
- **Stimmung im Stadion**
- **Auswirkung auf die Gruppentabelle**
- **Fazit und Ausblick**

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler. Sei detailliert und emotional.`;
    if (customText) prompt += `\n\n**Zusätzliche Anweisungen:** ${customText}`;
    return prompt;
  } else {
    const teamA_Data = store.teams[match.h];
    const teamB_Data = store.teams[match.a];
    const tacticalModA = getTacticalContext(match.h, match.g);
    const tacticalModB = getTacticalContext(match.a, match.g);

    let prompt = `Du bist ein erstklassiger Fußball-Analyst. Erstelle eine detaillierte Spielprognose für folgendes WM-Spiel.

**Partie:** ${hFlag} ${match.h} vs. ${match.a} ${aFlag}
**Datum:** ${formatDate(match.date, match.time)}

**Team-Insights ${match.h}:**
- Trainer: ${teamA_Data.coach} | System: ${teamA_Data.system}
- Spielweise: ${teamA_Data.info}
- Schlüsselspieler: ${teamA_Data.squad.map(p => p.name).join(', ')}
${tacticalModA}

**Team-Insights ${match.a}:**
- Trainer: ${teamB_Data.coach} | System: ${teamB_Data.system}
- Spielweise: ${teamB_Data.info}
- Schlüsselspieler: ${teamB_Data.squad.map(p => p.name).join(', ')}
${tacticalModB}

**Aktuelle Gruppentabelle:**
${standings}

Analysiere umfassend:
1. **Ausgangslage & Motivation**
2. **Kader & Verletzungen**
3. **Erwartete Aufstellungen** mit realen Spielern
4. **Taktik-Analyse**
5. **Schlüsselduelle**
6. **Wettquoten & Favoritenrolle**
7. **Wetter-Einfluss** — ${weatherDesc}
8. **Historische Bilanz**
9. **Prognose** mit Ergebnis-Tipp
10. **Fazit**

Formatiere alles mit Markdown. Verwende reale Spieler. Sei fundiert.`;
    if (customText) prompt += `\n\n**Zusätzliche Anweisungen:** ${customText}`;
    return prompt;
  }
}

export function renderSimulator() {
  container = document.getElementById('app-content');
  container.innerHTML = `
    <!-- Hero -->
    <section class="text-center mb-10 sm:mb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-semibold tracking-wide uppercase mb-5">
        <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        FIFA World Cup 2026 · USA · Mexiko · Kanada
      </div>
      <h2 class="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-3 leading-tight">
        KI-Analyse für<br/><span class="text-accent">jedes WM-Spiel</span>
      </h2>
      <p class="text-txt-dim text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        Wähle eine Partie — die KI analysiert Kader, Taktik, Wetter und Gruppenstand für eine fundierte Prognose oder einen packenden Spielbericht.
      </p>
    </section>

    <!-- Config Card -->
    <section class="card p-5 sm:p-7 mb-8">
      <div class="mb-5">
        <label for="sim-match-select" class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2.5">
          <svg class="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Spiel auswählen
        </label>
        <select id="sim-match-select" class="w-full bg-[#0a0f1a] border border-border rounded-lg px-4 py-3 text-[15px] text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-colors cursor-pointer hover:border-border-light"></select>
      </div>

      <div id="sim-match-info" class="hidden card-slide bg-bg rounded-xl border border-border p-5 sm:p-6 mb-5">
        <div id="sim-match-teams" class="flex flex-wrap items-center justify-center gap-2 text-center mb-4"></div>
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span id="sim-status-badge" class="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wide"></span>
          <span id="sim-group-badge" class="px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-[11px] font-bold uppercase tracking-wide border border-gold/20"></span>
          <span id="sim-md-badge" class="px-2.5 py-0.5 rounded-md bg-sky/10 text-sky text-[11px] font-bold uppercase tracking-wide border border-sky/20"></span>
        </div>
        <div id="sim-score-display" class="hidden text-center mb-4"></div>

        <!-- Score Input -->
        <div id="sim-score-input" class="hidden mb-4">
          <div class="flex items-center justify-center gap-3">
            <input type="number" id="sim-home-score" min="0" max="20" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
            <span class="text-xl font-bold text-txt-muted">:</span>
            <input type="number" id="sim-away-score" min="0" max="20" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
          </div>
          <div class="flex justify-center gap-2 mt-3">
            <button id="sim-save-result" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors">Ergebnis eintragen</button>
            <button id="sim-edit-result" class="hidden px-5 py-2 bg-sky/20 hover:bg-sky/30 text-sky text-sm font-bold rounded-lg transition-colors border border-sky/20">Bearbeiten</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm mb-3">
          <div class="flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
            <svg class="w-4 h-4 text-txt-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span id="sim-date" class="text-txt"></span>
          </div>
          <div class="flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
            <svg class="w-4 h-4 text-txt-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span id="sim-venue" class="text-txt"></span>
          </div>
        </div>
        <div id="sim-weather-loading" class="hidden flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
          <div class="w-4 h-4 rounded-full spinner-ring animate-spin shrink-0"></div>
          <span class="text-sm text-txt-dim">Wetterdaten werden geladen…</span>
        </div>
        <div id="sim-weather" class="hidden flex items-center gap-3 bg-sky/[0.06] rounded-lg px-4 py-2.5 border border-sky/15"></div>
      </div>

      <div class="mb-5">
        <label for="sim-custom-prompt" class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2.5">
          <svg class="w-3.5 h-3.5 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          Zusätzliche Anweisungen <span class="text-txt-muted normal-case tracking-normal font-normal">(optional)</span>
        </label>
        <textarea id="sim-custom-prompt" rows="2" placeholder="z.B. 'Aus Sicht eines TV-Kommentators' oder 'Fokus auf taktische Analyse'…" class="w-full bg-[#0a0f1a] border border-border rounded-lg px-4 py-2.5 text-sm text-txt placeholder:text-txt-muted focus:outline-none focus:border-sky/50 focus:ring-1 focus:ring-sky/20 transition-colors resize-none"></textarea>
      </div>

      <button id="sim-start-btn" class="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-display font-bold text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-bg">
        <svg id="sim-btn-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div id="sim-btn-spinner" class="w-5 h-5 rounded-full spinner-ring animate-spin hidden"></div>
        <span id="sim-btn-text">Spielprognose generieren</span>
      </button>
    </section>

    <!-- Output -->
    <section id="sim-output" class="hidden report-enter">
      <div class="card p-5 sm:p-6 mb-3 border-t-2 border-accent/40">
        <h3 id="sim-report-title" class="font-display text-xl sm:text-2xl font-bold text-white"></h3>
        <p id="sim-report-meta" class="text-xs text-txt-dim mt-1"></p>
      </div>
      <div class="card p-5 sm:p-8">
        <div id="sim-report-content" class="max-w-none"></div>
      </div>
    </section>

    <!-- Loading -->
    <section id="sim-loading" class="hidden">
      <div class="card p-8 sm:p-12 text-center">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
          <div class="w-8 h-8 rounded-full spinner-ring animate-spin"></div>
        </div>
        <h3 class="font-display text-lg font-bold text-white mb-1.5">KI analysiert das Spiel…</h3>
        <p class="text-sm text-txt-dim mb-1">Kader, Taktik, Wettquoten und Gruppenstand werden ausgewertet.</p>
        <p class="text-xs text-txt-muted">Dauert ca. 10–20 Sekunden.</p>
        <div class="mt-5 h-1 w-44 mx-auto rounded-full overflow-hidden"><div class="h-full w-full shimmer-bar rounded-full"></div></div>
      </div>
    </section>

    <!-- Error -->
    <section id="sim-error" class="hidden">
      <div class="card p-5 sm:p-7 border-accent/30">
        <div class="flex items-start gap-3">
          <div class="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
          </div>
          <div>
            <h3 class="font-display text-base font-bold text-accent mb-0.5">Fehler</h3>
            <p id="sim-error-msg" class="text-sm text-txt"></p>
          </div>
        </div>
      </div>
    </section>
  `;

  populateSelect();
  bindEvents();

  const today = new Date().toISOString().slice(0, 10);
  const todayMatch = store.matches.find(m => m.date === today);
  const firstUpcoming = store.matches.find(m => !store.isMatchPlayed(m));
  const defaultMatch = todayMatch || firstUpcoming || store.matches[0];
  const sel = document.getElementById('sim-match-select');
  sel.value = defaultMatch.id;
  showMatchInfo(defaultMatch);

  return { destroy() { container.innerHTML = ''; } };
}

function populateSelect() {
  const sel = document.getElementById('sim-match-select');
  const mdLabels = { 1: 'Spieltag 1 · 11.–17. Juni', 2: 'Spieltag 2 · 18.–23. Juni', 3: 'Spieltag 3 · 24.–27. Juni' };
  [1, 2, 3].forEach(md => {
    const group = document.createElement('optgroup');
    group.label = mdLabels[md];
    store.matches.filter(m => m.md === md)
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
      .forEach(match => {
        const opt = document.createElement('option');
        opt.value = match.id;
        const hFlag = store.teams[match.h]?.flag || '';
        const aFlag = store.teams[match.a]?.flag || '';
        const played = store.isMatchPlayed(match);
        const isLive = match.liveState === 'live';
        let score = '';
        if (isLive) score = ` 🔴 ${match.hs}:${match.as}`;
        else if (played) score = ` [${match.hs}:${match.as}]`;
        const dateShort = match.date.slice(5).replace('-', '.');
        opt.textContent = `${dateShort} | ${hFlag} ${match.h} vs ${match.a} ${aFlag}${score}`;
        if (played) opt.className = 'text-slate-400';
        group.appendChild(opt);
      });
    sel.appendChild(group);
  });
}

function bindEvents() {
  document.getElementById('sim-match-select').addEventListener('change', e => {
    const match = store.getMatch(parseInt(e.target.value, 10));
    showMatchInfo(match);
  });

  document.getElementById('sim-start-btn').addEventListener('click', startSimulation);

  document.getElementById('sim-save-result').addEventListener('click', () => {
    const matchId = parseInt(document.getElementById('sim-match-select').value, 10);
    const hs = parseInt(document.getElementById('sim-home-score').value, 10);
    const as = parseInt(document.getElementById('sim-away-score').value, 10);
    if (isNaN(hs) || isNaN(as) || hs < 0 || as < 0) {
      showToast('Bitte gültige Ergebnisse eingeben (≥ 0).', 'error');
      return;
    }
    store.saveMatchResult(matchId, hs, as);
    showToast('Ergebnis eingetragen!', 'success');
    // Refresh select and info
    const sel = document.getElementById('sim-match-select');
    sel.innerHTML = '';
    populateSelect();
    sel.value = matchId;
    showMatchInfo(store.getMatch(matchId));
  });

  document.getElementById('sim-edit-result').addEventListener('click', () => {
    const matchId = parseInt(document.getElementById('sim-match-select').value, 10);
    const match = store.getMatch(matchId);
    if (!match) return;
    // Remove result and let user re-enter
    match.hs = undefined;
    match.as = undefined;
    store.persistMatches();
    const sel = document.getElementById('sim-match-select');
    sel.innerHTML = '';
    populateSelect();
    sel.value = matchId;
    showMatchInfo(match);
    showToast('Ergebnis zurückgesetzt. Du kannst ein neues eingeben.', 'info');
  });
}

function renderMatchEvents(match) {
  const details = match.details;
  if (!details || details.length === 0) return '';

  const goals = details.filter(d => d.isGoal);
  const cards = details.filter(d => d.isYellowCard || d.isRedCard);

  if (goals.length === 0 && cards.length === 0) return '';

  let html = `<div class="mt-4 bg-bg rounded-xl border border-border p-4">`;
  html += `<h4 class="text-xs font-semibold uppercase tracking-wider text-txt-dim mb-3 flex items-center gap-1.5">
    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    Spielereignisse
  </h4>`;

  if (goals.length > 0) {
    html += `<div class="space-y-1.5 mb-2">`;
    goals.forEach(g => {
      const icon = g.isOwnGoal ? '🔴' : '⚽';
      const label = g.isOwnGoal ? `${g.player} (ET)` : g.player;
      html += `<div class="flex items-center gap-2 text-sm">
        <span class="text-xs">${icon}</span>
        <span class="text-white font-medium">${label}</span>
        <span class="text-txt-muted text-xs">${g.minute}</span>
      </div>`;
    });
    html += `</div>`;
  }

  if (cards.length > 0) {
    html += `<div class="space-y-1 mt-2 pt-2 border-t border-border">`;
    cards.forEach(c => {
      const icon = c.isRedCard ? '🟥' : '🟨';
      html += `<div class="flex items-center gap-2 text-xs">
        <span>${icon}</span>
        <span class="text-txt-dim">${c.player}</span>
        <span class="text-txt-muted">${c.minute}</span>
      </div>`;
    });
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

async function showMatchInfo(match) {
  const info = document.getElementById('sim-match-info');
  if (!match) { info.classList.add('hidden'); return; }

  const venue = store.venues[match.v];
  const played = store.isMatchPlayed(match);
  const isLive = match.liveState === 'live';
  const isApiResult = match.isApiResult === true;
  const hFlag = store.teams[match.h]?.flag || '';
  const aFlag = store.teams[match.a]?.flag || '';

  document.getElementById('sim-match-teams').innerHTML = `
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${hFlag} ${match.h}</span>
    <span class="text-lg sm:text-xl font-bold text-txt-muted mx-3">vs</span>
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${match.a} ${aFlag}</span>
  `;
  document.getElementById('sim-group-badge').textContent = `Gruppe ${match.g}`;
  document.getElementById('sim-md-badge').textContent = `Spieltag ${match.md}`;
  document.getElementById('sim-date').textContent = formatDate(match.date, match.time);
  document.getElementById('sim-venue').textContent = `${venue.name}, ${venue.city} ${venue.country}`;

  const scoreDisplay = document.getElementById('sim-score-display');
  const scoreInput = document.getElementById('sim-score-input');
  const statusBadge = document.getElementById('sim-status-badge');
  const btnText = document.getElementById('sim-btn-text');
  const editBtn = document.getElementById('sim-edit-result');
  const saveBtn = document.getElementById('sim-save-result');

  // Remove previous event details
  const existingEvents = info.querySelector('.match-events-container');
  if (existingEvents) existingEvents.remove();

  if (isLive) {
    // LIVE match
    const clockText = match.liveClock || '';
    scoreDisplay.innerHTML = `
      <div class="flex items-center justify-center gap-3">
        <span class="text-4xl font-display font-black text-white">${match.hs} : ${match.as}</span>
        <span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-bold animate-pulse border border-red-500/30">${clockText}</span>
      </div>
    `;
    scoreDisplay.classList.remove('hidden');
    scoreInput.classList.add('hidden');
    statusBadge.textContent = '🔴 LIVE';
    statusBadge.className = 'px-2.5 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[11px] font-bold uppercase tracking-wide border border-red-500/20 animate-pulse';
    btnText.textContent = 'Spielbericht generieren';
  } else if (played && isApiResult) {
    // Completed match from API — read-only score
    scoreDisplay.innerHTML = `
      <span class="text-4xl font-display font-black text-white">${match.hs} : ${match.as}</span>
      <div class="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        Offizielles Ergebnis (ESPN)
      </div>
    `;
    scoreDisplay.classList.remove('hidden');
    scoreInput.classList.add('hidden');
    statusBadge.textContent = 'Endstand';
    statusBadge.className = 'px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wide border border-emerald-500/20';
    btnText.textContent = 'Spielbericht generieren';

    // Show match events (goals, cards)
    const eventsHtml = renderMatchEvents(match);
    if (eventsHtml) {
      const eventsContainer = document.createElement('div');
      eventsContainer.className = 'match-events-container';
      eventsContainer.innerHTML = eventsHtml;
      scoreDisplay.after(eventsContainer);
    }
  } else if (played) {
    // Manually entered result
    scoreDisplay.innerHTML = `<span class="text-4xl font-display font-black text-white">${match.hs} : ${match.as}</span>`;
    scoreDisplay.classList.remove('hidden');
    scoreInput.classList.remove('hidden');
    document.getElementById('sim-home-score').value = match.hs;
    document.getElementById('sim-away-score').value = match.as;
    saveBtn.classList.add('hidden');
    editBtn.classList.remove('hidden');
    statusBadge.textContent = 'Gespielt';
    statusBadge.className = 'px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wide border border-emerald-500/20';
    btnText.textContent = 'Spielbericht generieren';
  } else {
    scoreDisplay.innerHTML = '';
    scoreDisplay.classList.add('hidden');
    scoreInput.classList.remove('hidden');
    document.getElementById('sim-home-score').value = '';
    document.getElementById('sim-away-score').value = '';
    saveBtn.classList.remove('hidden');
    editBtn.classList.add('hidden');
    const today = new Date().toISOString().slice(0, 10);
    if (match.date === today) {
      statusBadge.textContent = 'Heute';
      statusBadge.className = 'px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wide border border-amber-500/20 animate-pulse';
    } else {
      statusBadge.textContent = 'Anstehend';
      statusBadge.className = 'px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky text-[11px] font-bold uppercase tracking-wide border border-sky/20';
    }
    btnText.textContent = 'Spielprognose generieren';
  }

  info.classList.remove('hidden');

  const weatherEl = document.getElementById('sim-weather');
  const weatherLoad = document.getElementById('sim-weather-loading');
  weatherEl.classList.add('hidden');
  weatherLoad.classList.remove('hidden');

  currentWeather = await fetchWeather(match.v, match.date, match.time, store.venues);
  weatherLoad.classList.add('hidden');

  if (currentWeather) {
    weatherEl.innerHTML = `
      <span class="text-2xl">${currentWeather.emoji}</span>
      <div>
        <div class="text-sm font-semibold text-white">${currentWeather.temp}°C · ${currentWeather.text}</div>
        <div class="text-xs text-txt-muted">Wind: ${currentWeather.wind} km/h · Luftfeuchtigkeit: ${currentWeather.humidity}%</div>
      </div>`;
    weatherEl.classList.remove('hidden');
  } else {
    weatherEl.innerHTML = `<span class="text-2xl">❓</span><div class="text-sm text-txt-muted">Wetterdaten nicht verfügbar</div>`;
    weatherEl.classList.remove('hidden');
  }
}

async function startSimulation() {
  const settingsModal = document.getElementById('settings-modal');
  if (!store.apiKey) {
    showToast('Bitte hinterlege zuerst deinen Gemini API-Key in den Einstellungen.', 'error');
    settingsModal.classList.remove('hidden');
    return;
  }
  const matchId = parseInt(document.getElementById('sim-match-select').value, 10);
  const match = store.getMatch(matchId);
  if (!match) { showToast('Bitte wähle ein Spiel aus.', 'error'); return; }

  const customText = document.getElementById('sim-custom-prompt').value.trim();
  const prompt = buildPrompt(match, currentWeather, customText || null);

  const btn = document.getElementById('sim-start-btn');
  const btnIcon = document.getElementById('sim-btn-icon');
  const btnSpinner = document.getElementById('sim-btn-spinner');
  const btnText = document.getElementById('sim-btn-text');
  const loading = document.getElementById('sim-loading');
  const output = document.getElementById('sim-output');
  const error = document.getElementById('sim-error');

  btn.disabled = true;
  btnIcon.classList.add('hidden');
  btnSpinner.classList.remove('hidden');
  btnText.textContent = 'Generiere...';
  loading.classList.remove('hidden');
  output.classList.add('hidden');
  error.classList.add('hidden');

  try {
    const report = await callGeminiAPI(prompt, store.apiKey);
    const played = store.isMatchPlayed(match);
    const hFlag = store.teams[match.h]?.flag || '';
    const aFlag = store.teams[match.a]?.flag || '';
    const venue = store.venues[match.v];

    document.getElementById('sim-report-title').textContent = `${hFlag} ${match.h} vs. ${match.a} ${aFlag}`;
    document.getElementById('sim-report-meta').textContent = `Gruppe ${match.g} · Spieltag ${match.md} · ${venue.name}, ${venue.city} · ${played ? 'Spielbericht' : 'Spielprognose'}`;
    document.getElementById('sim-report-content').innerHTML = marked.parse(report);
    error.classList.add('hidden');
    loading.classList.add('hidden');
    output.classList.remove('hidden');
    output.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(played ? 'Spielbericht generiert!' : 'Spielprognose generiert!', 'success');
  } catch (err) {
    console.error('Simulation error:', err);
    document.getElementById('sim-error-msg').textContent = err.message;
    error.classList.remove('hidden');
    output.classList.add('hidden');
    loading.classList.add('hidden');
    showToast(err.message, 'error');
  } finally {
    btn.disabled = false;
    btnIcon.classList.remove('hidden');
    btnSpinner.classList.add('hidden');
    const m = store.getMatch(matchId);
    btnText.textContent = store.isMatchPlayed(m) ? 'Spielbericht generieren' : 'Spielprognose generieren';
  }
}
