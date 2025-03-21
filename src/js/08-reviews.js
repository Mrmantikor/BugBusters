import { register } from 'swiper/element/bundle';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

register();

const reviewsEl = document.querySelector('.swiper');

let swiper;

const reviewsFetch = async () => {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return [];
  }
};
const templateCard = card => {
  return `
    <li class="swiper-slide" id="slide">
        <p class="user-comment">${card.review}</p>
        <div class="user-info">
          <img class="user-photo" src="${card.avatar_url}" alt="User photo" width="40" height="40" loading="lazy"/>
          <h4 class="user-name">${card.author}</h4>
        </div>
    </li>`;
};

const initReviewsSwiper = async () => {
  const reviewsData = await reviewsFetch();

  if (!reviewsData.length) {
    reviewsEl.innerHTML = '<p>Not found</p>';
    iziToast.error({
      message: 'Reviews cannot be loaded at this time.',
      position: 'bottomRight',
    });
    return;
  }

  const reviewsListHTML = reviewsData.map(card => templateCard(card)).join('');
  reviewsEl.querySelector('.swiper-wrapper').innerHTML = reviewsListHTML;

  swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    slideToClickedSlide: true,
    speed: 800,
    keyboard: {
      enabled: true,
    },
    // effect: 'cube',
    // cubeEffect: {
    //   slideShadows: true,
    //   shadow: true,
    //   shadowOffset: 20,
    //   shadowOffset: 1,
    // },
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 20,
    //   stretch: 50,
    //   slideShadows: true,
    // },

    mousewheel: {
      enabled: true,
    },
    navigation: {
      nextEl: '.reviews-btn-right',
      prevEl: '.reviews-btn-left',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 12,
        // effect: 'cube',
        // cubeEffect: {
        //   slideShadows: true,
        //   shadow: true,
        //   shadowOffset: 20,
        //   shadowOffset: 1,
        // },
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      slideChange: () => {
        changeBtnState();
      },
    },
  });

  changeBtnState();
};

function changeBtnState() {
  if (!swiper) return;

  const nextBtn = document.querySelector('.reviews-btn-right');
  const prevBtn = document.querySelector('.reviews-btn-left');

  nextBtn.disabled = swiper.isEnd;
  prevBtn.disabled = swiper.isBeginning;

  const backIcon = document.querySelector('.js-btn-left');
  const nextIcon = document.querySelector('.js-btn-right');

  backIcon.style.transition = 'none';
  nextIcon.style.transition = 'none';

  if (swiper.isEnd) {
    nextIcon.style.stroke = '#e4e5e6';
    backIcon.style.stroke = '#292929';
  }
  if (swiper.isBeginning) {
    backIcon.style.stroke = '#e4e5e6';
    nextIcon.style.stroke = '#292929';
  }

  if (!swiper.isEnd && !swiper.isBeginning) {
    backIcon.style.stroke = '#292929';
    nextIcon.style.stroke = '#292929';
  }

  nextBtn.classList.toggle('disabled', swiper.isEnd);
  prevBtn.classList.toggle('disabled', swiper.isBeginning);
}

initReviewsSwiper();
