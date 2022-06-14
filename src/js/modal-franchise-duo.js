(() => {
  const refs = {
    openModBtn: document.querySelector('.header-model__btn--fix'),
    closeModBtn: document.querySelector('.modal-buy__btn-close-one'),
    mod: document.querySelector('.backdrop'),
    bodyDuo: document.querySelector('body'),
  };
    refs.openModBtn.addEventListener('click', toggleMenu);
  refs.closeModBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.mod.classList.toggle('is-hidd-duo');
    refs.bodyDuo.classList.toggle('no-scroll-duo');
  }
})();