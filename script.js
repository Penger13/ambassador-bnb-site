// ========================================
// MOBILE MENU
// ========================================
(function() {
  const menuBtn = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  // Only run if the elements exist on the page
  if (!menuBtn || !closeMenu || !mobileMenu || !mobileBackdrop) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('open');
    mobileBackdrop.style.display = 'block';
  }

  function closeMenuFn() {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    setTimeout(() => { mobileBackdrop.style.display = 'none'; }, 300);
  }

  menuBtn.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuFn);
  mobileBackdrop.addEventListener('click', closeMenuFn);

  document.querySelectorAll('.mobile-nav-link, .mobile-book').forEach(link => {
    link.addEventListener('click', closeMenuFn);
  });
})();


// ========================================
// REVEAL ON SCROLL (for .reveal elements)
// ========================================
(function() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('visible'));
  }
})();


// ========================================
// REVIEW ROTATOR (only if .review-slide exists)
// ========================================
(function() {
  const slides = document.querySelectorAll('.review-slide');
  const dots = document.querySelectorAll('.review-dot');
  if (slides.length === 0 || dots.length === 0) return;

  let currentIndex = 0;
  let intervalId = null;

  function showSlide(index) {
    slides.forEach(slide => { slide.style.display = 'none'; });
    if (slides[index]) slides[index].style.display = 'block';
    dots.forEach((dot, i) => {
      dot.style.background = i === index ? 'var(--gold)' : 'var(--muted)';
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startRotation() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopRotation() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      stopRotation();
      showSlide(index);
      startRotation();
    });
  });

  // Pause on hover
  const container = document.querySelector('.review-slide')?.parentElement;
  if (container) {
    container.addEventListener('mouseenter', stopRotation);
    container.addEventListener('mouseleave', startRotation);
  }

  showSlide(0);
  startRotation();
})();