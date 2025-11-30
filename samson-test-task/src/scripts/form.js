const form = document.querySelector('.form');
const modal = document.getElementById('modal');
const modalData = document.getElementById('data');
const modalClose = document.getElementById('close');
const submitBtn = document.querySelector('.submit__btn');

function getData() {
  const name = document.getElementById('name').value;
  const color = document.getElementById('color').value;
  const coment = document.getElementById('coment').value;

  return {
    nameInput: name,
    color: color,
    coment: coment,
  };
}

function generateContent() {
  modalData.innerHTML = '';

  const data = getData();

  const name = document.createElement('p');
  name.classList.add('modal__data--name');
  name.textContent = 'Имя: ' + data.nameInput;
  modalData.appendChild(name);

  const color = document.createElement('p');
  color.classList.add('modal__data--color');
  color.textContent = 'Ваше настроение:';
  modalData.appendChild(color);

  const colorCont = document.createElement('div');
  colorCont.classList.add('modal__data--color-cont');
  colorCont.style.backgroundColor = data.color;
  modalData.appendChild(colorCont);

  if (data.coment) {
    const coment = document.createElement('p');
    coment.classList.add('modal__data--com');
    coment.textContent = 'Коментарий: ' + data.coment;
    modalData.appendChild(coment);
  }
}

function showModal() {
  generateContent();
  modal.style.display = 'flex';

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showModal();
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  showModal();
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
