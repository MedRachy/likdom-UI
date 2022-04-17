const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
// elements with diffrent steps
const formSteps = document.querySelectorAll(".form-step");
const imgSteps = document.querySelectorAll(".img-step");
const imgMobile = document.querySelectorAll(".img-mobile-step");
// progress bar
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 1) {
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
      window.location.href = "./reserver_nettsec.html";
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
