(() => {
  const refs = {
    openFormBtn: document.querySelector('.contact-button__btn--second'),
    closeFormBtn: document.querySelector('.modal-buy__btn-close-form'),
    form: document.querySelector('.backdrop-form'),
    bodyForm: document.querySelector('body'),
  };
    refs.openFormBtn.addEventListener('click', toggleMenu);
  refs.closeFormBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.form.classList.toggle('is-hidd-form');
    refs.bodyForm.classList.toggle('no-scroll-form');
  }
})();