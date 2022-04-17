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

$(".btn-next").on("click", function () {
  window.location.href = "./reserver.html";
});
