import data from '/data.json';
import projSvg from '/img/sprite.svg';

const projectSection = document.querySelector('.project-list');
const btnLoadMore = document.querySelector('.load-more');

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let count = 3;

function createProjectItem({ image, name }) {
  return `
    <li class='not-visible '>
      <picture>
        <source srcset="${image['1x']} 1x, ${image['2x']} 2x" />
        <img class='project-img' src="${image['1x']}"  alt="${name}" loading="lazy" />
      </picture>
      <p class="item-subtext">React, JavaScript, Node JS, Git</p>
      <div class="container-txt-btn">
        <p class="item-text">${name}</p>
        <div class='project-icon-div'>
        <a class="item-btn-grey" href="https://github.com/Lika060/BugBusters-project" target="_blank">
          <span class='visit'>VISIT</span>
          <svg class="btn-grey-icon" width="24" height="24">
            <use href="${projSvg}#icon-icon"></use>
          </svg>
        </a>
        </div>
      </div>
    </li>
  `;
}

function renderProjects(first = 0, last = 2) {
  if (!projectSection) return;

  const projectsHtml = data.projects
    .slice(first, last + 1)
    .map(createProjectItem)
    .join('');

  projectSection.insertAdjacentHTML('beforeend', projectsHtml);
  animateAppearance();
}

function animateAppearance() {
  if (!projectSection) return;

  const items = projectSection.querySelectorAll('.not-visible');
  if (!items || items.length === 0) return;

  items.forEach((elm, i) => {
    setTimeout(() => elm.classList.add('visible'), i * 50);
  });
}
function addProjects() {
  if (!btnLoadMore || !data.projects || data.projects.length === 0) return;

  const nextCount = count + 3;
  const lastIndex = Math.min(nextCount - 1, data.projects.length - 1);

  renderProjects(count, lastIndex);
  count = nextCount;

  if (count >= data.projects.length) {
    btnLoadMore.classList.add('is-hidden');
    btnLoadMore.removeEventListener('click', addProjects);
  }
  window.scrollBy({
    top: 500,
    behavior: 'smooth',
  });
}

if (btnLoadMore) {
  btnLoadMore.addEventListener('click', addProjects);
}

if (data && data.projects && data.projects.length > 0) {
  renderProjects(0, 2);
} else {
  console.error('Data is missing or projects array is empty');
}
