import { store } from '../../state/store.js';
import { showToast } from '../components.js';

// Official FIFA WM 2026 bracket pairings
// R32 = Round of 32 (16 games) → R16 → QF → SF → Final
// Bracket based on group winners (1st), runners-up (2nd), and best 3rd-place teams

const BRACKET_TEMPLATE = [
  // Round of 32 (matchday slots)
  { id: 'r32-1', h: '1A', a: '3C/D/E', round: 'R32' },
  { id: 'r32-2', h: '2A', a: '2C', round: 'R32' },
  { id: 'r32-3', h: '1B', a: '3A/D/E', round: 'R32' },
  { id: 'r32-4', h: '2B', a: '2D', round: 'R32' },
  { id: 'r32-5', h: '1C', a: '3B/F/G', round: 'R32' },
  { id: 'r32-6', h: '2E', a: '2G', round: 'R32' },
  { id: 'r32-7', h: '1D', a: '3A/B/F', round: 'R32' },
  { id: 'r32-8', h: '2F', a: '2H', round: 'R32' },
  { id: 'r32-9', h: '1E', a: '3G/H/I', round: 'R32' },
  { id: 'r32-10', h: '1F', a: '3H/I/J', round: 'R32' },
  { id: 'r32-11', h: '1G', a: '3I/J/K', round: 'R32' },
  { id: 'r32-12', h: '2I', a: '2K', round: 'R32' },
  { id: 'r32-13', h: '1H', a: '3J/K/L', round: 'R32' },
  { id: 'r32-14', h: '2J', a: '2L', round: 'R32' },
  { id: 'r32-15', h: '1I', a: '3K/L/A', round: 'R32' },
  { id: 'r32-16', h: '1J', a: '3L/A/B', round: 'R32' },
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

function resolveGroupPosition(code) {
  // e.g., "1A" → 1st place in group A
  const pos = parseInt(code[0], 10);
  const group = code.slice(1);
  const standings = store.getGroupStandings(group);
  if (standings.length >= pos && standings[pos - 1].p > 0) {
    return standings[pos - 1].team;
  }
  return null;
}

function resolveSlot(code) {
  // Codes like "1A", "2B", or "3C/D/E"
  if (code.startsWith('3')) {
    // Best 3rd-place logic — simplified for display
    return null; // Will show placeholder
  }
  return resolveGroupPosition(code);
}

function getWinner(matchId, koResults) {
  const res = koResults[matchId];
  if (!res || res.hs === undefined || res.as === undefined) return null;
  if (res.hs > res.as) return res.home;
  if (res.as > res.hs) return res.away;
  return null; // Draw = no winner in KO (simplified)
}

export function renderKnockout() {
  const container = document.getElementById('app-content');
  let koResults = loadKoResults();

  function render() {
    // Resolve R32 teams
    const r32 = BRACKET_TEMPLATE.map(slot => {
      const home = resolveSlot(slot.h);
      const away = resolveSlot(slot.a);
      const result = koResults[slot.id];
      return { ...slot, homeName: home, awayName: away, result };
    });

    // R16 from R32 winners
    const r16 = [];
    for (let i = 0; i < 16; i += 2) {
      const w1 = getWinner(r32[i].id, koResults);
      const w2 = getWinner(r32[i + 1].id, koResults);
      const id = `r16-${Math.floor(i / 2) + 1}`;
      r16.push({ id, homeName: w1, awayName: w2, result: koResults[id] });
    }

    // QF from R16 winners
    const qf = [];
    for (let i = 0; i < 8; i += 2) {
      const w1 = getWinner(r16[i].id, koResults);
      const w2 = getWinner(r16[i + 1].id, koResults);
      const id = `qf-${Math.floor(i / 2) + 1}`;
      qf.push({ id, homeName: w1, awayName: w2, result: koResults[id] });
    }

    // SF from QF winners
    const sf = [];
    for (let i = 0; i < 4; i += 2) {
      const w1 = getWinner(qf[i].id, koResults);
      const w2 = getWinner(qf[i + 1].id, koResults);
      const id = `sf-${Math.floor(i / 2) + 1}`;
      sf.push({ id, homeName: w1, awayName: w2, result: koResults[id] });
    }

    // Final + 3rd place
    const sfW1 = getWinner('sf-1', koResults);
    const sfW2 = getWinner('sf-2', koResults);
    const sfL1 = sf[0].result ? (sf[0].result.hs < sf[0].result.as ? sf[0].result.home : sf[0].result.away) : null;
    const sfL2 = sf[1].result ? (sf[1].result.hs < sf[1].result.as ? sf[1].result.home : sf[1].result.away) : null;

    const finale = { id: 'final', homeName: sfW1, awayName: sfW2, result: koResults['final'] };
    const thirdPlace = { id: 'third', homeName: sfL1, awayName: sfL2, result: koResults['third'] };

    container.innerHTML = `
      <section class="mb-6">
        <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">K.O.-Runde</h2>
        <p class="text-txt-dim text-sm">Klicke auf ein Spiel, um das Ergebnis einzutragen. Der Sieger rückt automatisch vor.</p>
      </section>

      <div class="space-y-8">
        ${renderRound('Achtelfinale (R32)', r32)}
        ${renderRound('Achtelfinale (R16)', r16)}
        ${renderRound('Viertelfinale', qf)}
        ${renderRound('Halbfinale', sf)}
        ${renderRound('Spiel um Platz 3', [thirdPlace])}
        ${renderRound('🏆 Finale', [finale])}
      </div>
    `;

    // Bind match click handlers
    container.querySelectorAll('[data-ko-match]').forEach(el => {
      el.addEventListener('click', () => {
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
  }

  function renderRound(title, matches) {
    return `
      <section class="card p-4 sm:p-5">
        <h3 class="font-display text-sm font-bold text-white mb-3 uppercase tracking-wider">${title}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          ${matches.map(m => renderKoMatch(m)).join('')}
        </div>
      </section>
    `;
  }

  function renderKoMatch(match) {
    const hFlag = match.homeName ? (store.teams[match.homeName]?.flag || '') : '';
    const aFlag = match.awayName ? (store.teams[match.awayName]?.flag || '') : '';
    const hName = match.homeName || match.h || '???';
    const aName = match.awayName || match.a || '???';
    const hasTeams = match.homeName && match.awayName;
    const res = match.result;
    const hasResult = res && res.hs !== undefined;

    let winner = null;
    if (hasResult) {
      winner = res.hs > res.as ? match.homeName : res.as > res.hs ? match.awayName : null;
    }

    return `
      <div class="bg-bg rounded-lg border ${hasResult ? 'border-emerald-500/30' : hasTeams ? 'border-border hover:border-accent/40 cursor-pointer' : 'border-border/40 opacity-50'} p-3 transition-all text-sm"
           data-ko-match="${match.id}" data-ko-home="${match.homeName || ''}" data-ko-away="${match.awayName || ''}">
        <div class="flex items-center justify-between mb-1.5">
          <span class="${winner === match.homeName ? 'text-emerald-400 font-bold' : 'text-white'} truncate flex-1">${hFlag} ${hName}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.hs}</span>` : ''}
        </div>
        <div class="flex items-center justify-between">
          <span class="${winner === match.awayName ? 'text-emerald-400 font-bold' : 'text-white'} truncate flex-1">${aFlag} ${aName}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.as}</span>` : ''}
        </div>
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
        <p class="text-[10px] text-txt-muted text-center mb-3">Bei K.O.-Spielen muss es einen Sieger geben.</p>
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
        delete koResults[matchId];
        // Also delete downstream results
        const prefixes = ['r32-', 'r16-', 'qf-', 'sf-', 'final', 'third'];
        const myIdx = prefixes.findIndex(p => matchId.startsWith(p));
        prefixes.slice(myIdx + 1).forEach(p => {
          Object.keys(koResults).forEach(k => { if (k.startsWith(p)) delete koResults[k]; });
        });
        saveKoResults(koResults);
        modal.remove();
        render();
        showToast('Ergebnis und nachfolgende Runden zurückgesetzt.', 'info');
      });
    }
  }

  render();
  return { destroy() { container.innerHTML = ''; } };
}
