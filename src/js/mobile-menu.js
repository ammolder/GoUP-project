(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__btn'),
    closeMenuBtn: document.querySelector('.header__btn-close'),
    menu: document.querySelector('.backdrop-mobile'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
