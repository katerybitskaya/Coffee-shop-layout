  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  const burger = document.getElementById('burger');
  const sideMenu = document.getElementById('sideMenu');
  function toggleMenu(open) {
    burger.classList.toggle('open', open);
    sideMenu.classList.toggle('open', open);
    sideMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => toggleMenu(!sideMenu.classList.contains('open')));
  burger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(!sideMenu.classList.contains('open')); });
  document.querySelectorAll('.close-menu').forEach(link => link.addEventListener('click', () => toggleMenu(false)));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));