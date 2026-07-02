// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll state
const header = document.getElementById('site-header');
const totop = document.getElementById('totop');
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  totop.classList.toggle('show', y > 600);
};
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Mobile menu
const hamburger = document.getElementById('hamburger');
const closeMenu = () => { document.body.classList.remove('menu-open'); hamburger.setAttribute('aria-expanded','false'); };
hamburger.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.nav-close').forEach(a => a.addEventListener('click', closeMenu));

// Back to top
totop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const a = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.14, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
