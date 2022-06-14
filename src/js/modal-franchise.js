(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-model__btn'),
    closeModalBtn: document.querySelector('.modal-buy__btn-close-duo'),
    modal: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
  };
    refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.modal.classList.toggle('is-hidd');
    refs.body.classList.toggle('no-scroll');
  }
})();

