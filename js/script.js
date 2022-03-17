$(document).ready(function () {
  // scroll to top
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function () {
    $(window).scrollTop(0);
  });

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
