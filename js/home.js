$(document).ready(function () {
  const link_pill = document.querySelectorAll(".link-pill");

  // ---------- scroll to top
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

  // -------------- swiper
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

  // ------ select services
  let service = "http://localhost/likdom-UI/selection.html";

  link_pill.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      updatelinkState();
      link.classList.add("active");
      service = link.href;
    });
  });
  function updatelinkState() {
    link_pill.forEach((link) => {
      link.classList.contains("active") && link.classList.remove("active");
    });
  }
  $(".btn-reserv").on("click", function () {
    window.location.href = service;
  });
});
