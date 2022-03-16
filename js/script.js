$(document).ready(function () {
  // $(".nav-pills > li > button").hover(function () {
  //   $(this).tab("show");
  // });

  const swiperReview = new Swiper(".swiper", {
    spaceBetween: 90,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides:true,
      },
    },
  });

  swiperReview.slideTo(1, 600);

  $(".btn-reserv").on("click", function () {
    window.location.href = "./selection.html";
  });
});
