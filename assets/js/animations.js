/**
 * AALAYA LUXE - ANIMATION & MOTION ENGINE
 * GSAP, ScrollTrigger, Hero Transitions, Parallax & Swiper Initializers
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroRotator();
  initSwipers();
  initScrollAnimations();
});

// Cinematic Hero Background & Content Slide Transition
function initHeroRotator() {
  const slides = document.querySelectorAll('.hero-slide-item');
  if (slides.length <= 1) return;

  let currentSlide = 0;
  const intervalTime = 6000; // 6 seconds per editorial campaign

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, intervalTime);
}

// Swiper Sliders for Categories & Trending Products
function initSwipers() {
  if (typeof Swiper === 'undefined') return;

  // Category Showcase Swiper
  if (document.querySelector('.category-swiper')) {
    new Swiper('.category-swiper', {
      slidesPerView: 1.25,
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: '.cat-swiper-next',
        prevEl: '.cat-swiper-prev',
      },
      breakpoints: {
        576: { slidesPerView: 2.25, spaceBetween: 20 },
        768: { slidesPerView: 3.25, spaceBetween: 24 },
        1024: { slidesPerView: 4.25, spaceBetween: 28 },
        1400: { slidesPerView: 5.25, spaceBetween: 30 }
      }
    });
  }

  // Trending Products Swiper
  if (document.querySelector('.trending-swiper')) {
    new Swiper('.trending-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: '.trending-swiper-next',
        prevEl: '.trending-swiper-prev',
      },
      breakpoints: {
        576: { slidesPerView: 2.2, spaceBetween: 20 },
        992: { slidesPerView: 3.2, spaceBetween: 24 },
        1200: { slidesPerView: 4, spaceBetween: 28 }
      }
    });
  }

  // Testimonial Editorial Swiper
  if (document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      }
    });
  }
}

// Scroll Reveals & GSAP Enhancements
function initScrollAnimations() {
  // If GSAP and ScrollTrigger are present
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Fade up reveals on sections
      gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Split editorial image parallax
      gsap.utils.toArray('.split-main-image-frame img').forEach(img => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          },
          yPercent: 10,
          ease: 'none'
        });
      });
    }
  }

  // Fallback / Intersection Observer for smooth reveal if GSAP isn't active
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
