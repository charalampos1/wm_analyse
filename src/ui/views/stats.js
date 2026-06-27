import { store } from '../../state/store.js';
import { showToast } from '../components.js';
import { callGeminiAPI } from '../../services/gemini.js';
import { marked } from 'marked';

export function renderStats() {
  const container = document.getElementById('app-content');

  const playedMatches = store.matches.filter(m => store.isMatchPlayed(m));
  const totalGoals = playedMatches.reduce((sum, m) => sum + m.hs + m.as, 0);
  const avgGoals = playedMatches.length > 0 ? (totalGoals / playedMatches.length).toFixed(2) : '0';

  let homeWins = 0, draws = 0, awayWins = 0;
  let highestGoalMatch = null;
  let highestGoals = 0;
  let biggestGDMatch = null;
  let biggestGD = 0;

  playedMatches.forEach(m => {
    if (m.hs > m.as) homeWins++;
    else if (m.hs < m.as) awayWins++;
    else draws++;

    const totalMatchGoals = m.hs + m.as;
    if (totalMatchGoals > highestGoals) { highestGoals = totalMatchGoals; highestGoalMatch = m; }
    const gd = Math.abs(m.hs - m.as);
    if (gd > biggestGD) { biggestGD = gd; biggestGDMatch = m; }
  });

  const total = homeWins + draws + awayWins || 1;
  const hwPct = (homeWins / total * 100).toFixed(0);
  const dPct = (draws / total * 100).toFixed(0);
  const awPct = (awayWins / total * 100).toFixed(0);

  // Group statistics
  const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const groupStats = GROUPS.map(g => {
    const gm = store.matches.filter(m => m.g === g && store.isMatchPlayed(m));
    const goals = gm.reduce((s, m) => s + m.hs + m.as, 0);
    return { group: g, played: gm.length, goals, avg: gm.length > 0 ? (goals / gm.length).toFixed(1) : '0' };
  }).sort((a, b) => b.goals - a.goals);

  const maxGroupGoals = Math.max(...groupStats.map(g => g.goals), 1);

  const hFlag = (m) => store.teams[m?.h]?.flag || '';
  const aFlag = (m) => store.teams[m?.a]?.flag || '';

  container.innerHTML = `
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Turnier-Statistiken</h2>
      <p class="text-txt-dim text-sm">Aggregierte Daten aus ${playedMatches.length} gespielten Partien.</p>
    </section>

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-accent">${totalGoals}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Tore gesamt</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-sky">${avgGoals}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Tore / Spiel</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-gold">${playedMatches.length}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Spiele gespielt</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-emerald-400">${store.matches.length - playedMatches.length}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Ausstehend</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Ergebnisverteilung -->
      <section class="card p-5">
        <h3 class="font-display text-base font-bold text-white mb-4">Ergebnisverteilung</h3>
        ${playedMatches.length === 0 ? '<p class="text-sm text-txt-muted">Noch keine Spiele gespielt.</p>' : `
          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Heimsiege</span><span class="text-emerald-400 font-bold">${homeWins} (${hwPct}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-emerald-500/60 rounded-full transition-all" style="width:${hwPct}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Unentschieden</span><span class="text-txt-dim font-bold">${draws} (${dPct}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-txt-muted/40 rounded-full transition-all" style="width:${dPct}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Auswärtssiege</span><span class="text-accent font-bold">${awayWins} (${awPct}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-accent/60 rounded-full transition-all" style="width:${awPct}%"></div></div>
            </div>
          </div>
        `}
      </section>

      <!-- Highlights -->
      <section class="card p-5">
        <h3 class="font-display text-base font-bold text-white mb-4">Highlights</h3>
        ${playedMatches.length === 0 ? '<p class="text-sm text-txt-muted">Noch keine Spiele gespielt.</p>' : `
          <div class="space-y-3">
            ${highestGoalMatch ? `
              <div class="bg-bg rounded-lg px-4 py-3 border border-border">
                <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Torreichstes Spiel</div>
                <div class="text-sm font-semibold text-white">${hFlag(highestGoalMatch)} ${highestGoalMatch.h} ${highestGoalMatch.hs}:${highestGoalMatch.as} ${highestGoalMatch.a} ${aFlag(highestGoalMatch)}</div>
                <div class="text-[10px] text-txt-muted">${highestGoals} Tore · Gruppe ${highestGoalMatch.g}</div>
              </div>` : ''}
            ${biggestGDMatch ? `
              <div class="bg-bg rounded-lg px-4 py-3 border border-border">
                <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Größte Überraschung (Tordifferenz)</div>
                <div class="text-sm font-semibold text-white">${hFlag(biggestGDMatch)} ${biggestGDMatch.h} ${biggestGDMatch.hs}:${biggestGDMatch.as} ${biggestGDMatch.a} ${aFlag(biggestGDMatch)}</div>
                <div class="text-[10px] text-txt-muted">Differenz: ${biggestGD} · Gruppe ${biggestGDMatch.g}</div>
              </div>` : ''}
          </div>
        `}
      </section>
    </div>

    <!-- Gruppen-Ranking -->
    <section class="card p-5 mb-8">
      <h3 class="font-display text-base font-bold text-white mb-4">Tore nach Gruppe</h3>
      <div class="space-y-2">
        ${groupStats.map(g => `
          <div class="flex items-center gap-3">
            <span class="text-sm font-bold text-white w-16">Gruppe ${g.group}</span>
            <div class="flex-1 h-5 bg-bg rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-accent/60 to-gold/60 rounded-full transition-all flex items-center justify-end pr-2" style="width:${(g.goals / maxGroupGoals * 100).toFixed(0)}%">
                <span class="text-[10px] font-bold text-white">${g.goals}</span>
              </div>
            </div>
            <span class="text-[10px] text-txt-muted w-12 text-right">${g.avg}/Spiel</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- KI-Favoritenanalyse -->
    <section class="card p-5">
      <h3 class="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
        <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
        KI-Favoritenanalyse
      </h3>
      <p class="text-sm text-txt-dim mb-4">Lass die KI basierend auf allen bisherigen Ergebnissen die Turnier-Favoriten bewerten.</p>
      <button id="stats-favorites-btn" class="flex items-center gap-2 px-5 py-2.5 bg-gold/20 hover:bg-gold/30 text-gold font-bold text-sm rounded-lg transition-colors border border-gold/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span id="stats-fav-text">Favoritenanalyse starten</span>
        <div id="stats-fav-spinner" class="w-4 h-4 rounded-full spinner-ring animate-spin hidden"></div>
      </button>
      <div id="stats-favorites-output" class="hidden mt-5 report-enter">
        <div id="stats-favorites-content" class="max-w-none"></div>
      </div>
    </section>
  `;

  // Favorites analysis
  document.getElementById('stats-favorites-btn').addEventListener('click', async () => {
    if (!store.apiKey) {
      showToast('Bitte hinterlege zuerst deinen Gemini API-Key.', 'error');
      document.getElementById('settings-modal').classList.remove('hidden');
      return;
    }

    const btn = document.getElementById('stats-favorites-btn');
    const spinner = document.getElementById('stats-fav-spinner');
    const text = document.getElementById('stats-fav-text');
    btn.disabled = true;
    spinner.classList.remove('hidden');
    text.textContent = 'Analysiere...';

    const allStandings = GROUPS.map(g => {
      const s = store.getGroupStandings(g);
      return `Gruppe ${g}: ${s.map((t, i) => `${i+1}. ${t.team} (${t.pts}P, ${t.gf}:${t.ga})`).join(', ')}`;
    }).join('\n');

    const prompt = `Du bist ein Elite-Fußballanalyst. Basierend auf den aktuellen WM 2026 Gruppenständen und bisherigen Ergebnissen, erstelle ein Ranking der **Top 10 Turnier-Favoriten**.

**Aktuelle Gruppenstände:**
${allStandings}

**Gespielt:** ${playedMatches.length} von ${store.matches.length} Gruppenspielen

Für jeden Favoriten:
1. Platzierung und Teamname mit Flagge
2. Aktuelle Form (Punkte, Tore, Tordifferenz)
3. Stärken und Schwächen
4. Prognose für die K.O.-Runde
5. Gesamtbewertung (Sterne: ⭐)

Formatiere als Markdown mit klarer Struktur. Sei analytisch und fundiert.`;

    try {
      const report = await callGeminiAPI(prompt, store.apiKey);
      document.getElementById('stats-favorites-content').innerHTML = marked.parse(report);
      document.getElementById('stats-favorites-output').classList.remove('hidden');
      showToast('Favoritenanalyse abgeschlossen!', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      btn.disabled = false;
      spinner.classList.add('hidden');
      text.textContent = 'Favoritenanalyse starten';
    }
  });

  return { destroy() { container.innerHTML = ''; } };
}
