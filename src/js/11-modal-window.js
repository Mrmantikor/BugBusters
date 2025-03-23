const button = document.querySelector(`#close-modal-button`);
const modalOverlay = document.querySelector(`#work-together-modal-window`);
const form = document.querySelector(`#work-together-form`);

function closeModal(event) {
  event.preventDefault();
  modalOverlay.classList.add(`visually-hidden`);
  document.body.classList.remove(`modal-open`);
  form.reset();
}

button.addEventListener(`click`, closeModal);
