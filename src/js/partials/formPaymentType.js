const form = document.querySelector('form'),
  types = form.querySelectorAll('.form__type-button');

form.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.form__type-button')) {
    const currentType = target.closest('.form__type-button');

    types.forEach(item => {
      item.classList.remove('form__type-button_active');
    });

    currentType.classList.add('form__type-button_active');
    currentType.querySelector('input').checked = true;
  }
});
