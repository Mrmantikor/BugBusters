(() => {
  const mobileMenu = document.querySelector('.js-menu');
  const openMenuBtn = document.querySelector('.js-menu');
  const closeMenuBtn = document.querySelector('.js-menu-close');
  const list = document.querySelector('.nav-list');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    const isOpen = !expanded;

    openMenuBtn.setAttribute('aria-expanded', isOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('is-open');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  list.addEventListener('click', e => {
    if (e.target.nodeName !== 'A') return;
    if (e.target.nodeName === 'A') {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
})();

//#region To-Top
const buttonToTop = document.querySelector('.scroll-to-top');

buttonToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => changeScrollButtonVisibility();

function changeScrollButtonVisibility() {
  const button = document.querySelector('.scroll-to-top');
  const offsetTrigger = 60;
  const pageOffset = window.scrollY;

  if (pageOffset > offsetTrigger) {
    button.classList.remove('js-transparent');
  } else {
    button.classList.add('js-transparent');
  }
}
//#endregion
const themeToggle = document.querySelector('#toggle-main');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.style.colorScheme = 'dark';
    themeToggle.checked = true;
  } else {
    body.style.colorScheme = 'light';
    themeToggle.checked = false;
  }

  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

themeToggle.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'dark' : 'light';
  setTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', loadTheme);
