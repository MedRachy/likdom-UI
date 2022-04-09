const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
// elements with diffrent steps
const formSteps = document.querySelectorAll(".form-step");
const imgSteps = document.querySelectorAll(".img-step");
const imgMobile = document.querySelectorAll(".img-mobile-step");
// progress bar
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");
// type logement links
const link_apart = document.getElementById("link-apart");
const link_maison = document.getElementById("link-maison");
const link_villa = document.getElementById("link-villa");
const collapse_form = document.getElementById("collapse-form");
// type logement img
const img_apart = document.getElementById("img-apart");
const img_maison = document.getElementById("img-maison");
const img_villa = document.getElementById("img-villa");

let formStepsNum = 0;
let type_logement = "";

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 3) {
      // submit form
      window.location.href = "./recap.html";
    } else {
      formStepsNum++;
      updateFormSteps();
      updateImgSteps();
      updateProgressbar();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 0) {
      if (type_logement == "") {
        window.location.href = "./selection.html";
      } else {
        resetlinks();
        resetImgsLog();
      }
    } else {
      formStepsNum--;
      updateFormSteps();
      updateImgSteps();
      updateProgressbar();
    }
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateImgSteps() {
  if ($(window).width() >= 992) {
    imgSteps.forEach((imgStep) => {
      imgStep.classList.contains("img-step-active") &&
        imgStep.classList.remove("img-step-active");
    });
    imgSteps[formStepsNum].classList.add("img-step-active");
    // that because div taches dont have an image
    // if (formStepsNum == 3) {
    //   imgSteps[2].classList.add("img-step-active");
    // } else {
    //   imgSteps[formStepsNum].classList.add("img-step-active");
    // }
  } else {
    imgMobile.forEach((imgStep) => {
      imgStep.classList.contains("img-mobile-active") &&
        imgStep.classList.remove("img-mobile-active");
    });
    imgMobile[formStepsNum].classList.add("img-mobile-active");
  }
}

link_apart.addEventListener("click", () => {
  type_logement = "appartement";
  link_apart.classList.add("active-type");
  // hide title
  $(".type-logement h4").css("display", "none");
  // hide links
  link_maison.classList.add("hide");
  link_villa.classList.add("hide");
  // img logement
  img_apart.classList.add("show-apart");
  img_maison.classList.add("hide-maison");
  img_villa.classList.add("hide-villa");
});
link_maison.addEventListener("click", () => {
  type_logement = "maison";
  link_maison.classList.add("active-type");
  // hide title
  $(".type-logement h4").css("display", "none");
  // hide links
  link_apart.classList.add("hide");
  link_villa.classList.add("hide");
  // img logement
  img_maison.classList.add("show-maison");
  img_villa.classList.add("hide-villa");
  img_apart.classList.add("hide-apart");
});
link_villa.addEventListener("click", () => {
  type_logement = "villa";
  link_villa.classList.add("active-type");
  // hide title
  $(".type-logement h4").css("display", "none");
  // hide links
  link_maison.classList.add("hide");
  link_apart.classList.add("hide");
  // img logement
  img_villa.classList.add("show-villa");
  img_maison.classList.add("hide-maison");
  img_apart.classList.add("hide-apart");
});

function resetlinks() {
  type_logement = "";
  link_apart.classList.remove("hide", "active-type");
  link_maison.classList.remove("hide", "active-type");
  link_villa.classList.remove("hide", "active-type");
  collapse_form.classList.remove("show");
  $(".type-logement h4").css("display", "block");
}

function resetImgsLog() {
  img_maison.setAttribute("class", "img-logement");
  img_villa.setAttribute("class", "img-logement");
  img_apart.setAttribute("class", "img-logement");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

// input number + & -
$(document).on("click", ".custom-input-number .cin-increment", function (e) {
  let $input = $(this).siblings(".cin-input"),
    val = parseInt($input.val()),
    max = parseInt($input.attr("max")),
    step = parseInt($input.attr("step"));
  let temp = val + step;
  $input.val(temp <= max ? temp : max);
});
$(document).on("click", ".custom-input-number .cin-decrement", function (e) {
  let $input = $(this).siblings(".cin-input"),
    val = parseInt($input.val()),
    min = parseInt($input.attr("min")),
    step = parseInt($input.attr("step"));
  let temp = val - step;
  $input.val(temp >= min ? temp : min);
});

// select taches check
$(".div-tache").on("click", function () {
  var checkbox = $(this).find(".form-check-input");
  checkbox.prop("checked", !checkbox.prop("checked"));
});

// select product check
$("#input-check-product").on("change", function () {
  $(".div-parfum").toggleClass("active-div");
  if (this.checked) {
    $(".div-parfum .form-check-input").removeAttr("disabled");
  } else {
    $(".div-parfum .form-check-input")
      .attr("disabled", true)
      .prop("checked", false);
  }
});

$(".div-parfum").on("click", function () {
  if ($(this).hasClass("active-div")) {
    $(this).find(".form-check-input").prop("checked", true);
  }
});
