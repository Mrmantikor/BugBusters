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
        <a class="item-btn-grey" href="https:/github.com/Lika060/BugBusters-project" target="_blank">
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

import project1x1 from '../img/myproject/1.webp';
import project1x2 from '../img/myproject/1@2x.webp';
import project2x1 from '../img/myproject/2.webp';
import project2x2 from '../img/myproject/2@2x.webp';
import project3x1 from '../img/myproject/3.webp';
import project3x2 from '../img/myproject/3@2x.webp';
import project4x1 from '../img/myproject/4.webp';
import project4x2 from '../img/myproject/4@2x.webp';
import project5x1 from '../img/myproject/5.webp';
import project5x2 from '../img/myproject/5@2x.webp';
import project6x1 from '../img/myproject/6.webp';
import project6x2 from '../img/myproject/6@2x.webp';
import project7x1 from '../img/myproject/7.webp';
import project7x2 from '../img/myproject/7@2x.webp';
import project8x1 from '../img/myproject/8.webp';
import project8x2 from '../img/myproject/8@2x.webp';
import project9x1 from '../img/myproject/9.webp';
import project9x2 from '../img/myproject/9@2x.webp';
import project10x1 from '../img/myproject/10.webp';
import project10x2 from '../img/myproject/10@2x.webp';

const projects = [
    { name: 'wallet webservice', image: { '1x': project1x1, '2x': project1x2 } },
    { name: 'Green harvest webservice', image: { '1x': project2x1, '2x': project2x2 } },
    { name: 'English Exellence webservice', image: { '1x': project3x1, '2x': project3x2 } },
    { name: 'starlight studio landing page', image: { '1x': project4x1, '2x': project4x2 } },
    { name: 'energy flow webservice', image: { '1x': project5x1, '2x': project5x2 } },
    { name: 'fruitbox online store', image: { '1x': project6x1, '2x': project6x2 } },
    { name: 'chego jewelry website', image: { '1x': project7x1, '2x': project7x2 } },
    { name: 'Mimino website', image: { '1x': project8x1, '2x': project8x2 } },
    { name: 'vyshyvanka vibes Landing Page', image: { '1x': project9x1, '2x': project9x2 } },
    { name: 'power pulse webservice', image: { '1x': project10x1, '2x': project10x2 } },
];

// Приклад рендерингу
const projectList = document.querySelector('.project-list'); // Замініть на ваш селектор
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `
        <img src="${project.image['1x']}" srcset="${project.image['1x']} 1x, ${project.image['2x']} 2x" alt="${project.name}">
        <p>${project.name}</p>
    `;
    projectList.appendChild(projectItem);
});