import { store } from '../../state/store.js';
import { navigateTo } from '../../router.js';

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export function renderGroups() {
  const container = document.getElementById('app-content');

  container.innerHTML = `
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Gruppentabellen</h2>
      <p class="text-txt-dim text-sm">Alle 12 WM-Gruppen auf einen Blick. Qualifizierte Teams sind markiert.</p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="groups-grid"></div>

    <!-- Third-Place Ranking -->
    <div id="third-place-section"></div>
  `;

  const grid = document.getElementById('groups-grid');

  GROUPS.forEach(g => {
    const standings = store.getGroupStandings(g);
    const totalMatches = store.matches.filter(m => m.g === g).length;
    const playedMatches = store.matches.filter(m => m.g === g && store.isMatchPlayed(m)).length;
    const liveMatches = store.matches.filter(m => m.g === g && m.liveState === 'live').length;

    const card = document.createElement('div');
    card.className = 'card p-4 card-slide';
    card.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-base font-bold text-white">Gruppe ${g}</h3>
        <div class="flex items-center gap-2">
          ${liveMatches > 0 ? `<span class="flex items-center gap-1 text-[10px] text-red-400 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>LIVE</span>` : ''}
          <span class="text-[10px] text-txt-muted">${playedMatches}/${totalMatches} Spiele</span>
        </div>
      </div>
      <table class="w-full text-[13px]">
        <thead>
          <tr class="text-txt-muted text-[10px] uppercase tracking-wider">
            <th class="text-left pb-2 pl-1">#</th>
            <th class="text-left pb-2">Team</th>
            <th class="text-center pb-2 w-8">Sp</th>
            <th class="text-center pb-2 w-8">S</th>
            <th class="text-center pb-2 w-8">U</th>
            <th class="text-center pb-2 w-8">N</th>
            <th class="text-center pb-2 w-12">Tore</th>
            <th class="text-center pb-2 w-8">TD</th>
            <th class="text-center pb-2 w-8 font-bold text-gold">Pkt</th>
          </tr>
        </thead>
        <tbody>
          ${standings.map((s, i) => {
            const flag = store.teams[s.team]?.flag || '';
            const pos = i + 1;
            let rowClass = '';
            if (pos <= 2) rowClass = 'border-l-2 border-emerald-500/60';
            else if (pos === 3) rowClass = 'border-l-2 border-gold/40';
            return `
              <tr class="${rowClass} hover:bg-white/[0.02] cursor-pointer group" data-team="${s.team}">
                <td class="py-1.5 pl-1 text-txt-muted text-xs">${pos}</td>
                <td class="py-1.5">
                  <span class="font-medium text-white group-hover:text-accent transition-colors">${flag} ${s.team}</span>
                </td>
                <td class="py-1.5 text-center text-txt-dim">${s.p}</td>
                <td class="py-1.5 text-center text-txt-dim">${s.w}</td>
                <td class="py-1.5 text-center text-txt-dim">${s.d}</td>
                <td class="py-1.5 text-center text-txt-dim">${s.l}</td>
                <td class="py-1.5 text-center text-txt-dim">${s.gf}:${s.ga}</td>
                <td class="py-1.5 text-center ${s.gd > 0 ? 'text-emerald-400' : s.gd < 0 ? 'text-accent' : 'text-txt-dim'}">${s.gd > 0 ? '+' : ''}${s.gd}</td>
                <td class="py-1.5 text-center font-bold text-gold">${s.pts}</td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
      <div class="mt-2 flex gap-3 text-[9px] text-txt-muted">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-emerald-500/60"></span>Qualifiziert (Platz 1–2)</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-gold/40"></span>Chance als Dritter</span>
      </div>
    `;
    grid.appendChild(card);
  });

  // Event delegation for team clicks
  grid.addEventListener('click', e => {
    const row = e.target.closest('[data-team]');
    if (row) {
      navigateTo(`#/teams/${encodeURIComponent(row.dataset.team)}`);
    }
  });

  // Render third-place ranking table
  renderThirdPlaceTable();

  return { destroy() { container.innerHTML = ''; } };
}

function renderThirdPlaceTable() {
  const section = document.getElementById('third-place-section');
  const thirds = store.getThirdPlaceRanking();

  if (thirds.length === 0) {
    section.innerHTML = '';
    return;
  }

  section.innerHTML = `
    <section class="card p-4 sm:p-5 mt-6 card-slide">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-base font-bold text-white flex items-center gap-2">
          <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Ranking der Gruppendritten
        </h3>
        <span class="text-[10px] text-txt-muted">${thirds.filter(t => t.qualified).length} von ${thirds.length} qualifiziert</span>
      </div>
      <p class="text-xs text-txt-muted mb-3">Die besten 8 Gruppendritten erreichen die K.O.-Runde (Sechzehntelfinale). Sortiert nach: Punkte → Tordifferenz → Tore.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-[13px]">
          <thead>
            <tr class="text-txt-muted text-[10px] uppercase tracking-wider">
              <th class="text-left pb-2 pl-1">#</th>
              <th class="text-left pb-2">Team</th>
              <th class="text-center pb-2">Gruppe</th>
              <th class="text-center pb-2 w-8">Sp</th>
              <th class="text-center pb-2 w-8">S</th>
              <th class="text-center pb-2 w-8">U</th>
              <th class="text-center pb-2 w-8">N</th>
              <th class="text-center pb-2 w-12">Tore</th>
              <th class="text-center pb-2 w-8">TD</th>
              <th class="text-center pb-2 w-8 font-bold text-gold">Pkt</th>
              <th class="text-center pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            ${thirds.map(t => {
              const flag = store.teams[t.team]?.flag || '';
              const rowBorder = t.qualified
                ? 'border-l-2 border-emerald-500/60'
                : 'border-l-2 border-accent/30 opacity-60';
              return `
                <tr class="${rowBorder} hover:bg-white/[0.02] cursor-pointer" data-third-team="${t.team}">
                  <td class="py-1.5 pl-1 text-txt-muted text-xs">${t.rank}</td>
                  <td class="py-1.5">
                    <span class="font-medium text-white">${flag} ${t.team}</span>
                  </td>
                  <td class="py-1.5 text-center">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">${t.group}</span>
                  </td>
                  <td class="py-1.5 text-center text-txt-dim">${t.p}</td>
                  <td class="py-1.5 text-center text-txt-dim">${t.w}</td>
                  <td class="py-1.5 text-center text-txt-dim">${t.d}</td>
                  <td class="py-1.5 text-center text-txt-dim">${t.l}</td>
                  <td class="py-1.5 text-center text-txt-dim">${t.gf}:${t.ga}</td>
                  <td class="py-1.5 text-center ${t.gd > 0 ? 'text-emerald-400' : t.gd < 0 ? 'text-accent' : 'text-txt-dim'}">${t.gd > 0 ? '+' : ''}${t.gd}</td>
                  <td class="py-1.5 text-center font-bold text-gold">${t.pts}</td>
                  <td class="py-1.5 text-center">
                    ${t.qualified
                      ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Weiter</span>'
                      : '<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent/10 text-accent border border-accent/20">Aus</span>'
                    }
                  </td>
                </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div class="mt-2 flex gap-3 text-[9px] text-txt-muted">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-emerald-500/60"></span>Qualifiziert (Top 8)</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-accent/30"></span>Ausgeschieden</span>
      </div>
    </section>
  `;

  // Click handler for team navigation
  section.addEventListener('click', e => {
    const row = e.target.closest('[data-third-team]');
    if (row) {
      navigateTo(`#/teams/${encodeURIComponent(row.dataset.thirdTeam)}`);
    }
  });
}