export function renderReviews(reviews) {
  return reviews
    .map(({ _id, author, avatar_url, review }) => {
      return `
        <li class="reviews-item swiper-slide">
          <p class="reviews-item-text">${review}</p>
          <div class="reviews-item-content">
            <img class="reviews-item-content-img" src="${avatar_url}" alt="${author}" loading="lazy" width="40" height="40">
            <p class="reviews-item-content-name">${author}</p>
          </div>
        </li>
      `;
    })
    .join('');
}

export function renderError() {
  return '<li class="reviews-item"><p>Not found</p></li>';
}
