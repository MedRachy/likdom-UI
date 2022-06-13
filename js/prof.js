$(".div-hexagone").on("click", function () {
  var service = $(this).attr("data-service");
  var service_shown = $(".active-hexagone").attr("data-service");
  // switch data-attribut
  $(".active-hexagone").attr("data-service", service);
  $(this).attr("data-service", service_shown);
  // update span text
  span = $(this).children();
  span.text(service_shown);
  // update active service
  update_active_service(service, service_shown);
});

function update_active_service(service, service_shown) {
  // update active img
  $(".active-hexagone").removeClass("img-" + service_shown);
  $(".active-hexagone").addClass("img-" + service);
  // update service info
  $(".service-info").removeClass("d-block");
  $(".service-" + service).addClass("d-block");
}
