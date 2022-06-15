$(".div-hexagone").on("click", function () {
  var service = $(this).attr("data-service");
  var service_shown = $(".active-hexagone").attr("data-service");
  // switch data-attribut
  $(".active-hexagone").attr("data-service", service);
  $(this).attr("data-service", service_shown);
  // update div hexa img
  $(this).removeClass("img-" + service);
  $(this).addClass("img-" + service_shown);
  // update span text
  span = $(this).children();
  span.text(text_formater(service_shown));
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

function text_formater(service_shown) {
  if (service_shown == "cristalisation") {
    return "Cristalisation";
  }
  if (service_shown == "nett_vitre") {
    return "Nettoyage vitre de façade";
  }
  if (service_shown == "lavage_sec") {
    return "Lavage à sec";
  }
  if (service_shown == "desinfection") {
    return "Désinfection";
  }
  if (service_shown == "jardinage") {
    return "Jardinage";
  }
  if (service_shown == "nett_pro") {
    return "Nettoyage Pro";
  }
}
