const routes = {};
let currentView = null;

export function registerRoute(hash, renderFn) {
  routes[hash] = renderFn;
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

export function initRouter(defaultHash = '#/simulator') {
  const handleRoute = () => {
    const hash = window.location.hash || defaultHash;
    const basePath = hash.split('/').slice(0, 2).join('/');
    const param = hash.split('/').slice(2).join('/') || null;

    const renderFn = routes[basePath];
    if (renderFn) {
      if (currentView && currentView.destroy) currentView.destroy();
      currentView = renderFn(param);
      updateActiveTab(basePath);
    } else {
      window.location.hash = defaultHash;
    }
  };

  window.addEventListener('hashchange', handleRoute);
  if (!window.location.hash) window.location.hash = defaultHash;
  handleRoute();
}

function updateActiveTab(activeHash) {
  document.querySelectorAll('[data-tab]').forEach(el => {
    const isActive = el.dataset.tab === activeHash;
    el.classList.toggle('tab-active', isActive);
    el.classList.toggle('text-white', isActive);
    el.classList.toggle('text-txt-dim', !isActive);
  });
}
