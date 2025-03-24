import iziToast from 'izitoast';
import axios from 'axios';

const form = document.querySelector(`#work-together-form`);
const modalOverlay = document.querySelector(`#work-together-modal-window`);
const { email, message, button } = form.elements;

form.addEventListener(`submit`, clickHandler);
email.addEventListener(`input`, validator);

function validator() {
  if (email.validity.valid) {
    email.textContent = '✔';
    email.classList.add('valid');
  }
}
function isInputValid(form) {
  const { email, message } = form.elements;
  return email.value.trim() && message.value.trim() ? true : false;
}

function onSucsessResponse(response) {
  document.body.classList.add(`modal-open`);
  modalOverlay.classList.remove(`visually-hidden`);
}

async function sendQuerry(form) {
  const { email, message } = form.elements;
  const querry = {
    email: email.value.trim(),
    comment: message.value.trim(),
  };
  const url = `https://portfolio-js.b.goit.study/api/requests`;
  const response = await axios
    .post(url, querry)
    .then(response => response.data)
    .then(response => onSucsessResponse(response))
    .catch(reject => {
      reject.response.data
        ? iziToast.error(reject.response.data)
        : iziToast.error(reject);
    });
  return response;
}

async function onSucsessInput(form) {
  const { email, message } = form.elements;
  await sendQuerry(form).then(response => {});
}
function clickHandler(event) {
  event.preventDefault();
  isInputValid(form)
    ? onSucsessInput(form)
    : iziToast.warning({ message: `Error` });
}

//google maps

let mapLoaded = false;
let mapVisible = false;
let map;
const mapDiv = document.createElement('div');
mapDiv.id = 'map';

function moveMap() {
  const isDesktop = window.innerWidth >= 1280;
  const target = document.getElementById(
    isDesktop ? 'map-desktop' : 'map-mobile'
  );

  let wrapper = target.querySelector('.map-wrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'map-wrapper';
    target.appendChild(wrapper);
  }

  if (!wrapper.contains(mapDiv)) {
    wrapper.innerHTML = '';
    wrapper.appendChild(mapDiv);
  }

  return wrapper;
}
async function loadMapStyle(theme) {
  const response = await fetch(`styles/map-${theme}.json`);
  return await response.json();
}

window.initMap = async function () {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = isDark ? 'dark' : 'light';
  const mapStyle = await loadMapStyle(theme);

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.61589475533107, lng: -74.0637538196986 },
    zoom: 12,
    styles: mapStyle,
  });

  new google.maps.Marker({
    position: { lat: 40.61589475533107, lng: -74.0637538196986 },
    map,
    title: 'I am here!',
  });

  mapLoaded = true;
};

document.getElementById('show-map-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const wrapper = moveMap();

  if (mapVisible) {
    wrapper.classList.remove('active');
    mapVisible = false;
  } else {
    wrapper.classList.add('active');
    mapVisible = true;

    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb8Bd-wNJ4DBDnQ5x1K5J8QeJZBgudncA&callback=initMap';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window.initMap();
    }
  }
});

window.addEventListener('resize', () => {
  if (mapVisible) {
    const wrapper = moveMap();
    wrapper.classList.add('active');
  }
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', async e => {
    const newTheme = e.matches ? 'dark' : 'light';
    const newStyle = await loadMapStyle(newTheme);
    map.setOptions({ styles: newStyle });
  });
