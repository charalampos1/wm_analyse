import { dom } from './dom.js';
import { marked } from 'marked';

export function showToast(message, type = 'error') {
  const colors = {
    error: 'bg-red-500/90 border-red-400/30',
    success: 'bg-emerald-500/90 border-emerald-400/30',
    info: 'bg-sky-500/90 border-sky-400/30',
  };
  const toast = document.createElement('div');
  toast.className = `pointer-events-auto px-5 py-3 rounded-xl border ${colors[type] || colors.info} text-white text-sm font-medium shadow-2xl backdrop-blur-sm toast-enter`;
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

export function setLoading(loading) {
  dom.startBtn.disabled = loading;
  if (loading) {
    dom.btnIconPlay.classList.add('hidden');
    dom.btnSpinner.classList.remove('hidden');
    dom.btnText.textContent = 'Generiere...';
    dom.loadingSection.classList.remove('hidden');
    dom.outputSection.classList.add('hidden');
    dom.errorSection.classList.add('hidden');
  } else {
    dom.btnIconPlay.classList.remove('hidden');
    dom.btnSpinner.classList.add('hidden');
    dom.loadingSection.classList.add('hidden');
  }
}

export function showReport(markdown, match, venues, teams, isMatchPlayed) {
  const hFlag = teams[match.h]?.flag || '';
  const aFlag = teams[match.a]?.flag || '';
  const venue = venues[match.v];

  dom.reportTitle.textContent = `${hFlag} ${match.h} vs. ${match.a} ${aFlag}`;
  dom.reportMeta.textContent = `Gruppe ${match.g} · Spieltag ${match.md} · ${venue.name}, ${venue.city} · ${isMatchPlayed ? 'Spielbericht' : 'Spielprognose'}`;

  dom.reportContent.innerHTML = marked.parse(markdown);
  dom.errorSection.classList.add('hidden');
  dom.loadingSection.classList.add('hidden');
  dom.outputSection.classList.remove('hidden');
  dom.outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function showError(message) {
  dom.errorMessage.textContent = message;
  dom.errorSection.classList.remove('hidden');
  dom.outputSection.classList.add('hidden');
  dom.loadingSection.classList.add('hidden');
}
