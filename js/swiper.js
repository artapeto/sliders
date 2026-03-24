const swiper = new Swiper('.swiper-container', {
  speed: 800,
  spaceBetween: 100,



   autoplay: {
   delay: 5000,
 },
  
    navigation: {
    nextEl: '.btns__right',
    prevEl: '.btns__left',
  },
    effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },

});