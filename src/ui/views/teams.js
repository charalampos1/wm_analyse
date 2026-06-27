import { store } from '../../state/store.js';
import { navigateTo } from '../../router.js';

export function renderTeams(param) {
  const container = document.getElementById('app-content');

  if (param) {
    const teamName = decodeURIComponent(param);
    return renderTeamDetail(container, teamName);
  }

  // Teams grid
  container.innerHTML = `
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">WM-Teilnehmer</h2>
      <p class="text-txt-dim text-sm">Alle 48 Nationalmannschaften der FIFA WM 2026.</p>
    </section>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3" id="teams-grid"></div>
  `;

  const grid = document.getElementById('teams-grid');
  const sorted = Object.keys(store.teams).sort((a, b) => a.localeCompare(b, 'de'));

  sorted.forEach(name => {
    const team = store.teams[name];
    const card = document.createElement('div');
    card.className = 'card p-3 text-center cursor-pointer hover:border-accent/40 transition-all group';
    card.innerHTML = `
      <div class="text-3xl mb-2">${team.flag}</div>
      <div class="font-display font-bold text-sm text-white group-hover:text-accent transition-colors truncate">${name}</div>
      <div class="text-[10px] text-txt-muted mt-0.5">Gruppe ${team.group}</div>
    `;
    card.addEventListener('click', () => navigateTo(`#/teams/${encodeURIComponent(name)}`));
    grid.appendChild(card);
  });

  return { destroy() { container.innerHTML = ''; } };
}

function renderTeamDetail(container, teamName) {
  const team = store.teams[teamName];
  if (!team) {
    container.innerHTML = `<div class="card p-8 text-center"><p class="text-txt-dim">Team nicht gefunden.</p></div>`;
    return { destroy() { container.innerHTML = ''; } };
  }

  const standings = store.getGroupStandings(team.group);
  const teamPos = standings.findIndex(s => s.team === teamName) + 1;

  const teamMatches = store.matches.filter(m => m.h === teamName || m.a === teamName);
  const playedMatches = teamMatches.filter(m => store.isMatchPlayed(m));

  container.innerHTML = `
    <!-- Back button -->
    <button id="team-back" class="flex items-center gap-2 text-txt-dim hover:text-white text-sm mb-6 transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Alle Teams
    </button>

    <!-- Team Header -->
    <section class="card p-6 sm:p-8 mb-6 card-slide">
      <div class="flex flex-col sm:flex-row items-center gap-5">
        <div class="text-6xl">${team.flag}</div>
        <div class="text-center sm:text-left flex-1">
          <h2 class="font-display text-3xl font-black text-white">${teamName}</h2>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
            <span class="px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-[11px] font-bold uppercase border border-gold/20">Gruppe ${team.group}</span>
            <span class="px-2.5 py-0.5 rounded-md bg-sky/10 text-sky text-[11px] font-bold uppercase border border-sky/20">Platz ${teamPos}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Trainer</div>
          <div class="text-sm font-semibold text-white">${team.coach}</div>
        </div>
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">System</div>
          <div class="text-sm font-semibold text-white">${team.system}</div>
        </div>
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Spiele</div>
          <div class="text-sm font-semibold text-white">${playedMatches.length} / ${teamMatches.length}</div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Tactic & Squad -->
      <div>
        <!-- Taktik -->
        <section class="card p-5 mb-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Spielweise
          </h3>
          <p class="text-sm text-txt-dim leading-relaxed">${team.info}</p>
        </section>

        <!-- Kader -->
        <section class="card p-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Schlüsselspieler
          </h3>
          <div class="space-y-1.5">
            ${team.squad.map(p => {
              const posColor = p.pos === 'TW' ? 'text-gold' : p.pos === 'ANG' ? 'text-accent' : p.pos === 'MF' ? 'text-sky' : 'text-emerald-400';
              return `
                <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2 border border-border text-sm">
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${posColor} bg-white/5 border border-white/5 w-10 text-center">${p.pos}</span>
                  <span class="text-white font-medium">${p.name}</span>
                </div>`;
            }).join('')}
          </div>
        </section>
      </div>

      <!-- Results & Group Table -->
      <div>
        <!-- Ergebnisse -->
        <section class="card p-5 mb-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            Turnierverlauf
          </h3>
          ${teamMatches.length === 0 ? '<p class="text-sm text-txt-muted">Keine Spiele.</p>' :
            teamMatches.sort((a, b) => a.md - b.md).map(m => {
              const isHome = m.h === teamName;
              const opponent = isHome ? m.a : m.h;
              const oppFlag = store.teams[opponent]?.flag || '';
              const played = store.isMatchPlayed(m);

              if (played) {
                const ownGoals = isHome ? m.hs : m.as;
                const oppGoals = isHome ? m.as : m.hs;
                const result = ownGoals > oppGoals ? 'S' : ownGoals < oppGoals ? 'N' : 'U';
                const resultColor = result === 'S' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' : result === 'N' ? 'bg-accent/20 text-accent border-accent/20' : 'bg-txt-muted/20 text-txt-dim border-txt-muted/20';
                return `
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border text-sm mb-1.5">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${resultColor} border w-6 text-center">${result}</span>
                    <span class="text-white font-bold">${ownGoals}:${oppGoals}</span>
                    <span class="text-txt-dim">vs.</span>
                    <span class="text-white">${oppFlag} ${opponent}</span>
                    <span class="ml-auto text-[10px] text-txt-muted">ST ${m.md}</span>
                  </div>`;
              } else {
                return `
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border/50 text-sm mb-1.5 opacity-60">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 text-txt-muted border border-white/5 w-6 text-center">–</span>
                    <span class="text-txt-muted">vs.</span>
                    <span class="text-txt-dim">${oppFlag} ${opponent}</span>
                    <span class="ml-auto text-[10px] text-txt-muted">ST ${m.md}</span>
                  </div>`;
              }
            }).join('')}
        </section>

        <!-- Mini-Gruppentabelle -->
        <section class="card p-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Gruppe ${team.group}
          </h3>
          <table class="w-full text-[13px]">
            <thead><tr class="text-txt-muted text-[10px] uppercase tracking-wider">
              <th class="text-left pb-2">#</th><th class="text-left pb-2">Team</th>
              <th class="text-center pb-2">Sp</th><th class="text-center pb-2">Tore</th><th class="text-center pb-2">TD</th><th class="text-center pb-2 text-gold">Pkt</th>
            </tr></thead>
            <tbody>
              ${standings.map((s, i) => {
                const flag = store.teams[s.team]?.flag || '';
                const isCurrent = s.team === teamName;
                return `<tr class="${isCurrent ? 'bg-accent/5 border-l-2 border-accent' : ''}">
                  <td class="py-1 text-txt-muted text-xs">${i+1}</td>
                  <td class="py-1 ${isCurrent ? 'text-accent font-bold' : 'text-white'}">${flag} ${s.team}</td>
                  <td class="py-1 text-center text-txt-dim">${s.p}</td>
                  <td class="py-1 text-center text-txt-dim">${s.gf}:${s.ga}</td>
                  <td class="py-1 text-center ${s.gd > 0 ? 'text-emerald-400' : s.gd < 0 ? 'text-accent' : 'text-txt-dim'}">${s.gd > 0 ? '+' : ''}${s.gd}</td>
                  <td class="py-1 text-center font-bold text-gold">${s.pts}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  `;

  document.getElementById('team-back').addEventListener('click', () => navigateTo('#/teams'));

  return { destroy() { container.innerHTML = ''; } };
}
