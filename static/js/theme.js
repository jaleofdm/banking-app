function toggleTheme() {
  const html = document.documentElement;
  html.classList.add('theme-transitioning');
  const current = html.dataset.theme || 'dark';
  html.dataset.theme = current === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', html.dataset.theme);
  setTimeout(function () {
    html.classList.remove('theme-transitioning');
  }, 250);
}
