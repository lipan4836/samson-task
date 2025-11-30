function homeBtn() {
  const imgUrl = '/home.svg';

  const btn = document.createElement('a');
  btn.classList.add('home-btn');
  btn.href = '/main/';
  document.body.appendChild(btn);

  const btnImg = document.createElement('img');
  btnImg.src = imgUrl;
  btnImg.alt = 'Вернуться на главную';
  btnImg.classList.add('home-btn__img');
  btn.appendChild(btnImg);
}

homeBtn();
