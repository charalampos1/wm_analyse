import { store } from '../../state/store.js';
import { showToast } from '../components.js';

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

// Official R32 bracket with FIFA match numbers
// 'h' and 'a' use position codes: 1X = winner group X, 2X = runner-up group X
// 3XXXXX = best third-place from one of those groups (resolved via allocation matrix)
const R32_BRACKET = [
  { id: 'r32-73',  matchNum: 73,  h: '2A',      a: '2B',      round: 'R32' },
  { id: 'r32-74',  matchNum: 74,  h: '1E',      a: '3ABCDF',  round: 'R32' },
  { id: 'r32-75',  matchNum: 75,  h: '1F',      a: '2C',      round: 'R32' },
  { id: 'r32-76',  matchNum: 76,  h: '1G',      a: '3AEHIJ',  round: 'R32' },
  { id: 'r32-77',  matchNum: 77,  h: '1H',      a: '2D',      round: 'R32' },
  { id: 'r32-78',  matchNum: 78,  h: '2E',      a: '2F',      round: 'R32' },
  { id: 'r32-79',  matchNum: 79,  h: '1A',      a: '3CEFHI',  round: 'R32' },
  { id: 'r32-80',  matchNum: 80,  h: '1B',      a: '3EFGIJ',  round: 'R32' },
  { id: 'r32-81',  matchNum: 81,  h: '1D',      a: '3BEFIJ',  round: 'R32' },
  { id: 'r32-82',  matchNum: 82,  h: '2G',      a: '2H',      round: 'R32' },
  { id: 'r32-83',  matchNum: 83,  h: '1I',      a: '2J',      round: 'R32' },
  { id: 'r32-84',  matchNum: 84,  h: '1J',      a: '3DEIJL',  round: 'R32' },
  { id: 'r32-85',  matchNum: 85,  h: '1K',      a: '3AGHKL',  round: 'R32' },
  { id: 'r32-86',  matchNum: 86,  h: '1L',      a: '2K',      round: 'R32' },
  { id: 'r32-87',  matchNum: 87,  h: '2I',      a: '2L',      round: 'R32' },
  { id: 'r32-88',  matchNum: 88,  h: '1C',      a: '3DGKHL',  round: 'R32' },
];

// Official R16 pairings (from R32 winners)
const R16_PAIRS = [
  { id: 'r16-1', label: 'W73 vs W75',  sources: ['r32-73', 'r32-75'] },
  { id: 'r16-2', label: 'W74 vs W77',  sources: ['r32-74', 'r32-77'] },
  { id: 'r16-3', label: 'W76 vs W78',  sources: ['r32-76', 'r32-78'] },
  { id: 'r16-4', label: 'W79 vs W80',  sources: ['r32-79', 'r32-80'] },
  { id: 'r16-5', label: 'W83 vs W84',  sources: ['r32-83', 'r32-84'] },
  { id: 'r16-6', label: 'W81 vs W82',  sources: ['r32-81', 'r32-82'] },
  { id: 'r16-7', label: 'W86 vs W88',  sources: ['r32-86', 'r32-88'] },
  { id: 'r16-8', label: 'W85 vs W87',  sources: ['r32-85', 'r32-87'] },
];

// QF pairings (from R16 winners)
const QF_PAIRS = [
  { id: 'qf-1', sources: ['r16-1', 'r16-2'] },
  { id: 'qf-2', sources: ['r16-3', 'r16-4'] },
  { id: 'qf-3', sources: ['r16-5', 'r16-6'] },
  { id: 'qf-4', sources: ['r16-7', 'r16-8'] },
];

// SF pairings (from QF winners)
const SF_PAIRS = [
  { id: 'sf-1', sources: ['qf-1', 'qf-2'] },
  { id: 'sf-2', sources: ['qf-3', 'qf-4'] },
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

/**
 * Resolve a group position code like "1A" (winner of group A) or "2B" (runner-up of group B)
 * to a concrete team name.
 */
function resolveGroupPosition(code) {
  const pos = parseInt(code[0], 10);
  const group = code.slice(1);
  const standings = store.getGroupStandings(group);
  if (standings.length >= pos && standings[pos - 1].p > 0) {
    return standings[pos - 1].team;
  }
  return null;
}

/**
 * Resolve a slot code to a concrete team name.
 * For third-place codes (e.g. "3ABCDF"), resolve using the third-place ranking.
 */
function resolveSlot(code) {
  if (code.startsWith('3')) {
    // Third-place slot — resolve dynamically
    const possibleGroups = code.slice(1).split('');
    const thirds = store.getThirdPlaceRanking();
    const qualifiedThirds = thirds.filter(t => t.qualified);

    // Find which qualified third-place team comes from one of the possible groups
    for (const t of qualifiedThirds) {
      if (possibleGroups.includes(t.group)) {
        // Check this third hasn't been "taken" by another slot with higher priority
        // This is simplified — for full accuracy we'd need the complete FIFA Annex C matrix
        return t.team;
      }
    }
    return null;
  }
  return resolveGroupPosition(code);
}

/**
 * More sophisticated third-place allocation using FIFA Annex C logic.
 * Given the set of 8 qualifying groups, maps each R32 third-place slot
 * to the correct group's third-place team.
 * 
 * This implements the allocation by matching the qualified groups to the
 * possible group sets in each R32 match.
 */
function resolveAllThirdPlaceSlots() {
  const thirds = store.getThirdPlaceRanking();
  const qualifiedThirds = thirds.filter(t => t.qualified);
  const qualifiedGroups = qualifiedThirds.map(t => t.group).sort();

  if (qualifiedGroups.length < 8) return {};

  // R32 matches that involve third-place teams, with their possible source groups
  const thirdSlots = [
    { matchId: 'r32-74',  possible: 'ABCDF' },
    { matchId: 'r32-76',  possible: 'AEHIJ' },
    { matchId: 'r32-79',  possible: 'CEFHI' },
    { matchId: 'r32-80',  possible: 'EFGIJ' },
    { matchId: 'r32-81',  possible: 'BEFIJ' },
    { matchId: 'r32-84',  possible: 'DEIJL' },
    { matchId: 'r32-85',  possible: 'AGHKL' },
    { matchId: 'r32-88',  possible: 'DGKHL' },
  ];

  // Greedy allocation: assign each qualified group to the first available slot
  const assigned = {};
  const usedGroups = new Set();

  // Try each permutation priority — assign slots that have fewer options first
  const slotsWithOptions = thirdSlots.map(s => ({
    ...s,
    available: s.possible.split('').filter(g => qualifiedGroups.includes(g))
  }));

  // Sort by number of available options (most constrained first)
  slotsWithOptions.sort((a, b) => a.available.length - b.available.length);

  function allocate(index) {
    if (index >= slotsWithOptions.length) return true;
    const slot = slotsWithOptions[index];
    for (const group of slot.available) {
      if (!usedGroups.has(group)) {
        usedGroups.add(group);
        assigned[slot.matchId] = group;
        if (allocate(index + 1)) return true;
        usedGroups.delete(group);
        delete assigned[slot.matchId];
      }
    }
    return false;
  }

  allocate(0);

  // Map match IDs to team names
  const result = {};
  for (const [matchId, group] of Object.entries(assigned)) {
    const thirdTeam = qualifiedThirds.find(t => t.group === group);
    if (thirdTeam) result[matchId] = thirdTeam.team;
  }

  return result;
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

export function renderKnockout() {
  const container = document.getElementById('app-content');
  let koResults = loadKoResults();

  // Resolve third-place allocations once
  const thirdAllocations = resolveAllThirdPlaceSlots();

  function render() {
    // Resolve R32 teams
    const r32 = R32_BRACKET.map(slot => {
      let homeName, awayName;

      if (slot.h.startsWith('3')) {
        homeName = thirdAllocations[slot.id] || null;
      } else {
        homeName = resolveGroupPosition(slot.h);
      }

      if (slot.a.startsWith('3')) {
        awayName = thirdAllocations[slot.id] || null;
      } else {
        awayName = resolveGroupPosition(slot.a);
      }

      return { ...slot, homeName, awayName, result: koResults[slot.id] };
    });

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

    const finale = { id: 'final', homeName: sfW1, awayName: sfW2, result: koResults['final'] };
    const thirdPlace = { id: 'third', homeName: sfL1, awayName: sfL2, result: koResults['third'] };

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

    // Display name: real team name, or the bracket code (e.g. "1A"), or "???"
    const hDisplay = match.homeName || (match.h ? formatSlotCode(match.h) : '???');
    const aDisplay = match.awayName || (match.a ? formatSlotCode(match.a) : '???');

    const hasTeams = match.homeName && match.awayName;
    const res = match.result;
    const hasResult = res && res.hs !== undefined;

    let winner = null;
    if (hasResult) {
      winner = res.hs > res.as ? match.homeName : res.as > res.hs ? match.awayName : null;
    }

    const matchLabel = match.matchNum ? `#${match.matchNum}` : '';

    return `
      <div class="bg-bg rounded-lg border ${hasResult ? 'border-emerald-500/30' : hasTeams ? 'border-border hover:border-accent/40 cursor-pointer' : 'border-border/40 opacity-50'} p-3 transition-all text-sm"
           data-ko-match="${match.id}" data-ko-home="${match.homeName || ''}" data-ko-away="${match.awayName || ''}">
        ${matchLabel ? `<div class="text-[9px] text-txt-muted mb-1.5 font-semibold uppercase tracking-wider">${matchLabel}</div>` : ''}
        <div class="flex items-center justify-between mb-1.5">
          <span class="${winner === match.homeName ? 'text-emerald-400 font-bold' : match.homeName ? 'text-white' : 'text-txt-muted'} truncate flex-1">${hFlag} ${hDisplay}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.hs}</span>` : ''}
        </div>
        <div class="flex items-center justify-between">
          <span class="${winner === match.awayName ? 'text-emerald-400 font-bold' : match.awayName ? 'text-white' : 'text-txt-muted'} truncate flex-1">${aFlag} ${aDisplay}</span>
          ${hasResult ? `<span class="font-display font-bold text-white mx-2">${res.as}</span>` : ''}
        </div>
      </div>
    `;
  }

  function formatSlotCode(code) {
    if (code.startsWith('3')) {
      const groups = code.slice(1).split('').join('/');
      return `3. aus ${groups}`;
    }
    const pos = code[0];
    const group = code.slice(1);
    return `${pos === '1' ? '1.' : '2.'} Gr. ${group}`;
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
