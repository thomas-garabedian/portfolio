
const html = document.documentElement;
function isDirectHomeEntry() {
  const path = window.location.pathname;
  const isHome = path.endsWith('/') || path.endsWith('/index.html');
  if (!isHome) return false;
  if (!document.referrer) return true;
  try {
    const referrer = new URL(document.referrer);
    return referrer.origin !== window.location.origin;
  } catch {
    return true;
  }
}

const forceDefaultLanding = isDirectHomeEntry();
if (forceDefaultLanding) {
  localStorage.setItem('site-lang', 'fr');
}

const saved = localStorage.getItem('site-lang');
function setLang(lang){
  const value = lang === 'en' ? 'en' : 'fr';
  html.setAttribute('data-lang', value);
  html.lang = value;
  document.querySelectorAll('[data-lang-button]').forEach(btn => {
    const active = btn.dataset.langButton === value;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  document.querySelectorAll('[data-href-fr][data-href-en]').forEach(link => {
    link.href = link.dataset[value === 'en' ? 'hrefEn' : 'hrefFr'];
  });
  localStorage.setItem('site-lang', value);
}
setLang(saved || 'fr');
document.querySelectorAll('[data-lang-button]').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.langButton)));

const nav = document.querySelector('.nav-links');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); });
const year = document.querySelector('[data-year]'); if (year) year.textContent = new Date().getFullYear();


// v14: enlarge project visuals on click
(() => {
  const images = Array.from(document.querySelectorAll('.evidence img'));
  if (!images.length) return;
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '<button type="button" aria-label="Fermer">×</button><img alt="">';
  document.body.appendChild(lightbox);
  const large = lightbox.querySelector('img');
  const close = lightbox.querySelector('button');
  function openImage(img) {
    large.src = img.src;
    large.alt = img.alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }
  function closeImage() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    large.removeAttribute('src');
  }
  images.forEach((img) => {
    img.setAttribute('data-zoomable', 'true');
    img.setAttribute('tabindex', '0');
    img.addEventListener('click', () => openImage(img));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openImage(img); }
    });
  });
  close.addEventListener('click', closeImage);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeImage(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeImage(); });
})();
