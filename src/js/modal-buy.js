// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.modal-buy-open'),
//     closeMenuBtn: document.querySelector('.modal-buy__btn-close'),
//     menu: document.querySelector('.modal-buy'),
//     modalBuyClose: document.querySelector('.modal-buy__close'),
//     body: document.querySelector('body'),
//   };

//   if (refs.openMenuBtn) {
//     refs.openMenuBtn.addEventListener('click', toggleMenu);
//   }

//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   function toggleMenu() {
//     // refs.menu.classList.toggle('is-hiddens');
//     refs.modalBuyClose.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }

//   // FOR BUY MODAL
//   const backdropOfBuyModal = document.querySelector('.backdrop[data-modal="buy"]');
//   const buyNowBtn = document.querySelector('#headerBuyNow');
//   const buyNowCloseBtn = document.querySelector('#headerBuyNowClose');

//   // backdropOfBuyModal.addEventListener('click', toggleBuyModal); // коли клікаємо на сам бекдроп - закриваємо його
//   buyNowBtn.addEventListener('click', toggleBuyModal); // коли клікаємо на кнопку - відкриваємо бекдроп
  
//   function toggleBuyModal(event) {
//     if (event.target === backdropOfBuyModal || // якщо клікаємо на бекдропі або
//       event.target === buyNowBtn) { // на кнопці "buyNowBtn" то робимо те що нижче
//       backdropOfBuyModal.classList.toggle('is-hidden'); // додаємо або забераємо клас is-hidden
//       refs.body.classList.toggle('no-scroll'); // блокуємо скролл на сторінці
//     }
//   }
// })();
