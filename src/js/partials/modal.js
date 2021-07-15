const modal = document.querySelector('.modal');

modal.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__overlay')) {
    modal.classList.remove('active');
    document.body.classList.remove('js-no-scroll');
  }
});
