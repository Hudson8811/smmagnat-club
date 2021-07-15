const modal = document.querySelector('.modal'),
  mainContent = document.querySelector('.content');

modal.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__overlay')) {
    modal.classList.remove('active');
    document.body.classList.remove('js-no-scroll');
    mainContent.classList.remove('blur');
  }
});

/*
  Когда модалка открыта, то 
  - у .modal добавляется класс .active,
  - у body добавляется класс js-no-scroll,
  - у .content добавляется класс blur
*/
