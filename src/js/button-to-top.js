(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top-show');
    }
  }

  function backToTop() {
    window.scrollTo(0, 0);
  }

  var goTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
