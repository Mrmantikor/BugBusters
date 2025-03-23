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
modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) {
    closeModal(e);
  }
});

document.addEventListener('keydown', function (e) {
  const isModalVisible = !modalOverlay.classList.contains('visually-hidden');

  if (!isModalVisible) return;

  if (e.key === 'Escape' || e.key === 'Enter') {
    closeModal(e);
  }
});
