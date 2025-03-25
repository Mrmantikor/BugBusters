import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from '../img/sprite.svg';

import projectDesk03 from '/img/05-myproject/projects-desk-03-min.avif';
import projectDesk03_2x from '/img/05-myproject/projects-desk-03@2x-min.avif';
import projectMob03 from '/img/05-myproject/projects-mob-03-min.avif';
import projectMob03_2x from '/img/05-myproject/projects-mob-03@2x-min.avif';
import projectTabl03 from '/img/05-myproject/projects-tabl-03-min.avif';
import projectTabl03_2x from '/img/05-myproject/projects-tabl-03@2x-min.avif';

import projectDesk04 from '/img/05-myproject/projects-desk-04-min.avif';
import projectDesk04_2x from '/img/05-myproject/projects-desk-04@2x-min.avif';
import projectMob04 from '/img/05-myproject/projects-mob-04-min.avif';
import projectMob04_2x from '/img/05-myproject/projects-mob-04@2x-min.avif';
import projectTabl04 from '/img/05-myproject/projects-tabl-04-min.avif';
import projectTabl04_2x from '/img/05-myproject/projects-tabl-04@2x-min.avif';

import projectDesk05 from '/img/05-myproject/projects-desk-05-min.avif';
import projectDesk05_2x from '/img/05-myproject/projects-desk-05@2x-min.avif';
import projectMob05 from '/img/05-myproject/projects-mob-05-min.avif';
import projectMob05_2x from '/img/05-myproject/projects-mob-05@2x-min.avif';
import projectTabl05 from '/img/05-myproject/projects-tabl-05-min.avif';
import projectTabl05_2x from '/img/05-myproject/projects-tabl-05@2x-min.avif';

import projectDesk06 from '/img/05-myproject/projects-desk-06-min.avif';
import projectDesk06_2x from '/img/05-myproject/projects-desk-06@2x-min.avif';
import projectMob06 from '/img/05-myproject/projects-mob-06-min.avif';
import projectMob06_2x from '/img/05-myproject/projects-mob-06@2x-min.avif';
import projectTabl06 from '/img/05-myproject/projects-tabl-06-min.avif';
import projectTabl06_2x from '/img/05-myproject/projects-tabl-06@2x-min.avif';

import projectDesk07 from '/img/05-myproject/projects-desk-07-min.avif';
import projectDesk07_2x from '/img/05-myproject/projects-desk-07@2x-min.avif';
import projectMob07 from '/img/05-myproject/projects-mob-07-min.avif';
import projectMob07_2x from '/img/05-myproject/projects-mob-07@2x-min.avif';
import projectTabl07 from '/img/05-myproject/projects-tabl-07-min.avif';
import projectTabl07_2x from '/img/05-myproject/projects-tabl-07@2x-min.avif';

import projectDesk08 from '/img/05-myproject/projects-desk-08-min.avif';
import projectDesk08_2x from '/img/05-myproject/projects-desk-08@2x-min.avif';
import projectMob08 from '/img/05-myproject/projects-mob-08-min.avif';
import projectMob08_2x from '/img/05-myproject/projects-mob-08@2x-min.avif';
import projectTabl08 from '/img/05-myproject/projects-tabl-08-min.avif';
import projectTabl08_2x from '/img/05-myproject/projects-tabl-08@2x-min.avif';

import projectDesk09 from '/img/05-myproject/projects-desk-09-min.avif';
import projectDesk09_2x from '/img/05-myproject/projects-desk-09@2x-min.avif';
import projectMob09 from '/img/05-myproject/projects-mob-09-min.avif';
import projectMob09_2x from '/img/05-myproject/projects-mob-09@2x-min.avif';
import projectTabl09 from '/img/05-myproject/projects-tabl-09-min.avif';
import projectTabl09_2x from '/img/05-myproject/projects-tabl-09@2x-min.avif';

const images = [
  {
    alt: 'Mimino website',
    img: projectDesk03,
    sources: {
      mobile: {
        '1x': projectMob03,
        '2x': projectMob03_2x,
      },
      tablet: {
        '1x': projectTabl03,
        '2x': projectTabl03_2x,
      },
      desktop: {
        '1x': projectDesk03,
        '2x': projectDesk03_2x,
      },
    },
  },
  {
    alt: 'Vyshyvanka vibes Landing Page',
    img: projectDesk04,
    sources: {
      mobile: {
        '1x': projectMob04,
        '2x': projectMob04_2x,
      },
      tablet: {
        '1x': projectTabl04,
        '2x': projectTabl04_2x,
      },
      desktop: {
        '1x': projectDesk04,
        '2x': projectDesk04_2x,
      },
    },
  },
  {
    alt: 'Power pulse webservice',
    img: projectDesk05,
    sources: {
      mobile: {
        '1x': projectMob05,
        '2x': projectMob05_2x,
      },
      tablet: {
        '1x': projectTabl05,
        '2x': projectTabl05_2x,
      },
      desktop: {
        '1x': projectDesk05,
        '2x': projectDesk05_2x,
      },
    },
  },
  {
    alt: 'Chego jewelry website',
    img: projectDesk06,
    sources: {
      mobile: {
        '1x': projectMob06,
        '2x': projectMob06_2x,
      },
      tablet: {
        '1x': projectTabl06,
        '2x': projectTabl06_2x,
      },
      desktop: {
        '1x': projectDesk06,
        '2x': projectDesk06_2x,
      },
    },
  },
  {
    alt: 'Energy flow webservice ',
    img: projectDesk07,
    sources: {
      mobile: {
        '1x': projectMob07,
        '2x': projectMob07_2x,
      },
      tablet: {
        '1x': projectTabl07,
        '2x': projectTabl07_2x,
      },
      desktop: {
        '1x': projectDesk07,
        '2x': projectDesk07_2x,
      },
    },
  },
  {
    alt: 'Starlight studio landing page',
    img: projectDesk08,
    sources: {
      mobile: {
        '1x': projectMob08,
        '2x': projectMob08_2x,
      },
      tablet: {
        '1x': projectTabl08,
        '2x': projectTabl08_2x,
      },
      desktop: {
        '1x': projectDesk08,
        '2x': projectDesk08_2x,
      },
    },
  },
  {
    alt: 'Fruitbox online store',
    img: projectDesk09,
    sources: {
      mobile: {
        '1x': projectMob09,
        '2x': projectMob09_2x,
      },
      tablet: {
        '1x': projectTabl09,
        '2x': projectTabl09_2x,
      },
      desktop: {
        '1x': projectDesk09,
        '2x': projectDesk09_2x,
      },
    },
  },
];

const listProjects = document.querySelector('.projects-list_img');
const loadMoreButton = document.querySelector('.projects-button_loading');
const boxLoader = document.querySelector('.box-loader');

let loadedProjectsCount = 0;
let previousCount = 3;

loadMoreButton.addEventListener('click', loadProjects);

function loadProjects() {
  try {
    toggleButton(loadMoreButton, false);
    toggleSpinner(true);

    const batchSize = 3;
    const remainingProjects = images.slice(
      loadedProjectsCount,
      loadedProjectsCount + batchSize
    );

    listProjects.insertAdjacentHTML(
      'beforeend',
      createMarkupProjects(remainingProjects)
    );

    loadedProjectsCount += remainingProjects.length;

    scrollOnLoad();

    toggleButton(loadMoreButton, true);

    if (loadedProjectsCount >= images.length) {
      toggleButton(loadMoreButton, false);
    }
  } catch (error) {
    showMessage('❌ Sorry, there was a server error. Please try again later!');
  } finally {
    toggleSpinner(false);
  }
}

function createMarkupProjects(images) {
  return images
    .map(
      ({ alt, img, sources: { mobile, tablet, desktop } }) => `
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${mobile['1x']} 1x, ${mobile['2x']} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${tablet['1x']} 1x, ${tablet['2x']} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${desktop['1x']} 1x, ${desktop['2x']} 2x"
          />
          <img
            class="projects-img"
            src="${img}"
            alt="${alt}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${alt}</h3>
            <a
              href="https://lika060.github.io/BugBusters-project/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="${icon}#icon-arrow"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`
    )
    .join('');
}

function scrollOnLoad() {
  const cards = document.querySelectorAll('.projects-list_img > li');

  const firstNewCard = cards[previousCount];
  if (firstNewCard) {
    firstNewCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  previousCount += 3;
}

function toggleButton(button, isVisible) {
  button.style.display = isVisible ? 'block' : 'none';
}

function toggleSpinner(isVisible) {
  boxLoader.style.display = isVisible ? 'block' : 'none';
}

function showMessage(message) {
  iziToast.show({
    message,
    color: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}
