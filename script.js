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

// ========================================
// THEATRE GALLERY (Click-Based)
// ========================================
(function() {
  const slides = document.querySelectorAll('.theatre-slide');
  const prevBtn = document.querySelector('.theatre-prev');
  const nextBtn = document.querySelector('.theatre-next');
  const nameLabel = document.getElementById('theatre-name');
  const counterLabel = document.getElementById('theatre-counter');
  const dots = document.querySelectorAll('.theatre-dot');

  // Only run if the gallery exists on this page
  if (slides.length === 0 || !prevBtn || !nextBtn) return;

  let current = 0;

  function showSlide(index) {
    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    if (nameLabel) {
      nameLabel.textContent = slides[index].dataset.name || '';
    }
    if (counterLabel) {
      counterLabel.textContent = `${index + 1} / ${slides.length}`;
    }

    current = index;
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlide(current - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showSlide(current + 1);
  });

  // Click the image itself to advance
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('active')) {
        showSlide(current + 1);
      }
    });
  });

  // Dot click (if you enable dots)
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.index, 10));
    });
  });

  // Keyboard arrows for accessibility
  document.addEventListener('keydown', (e) => {
    // Only when the gallery is roughly in view — optional
    if (e.key === 'ArrowLeft') showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });

  // Initialize
  showSlide(0);
})();

// ========================================
// ROOM GALLERY ROTATOR (Click-Based)
// ========================================
(function() {
  const gallery = document.getElementById('roomGallery');
  if (!gallery) return;

  const slides = gallery.querySelectorAll('.room-gallery-slide');
  const prevBtn = document.getElementById('roomGalleryPrev');
  const nextBtn = document.getElementById('roomGalleryNext');
  const counter = document.getElementById('roomGalleryCounter');
  const dots = gallery.querySelectorAll('.room-gallery-dot');

  let current = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    if (counter) {
      counter.textContent = `${index + 1} / ${slides.length}`;
    }

    current = index;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(current - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(current + 1);
    });
  }

  // Click the image itself to advance
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('active')) showSlide(current + 1);
    });
  });

  // Dot click (if you have dots)
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(parseInt(dot.dataset.index, 10));
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });

  showSlide(0);
})();

// ========================================
// BREAKFAST GALLERY ROTATOR
// ========================================
(function() {
  const gallery = document.getElementById('breakfastGallery');
  if (!gallery) return;

  const slides = gallery.querySelectorAll('.room-gallery-slide');
  const prevBtn = document.getElementById('breakfastGalleryPrev');
  const nextBtn = document.getElementById('breakfastGalleryNext');
  const counter = document.getElementById('breakfastGalleryCounter');

  let current = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    if (counter) {
      counter.textContent = `${index + 1} / ${slides.length}`;
    }

    current = index;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(current - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(current + 1);
    });
  }

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('active')) showSlide(current + 1);
    });
  });

  showSlide(0);
})();