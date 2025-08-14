// assets/js/main.js
// Общие скрипты сайта: бургер-меню, якоря, контактная форма, тост.
const burgerButton = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
if (burgerButton && navLinks) {
  burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burgerButton.classList.toggle('open');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href') || '';
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
      navLinks?.classList.remove('open');
      burgerButton?.classList.remove('open');
    }
  });
});
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = /** @type {HTMLInputElement} */(document.getElementById('email'))?.value || '';
    const tg = /** @type {HTMLInputElement} */(document.getElementById('tg'))?.value || '';
    const consent = /** @type {HTMLInputElement} */(document.getElementById('consent'))?.checked ?? true;

    const leadsRaw = localStorage.getItem('cc_leads') || '[]';
    /** @type {{email: string, tg?: string, consent?: boolean, ts: number}[]} */
    const leads = JSON.parse(leadsRaw);
    leads.push({ email, tg, consent, ts: Date.now() });
    localStorage.setItem('cc_leads', JSON.stringify(leads));

    showToast('Спасибо! Мы на связи.');
    contactForm.reset();
  });
}
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}
function showToast(message) {
  const t = document.createElement('div');
  t.textContent = message;
  t.style.position = 'fixed';
  t.style.bottom = '24px';
  t.style.left = '50%';
  t.style.transform = 'translateX(-50%)';
  t.style.padding = '12px 18px';
  t.style.background = 'rgba(0,0,0,.8)';
  t.style.color = '#fff';
  t.style.border = '1px solid rgba(255,255,255,.15)';
  t.style.borderRadius = '12px';
  t.style.zIndex = '9999';
  t.style.boxShadow = '0 10px 18px rgba(0,0,0,.4)';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}