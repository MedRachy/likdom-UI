const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
// elements with diffrent steps
const formSteps = document.querySelectorAll(".form-step");
const imgSteps = document.querySelectorAll(".img-step");
// progress bar
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");
// change collapse style on mobile screen
const collapseDiv = document.getElementById("collapseWidthExample");

if ($(window).width() <= 992) {
  collapseDiv.classList.remove("collapse-horizontal");
}
let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 2) {
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
      window.location.href = "./selection.html";
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
  }
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
