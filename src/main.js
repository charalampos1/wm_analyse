import { store } from './state/store.js';
import { showToast } from './ui/components.js';
import { registerRoute, initRouter } from './router.js';
import { renderSimulator } from './ui/views/simulator.js';
import { renderGroups } from './ui/views/groups.js';
import { renderTeams } from './ui/views/teams.js';
import { renderKnockout } from './ui/views/knockout.js';
import { renderStats } from './ui/views/stats.js';

function updateLiveStatus(loading = false) {
  const statusEl = document.getElementById('live-status');
  if (!statusEl) return;

  if (loading) {
    statusEl.innerHTML = `
      <div class="w-3 h-3 rounded-full spinner-ring animate-spin"></div>
      <span class="hidden sm:inline text-txt-muted">Lade Live-Daten…</span>
    `;
    return;
  }

  if (store.liveDataLoaded) {
    const liveCount = store.matches.filter(m => m.liveState === 'live').length;
    const playedCount = store.matches.filter(m => m.liveState === 'completed').length;
    
    if (liveCount > 0) {
      statusEl.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
        <span class="hidden sm:inline text-red-400 font-semibold">${liveCount} LIVE</span>
      `;
    } else {
      statusEl.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span class="hidden sm:inline text-emerald-400">${playedCount} Spiele geladen</span>
      `;
    }
  } else if (store.liveDataError) {
    statusEl.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      <span class="hidden sm:inline text-amber-400">Offline-Modus</span>
    `;
  }
}

async function loadLiveDataAndRefresh() {
  updateLiveStatus(true);

  const refreshIcon = document.getElementById('refresh-icon');
  if (refreshIcon) refreshIcon.classList.add('animate-spin');

  const success = await store.refreshLiveData();
  
  if (refreshIcon) refreshIcon.classList.remove('animate-spin');
  updateLiveStatus();

  if (success) {
    showToast('Live-Daten aktualisiert!', 'success');
    // Re-trigger current route to refresh the view
    const hash = window.location.hash || '#/simulator';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else {
    showToast('Live-Daten konnten nicht geladen werden.', 'error');
  }
}

async function init() {
  store.init();

  // Settings Modal Events (global, always in DOM)
  document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('api-key-input').value = store.apiKey;
    document.getElementById('settings-modal').classList.remove('hidden');
  });

  document.getElementById('settings-close').addEventListener('click', () => {
    document.getElementById('settings-modal').classList.add('hidden');
  });

  document.getElementById('api-key-save').addEventListener('click', () => {
    const key = document.getElementById('api-key-input').value.trim();
    store.setApiKey(key);
    document.getElementById('settings-modal').classList.add('hidden');
    showToast('API-Key gespeichert!', 'success');
  });

  // Refresh button
  document.getElementById('refresh-btn').addEventListener('click', () => {
    loadLiveDataAndRefresh();
  });

  // Register routes
  registerRoute('#/simulator', () => renderSimulator());
  registerRoute('#/gruppen', () => renderGroups());
  registerRoute('#/teams', (param) => renderTeams(param));
  registerRoute('#/ko-runde', () => renderKnockout());
  registerRoute('#/statistiken', () => renderStats());

  // Tab navigation
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const hash = btn.dataset.tab;
      window.location.hash = hash;
    });
  });

  // Load live data before starting the router
  updateLiveStatus(true);
  await store.loadLiveData();
  updateLiveStatus();

  // Start router
  initRouter('#/simulator');
}

document.addEventListener('DOMContentLoaded', init);
