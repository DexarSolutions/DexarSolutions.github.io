// Mobile navigation toggle
const navToggleButtons = document.querySelectorAll('.nav-toggle');
navToggleButtons.forEach(btn => {
  const nav = btn.closest('.header-container')?.querySelector('nav');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (nav) nav.classList.toggle('open');
  });
});

// Close nav when clicking outside (mobile)
document.addEventListener('click', (e) => {
  const target = e.target;
  const openNav = document.querySelector('nav.open');
  const toggle = document.querySelector('.nav-toggle[aria-expanded="true"]');
  if (openNav && toggle) {
    if (!openNav.contains(target) && !toggle.contains(target)) {
      openNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
});
