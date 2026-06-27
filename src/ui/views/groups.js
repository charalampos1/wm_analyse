import { store } from '../../state/store.js';
import { navigateTo } from '../../router.js';

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export function renderGroups(param) {
  const container = document.getElementById('app-content');

  // If param = scenario/X, show scenario modal for group X
  const scenarioGroup = param && param.startsWith('scenario/') ? param.split('/')[1] : null;

  container.innerHTML = `
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Gruppentabellen</h2>
      <p class="text-txt-dim text-sm">Alle 12 WM-Gruppen auf einen Blick. Qualifizierte Teams sind markiert.</p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="groups-grid"></div>

    <!-- Scenario Modal -->
    <div id="scenario-modal" class="${scenarioGroup ? '' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div class="bg-bg-card border border-border rounded-xl p-6 w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto" id="scenario-content"></div>
    </div>
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
          <button data-scenario="${g}" class="text-[10px] px-2 py-0.5 rounded bg-sky/10 text-sky border border-sky/20 hover:bg-sky/20 transition-colors font-semibold">Was wäre wenn?</button>
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
    if (row) navigateTo(`#/teams/${encodeURIComponent(row.dataset.team)}`);
  });

  // Scenario buttons
  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-scenario]');
    if (btn) {
      e.stopPropagation();
      openScenario(btn.dataset.scenario);
    }
  });

  if (scenarioGroup) openScenario(scenarioGroup);

  return { destroy() { container.innerHTML = ''; } };
}

function openScenario(groupId) {
  const modal = document.getElementById('scenario-modal');
  const content = document.getElementById('scenario-content');
  modal.classList.remove('hidden');

  const groupMatches = store.matches.filter(m => m.g === groupId);
  const unplayed = groupMatches.filter(m => !store.isMatchPlayed(m));

  // Clone match data for temporary calculations
  const tempResults = {};
  groupMatches.forEach(m => {
    if (store.isMatchPlayed(m)) {
      tempResults[m.id] = { hs: m.hs, as: m.as };
    }
  });

  function calcTempStandings() {
    const teams = Object.keys(store.teams).filter(t => store.teams[t].group === groupId);
    const table = teams.map(t => ({ team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }));
    groupMatches.forEach(m => {
      const res = tempResults[m.id];
      if (!res) return;
      const hStat = table.find(t => t.team === m.h);
      const aStat = table.find(t => t.team === m.a);
      if (!hStat || !aStat) return;
      hStat.p++; aStat.p++;
      hStat.gf += res.hs; hStat.ga += res.as;
      aStat.gf += res.as; aStat.ga += res.hs;
      hStat.gd = hStat.gf - hStat.ga;
      aStat.gd = aStat.gf - aStat.ga;
      if (res.hs > res.as) { hStat.w++; hStat.pts += 3; aStat.l++; }
      else if (res.hs < res.as) { aStat.w++; aStat.pts += 3; hStat.l++; }
      else { hStat.d++; aStat.d++; hStat.pts++; aStat.pts++; }
    });
    table.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
    return table;
  }

  function renderScenario() {
    const standings = calcTempStandings();
    content.innerHTML = `
      <button id="scenario-close" class="absolute top-4 right-4 text-txt-dim hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <h3 class="font-display text-lg font-bold text-white mb-1">Szenarien-Rechner · Gruppe ${groupId}</h3>
      <p class="text-xs text-txt-muted mb-4">Trage hypothetische Ergebnisse ein und sieh, wie sich die Tabelle verändert.</p>

      ${unplayed.length === 0 ? '<p class="text-sm text-txt-dim mb-4">Alle Spiele dieser Gruppe wurden bereits gespielt.</p>' : `
        <div class="space-y-2 mb-5">
          ${unplayed.map(m => {
            const hFlag = store.teams[m.h]?.flag || '';
            const aFlag = store.teams[m.a]?.flag || '';
            const res = tempResults[m.id];
            return `
              <div class="flex items-center gap-2 bg-bg rounded-lg px-3 py-2 border border-border text-sm">
                <span class="flex-1 text-right text-white font-medium">${hFlag} ${m.h}</span>
                <input type="number" min="0" max="20" data-scenario-match="${m.id}" data-side="h" value="${res ? res.hs : ''}" class="w-12 text-center bg-[#0a0f1a] border border-border rounded px-1 py-1 text-white font-bold focus:outline-none focus:border-accent/60" placeholder="-" />
                <span class="text-txt-muted font-bold">:</span>
                <input type="number" min="0" max="20" data-scenario-match="${m.id}" data-side="a" value="${res ? res.as : ''}" class="w-12 text-center bg-[#0a0f1a] border border-border rounded px-1 py-1 text-white font-bold focus:outline-none focus:border-accent/60" placeholder="-" />
                <span class="flex-1 text-white font-medium">${m.a} ${aFlag}</span>
              </div>`;
          }).join('')}
        </div>
      `}

      <h4 class="text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2">Tabellen-Vorschau</h4>
      <table class="w-full text-[13px] mb-4">
        <thead><tr class="text-txt-muted text-[10px] uppercase tracking-wider">
          <th class="text-left pb-2">#</th><th class="text-left pb-2">Team</th>
          <th class="text-center pb-2">Sp</th><th class="text-center pb-2">S</th><th class="text-center pb-2">U</th><th class="text-center pb-2">N</th>
          <th class="text-center pb-2">Tore</th><th class="text-center pb-2">TD</th><th class="text-center pb-2 text-gold">Pkt</th>
        </tr></thead>
        <tbody>
          ${standings.map((s, i) => {
            const flag = store.teams[s.team]?.flag || '';
            let rowClass = i < 2 ? 'border-l-2 border-emerald-500/60' : i === 2 ? 'border-l-2 border-gold/40' : '';
            return `<tr class="${rowClass}">
              <td class="py-1 text-txt-muted text-xs">${i+1}</td>
              <td class="py-1 text-white">${flag} ${s.team}</td>
              <td class="py-1 text-center text-txt-dim">${s.p}</td>
              <td class="py-1 text-center text-txt-dim">${s.w}</td>
              <td class="py-1 text-center text-txt-dim">${s.d}</td>
              <td class="py-1 text-center text-txt-dim">${s.l}</td>
              <td class="py-1 text-center text-txt-dim">${s.gf}:${s.ga}</td>
              <td class="py-1 text-center ${s.gd > 0 ? 'text-emerald-400' : s.gd < 0 ? 'text-accent' : 'text-txt-dim'}">${s.gd > 0 ? '+' : ''}${s.gd}</td>
              <td class="py-1 text-center font-bold text-gold">${s.pts}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>

      ${unplayed.length > 0 ? `<button id="scenario-apply" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors">Ergebnisse übernehmen</button>` : ''}
    `;

    // Close button
    document.getElementById('scenario-close').addEventListener('click', () => modal.classList.add('hidden'));

    // Input listeners for live updates
    content.querySelectorAll('[data-scenario-match]').forEach(input => {
      input.addEventListener('input', () => {
        const matchId = parseInt(input.dataset.scenarioMatch, 10);
        const side = input.dataset.side;
        if (!tempResults[matchId]) tempResults[matchId] = { hs: 0, as: 0 };

        const row = input.closest('.flex');
        const hInput = row.querySelector('[data-side="h"]');
        const aInput = row.querySelector('[data-side="a"]');
        const hVal = parseInt(hInput.value, 10);
        const aVal = parseInt(aInput.value, 10);

        if (!isNaN(hVal) && !isNaN(aVal) && hVal >= 0 && aVal >= 0) {
          tempResults[matchId] = { hs: hVal, as: aVal };
        } else {
          delete tempResults[matchId];
        }
        renderScenario();
      });
    });

    // Apply button
    const applyBtn = document.getElementById('scenario-apply');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        let applied = 0;
        unplayed.forEach(m => {
          const res = tempResults[m.id];
          if (res && !isNaN(res.hs) && !isNaN(res.as)) {
            store.saveMatchResult(m.id, res.hs, res.as);
            applied++;
          }
        });
        modal.classList.add('hidden');
        if (applied > 0) {
          import('../components.js').then(mod => mod.showToast(`${applied} Ergebnis${applied > 1 ? 'se' : ''} übernommen!`, 'success'));
          // Re-render groups view
          renderGroups(null);
        }
      });
    }
  }

  renderScenario();
}
