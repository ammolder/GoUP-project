(() => {
  const refs = {
    openLocatBtn: document.querySelector('.contact-button__btn--first'),
    closeLocatBtn: document.querySelector('.modal-loc__сlose-btn'),
    locat: document.querySelector('.backdrop-loc'),
    body: document.querySelector('body'),
  };
  refs.openLocatBtn.addEventListener('click', toggleMenu);
  refs.closeLocatBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.locat.classList.toggle('is-hidd-loc');
    refs.body.classList.toggle('no-scroll-loc');
  }
})();
