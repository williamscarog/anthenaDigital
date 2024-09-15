// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Parallax effect
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.hero');
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Language switch
const langSwitch = document.querySelector('.lang-switch');
let isEnglish = true;
langSwitch.addEventListener('click', () => {
  isEnglish = !isEnglish;
  langSwitch.textContent = isEnglish ? 'EN' : 'ES';
  document.querySelectorAll('[data-es]').forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = isEnglish ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-es');
    } else {
      const originalText = el.textContent;
      el.textContent = isEnglish ? el.getAttribute('data-en') || originalText : el.getAttribute('data-es');
      el.setAttribute('data-en', originalText);
    }
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

mobileMenuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuToggle.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Adjust nav display on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = nav.classList.contains('active') ? 'flex' : 'none';
  }
});