import iziToast from 'izitoast';
import axios from 'axios';
const form = document.querySelector(`#work-together-form`);
const modalOverlay = document.querySelector(`#work-together-modal-window`);
console.dir(form);
const { email, message, button } = form.elements;
console.dir(email);
form.addEventListener(`submit`, clickHandler);
email.addEventListener(`input`, validator);

function validator() {
  if (email.validity.valid) {
    email.textContent = '✔';
    feedback.classList.add('valid');
  }
  console.log(email.validity.valid);
  console.log(email.textContent);
}
function isInputValid(form) {
  const { email, message } = form.elements;

  return email.value && message.value ? true : false;
}

function onSucsessResponse(response) {
  document.body.classList.add(`modal-open`);
  modalOverlay.classList.remove(`visually-hidden`);
}

async function sendQuerry(form) {
  const { email, message } = form.elements;
  const querry = {
    email: email.value,
    comment: message.value,
  };
  console.dir(querry);
  const url = `https://portfolio-js.b.goit.study/api/requests`;
  console.log(JSON.stringify(querry));
  const response = await axios
    .post(url, querry)
    .then(response => response.data)
    .then(response => onSucsessResponse(response))
    .catch(reject => {
      console.log(reject);
      reject.response.data
        ? iziToast.error(reject.response.data)
        : iziToast.error(reject);
    });
  return response;
}

async function onSucsessInput(form) {
  const { email, message } = form.elements;
  await sendQuerry(form).then(response => {
    console.log(response);
  });
}
function clickHandler(event) {
  event.preventDefault();
  isInputValid(form)
    ? onSucsessInput(form)
    : iziToast.warning({ message: `Error` });
}
