$(document).ready(function () {
  $(".nav-pills > li > button").hover(function () {
    $(this).tab("show");
  });

  // $("#pills-tab button").on("shown.bs.tab", function (event) {
  //   console.log(event);
  //   event.relatedTarget.hide();
  // });

  // var tabEl = document.querySelector('button[data-bs-toggle="pill"]');
  // tabEl.addEventListener("shown.bs.tab", function (event) {
  //   event.target; // newly activated tab
  //   event.relatedTarget.hide(); // previous active tab
  // });

  // var triggerTabList = [].slice.call(
  //   document.querySelectorAll("#pills-tab button")
  // );
  // triggerTabList.forEach(function (triggerEl) {
  //   var tabTrigger = new bootstrap.Tab(triggerEl);

  //   triggerEl.addEventListener("mouseover", function (event) {
  //     // console.log(tabTrigger);
  //     event.preventDefault();
  //     setTimeout(function () {
  //       tabTrigger.show();
  //       // event.relatedTarget.hide();
  //     }, 500);
  //   });
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
