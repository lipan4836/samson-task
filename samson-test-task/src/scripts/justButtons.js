const btnCollection = document.querySelectorAll('.btn');
const switcher = document.getElementById('switcher');

function toggleDisabled() {
  btnCollection.forEach((btn) => {
    btn.disabled = !btn.disabled;
  });
}

switcher.addEventListener('click', () => {
  toggleDisabled();
});
