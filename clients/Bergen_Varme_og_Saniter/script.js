// Rørtegningen starter når toppen av knappen den ender i er synlig, så poenget ikke skjer utenfor skjermen
const root = document.documentElement;
window.bvsDrawing = true;
const cta = document.querySelector('.hero-cta');

function startDrawing() {
  root.classList.remove('draw-wait');
  try { sessionStorage.setItem('bvs-intro', '1'); } catch (e) {}
}

if (root.classList.contains('draw-wait')) {
  if ('IntersectionObserver' in window && cta) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        io.disconnect();
        startDrawing();
      }
    }, { threshold: 0.25 });
    io.observe(cta);
  } else {
    startDrawing();
  }
}

// Meny på mobil
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('hovedmeny');
const desktop = window.matchMedia('(min-width: 860px)');

function isOpen() {
  return toggle.getAttribute('aria-expanded') === 'true';
}

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Lukk' : 'Meny';
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(!isOpen());
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

document.addEventListener('click', (e) => {
  if (isOpen() && !e.target.closest('.site-header')) setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isOpen()) {
    setMenu(false);
    toggle.focus();
  }
});

// Lukk menyen hvis vinduet blir bredt nok for desktopmenyen
desktop.addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

// Bestillingsskjema. Demoen sender ingenting.
const form = document.getElementById('order-form');
const status = document.getElementById('form-status');
const dateInput = document.getElementById('f-date');

// Tidligste dato er i dag, i lokal tid (sv-SE gir formatet ÅÅÅÅ-MM-DD som date-feltet krever)
dateInput.min = new Intl.DateTimeFormat('sv-SE').format(new Date());

const checks = [
  ['f-name', (el) => el.value.trim() !== ''],
  ['f-phone', (el) => el.value.replace(/\D/g, '').length >= 8],
  ['f-email', (el) => el.value.trim() === '' || el.validity.valid],
  ['f-message', (el) => el.value.trim() !== ''],
  ['f-date', (el) => el.value === '' || el.validity.valid],
];

function validate(id, test) {
  const el = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  const ok = test(el);
  el.setAttribute('aria-invalid', String(!ok));
  if (ok) el.removeAttribute('aria-describedby');
  else el.setAttribute('aria-describedby', error.id);
  error.hidden = ok;
  return ok;
}

checks.forEach(([id, test]) => {
  const el = document.getElementById(id);
  el.addEventListener('blur', () => {
    if (el.hasAttribute('aria-invalid')) validate(id, test);
  });
  el.addEventListener('input', () => {
    if (el.getAttribute('aria-invalid') === 'true') validate(id, test);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const results = checks.map(([id, test]) => validate(id, test));
  const firstInvalid = checks.find((_, i) => !results[i]);

  if (firstInvalid) {
    status.textContent = '';
    document.getElementById(firstInvalid[0]).focus();
    return;
  }

  status.textContent = 'Forespørselen er klar. Dette er en demo, så ingenting ble sendt.';
  form.reset();
  form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
});
