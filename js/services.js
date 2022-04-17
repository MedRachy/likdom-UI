const swiperReview = new Swiper(".swiper", {
  autoHeight: true,
  spaceBetween: 20,
  centeredSlides: true,
  effect: "coverflow",
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 900,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperReview.slideTo(1, 600);
