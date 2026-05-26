// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => obs.observe(r));

// Nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.padding = '0.55rem 0';
    nav.style.boxShadow = '0 4px 20px rgba(61, 40, 23, 0.08)';
  } else {
    nav.style.padding = '1rem 0';
    nav.style.boxShadow = 'none';
  }
});
