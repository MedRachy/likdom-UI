const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
// const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const imgSteps = document.querySelectorAll(".img-step");

// const progressSteps = document.querySelectorAll(".progress-step");

const link_apart = document.getElementById("link-apart");
const link_maison = document.getElementById("link-maison");
const link_villa = document.getElementById("link-villa");
const collapse_form = document.getElementById("collapse-form");

const img_apart = document.getElementById("img-apart");
const img_maison = document.getElementById("img-maison");
const img_villa = document.getElementById("img-villa");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 3) {
      window.location.href = "./recap.html";
    }
    // keep the same image for div tache
    if (formStepsNum == 1) {
      formStepsNum++;
      updateFormSteps();
    } else {
      formStepsNum++;
      updateFormSteps();
      updateImgSteps();
      // updateProgressbar();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum == 0) {
      window.location.href = "./selection.html";
    }

    if (formStepsNum == 1) {
      resetlinks();
      resetImgsLog();
    }
    formStepsNum--;
    updateFormSteps();
    updateImgSteps();
    // updateProgressbar();
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
  imgSteps.forEach((imgStep) => {
    imgStep.classList.contains("img-step-active") &&
      imgStep.classList.remove("img-step-active");
  });
  // that because div taches dont have an image
  if (formStepsNum == 3) {
    imgSteps[2].classList.add("img-step-active");
  } else {
    imgSteps[formStepsNum].classList.add("img-step-active");
  }
}

link_apart.addEventListener("click", () => {
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
  link_apart.classList.remove("hide");
  link_maison.classList.remove("hide");
  link_villa.classList.remove("hide");
  collapse_form.classList.remove("show");
  $(".type-logement h4").css("display", "block");
}

function resetImgsLog() {
  img_maison.setAttribute("class", "img-logement");
  img_villa.setAttribute("class", "img-logement");
  img_apart.setAttribute("class", "img-logement");
}

// function updateProgressbar() {
//   progressSteps.forEach((progressStep, idx) => {
//     if (idx < formStepsNum + 1) {
//       progressStep.classList.add("progress-step-active");
//     } else {
//       progressStep.classList.remove("progress-step-active");
//     }
//   });

//   const progressActive = document.querySelectorAll(".progress-step-active");

//   progress.style.width =
//     ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
// }

/*
 * todo =>
 * Refacctor with function
 *
 */
$(document).on("click", ".custom-input-number .cin-increment", function (e) {
  let $input = $(this).siblings(".cin-input"),
    val = parseInt($input.val()),
    max = parseInt($input.attr("max")),
    step = parseInt($input.attr("step"));

  let temp = val + step;
  $input.val(temp <= max ? temp : max);
  // console.log(temp);
});
$(document).on("click", ".custom-input-number .cin-decrement", function (e) {
  let $input = $(this).siblings(".cin-input"),
    val = parseInt($input.val()),
    min = parseInt($input.attr("min")),
    step = parseInt($input.attr("step"));

  let temp = val - step;
  $input.val(temp >= min ? temp : min);
  // console.log(temp);
});

$("#input-check-product").on("change", function () {
  $("#select-parfum").toggleClass("opacity-100");
  if (this.checked) {
    $("#select-parfum").removeAttr("disabled");
  } else {
    $("#select-parfum").attr("disabled", true);
  }
});
