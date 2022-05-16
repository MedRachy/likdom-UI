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
let canapes = [];
let fauteuils = [];
let meridiennes = [];
let canapelits = [];
let tapis = [];
let matelas = [];
let rideaux = [];
var place_card =
  '<div class="mycard-2 d-flex align-items-center">Places' +
  '<div class="custom-input-number">' +
  '<button type="button" class="btn-svg cin-decrement">' +
  '<svg id="Minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#3d5b8e" stroke-linecap="round" stroke-width="2" />' +
  "</svg>" +
  "</button>" +
  '<input type="number" class="cin-input basket-quantity" step="1" value="1" min="1" max="10">' +
  '<button type="button" class="btn-svg cin-increment">' +
  ' <svg id="Plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#3d5b8e" stroke-linecap="round" stroke-width="2" />' +
  '<line class="svg-line" data-name="Ligne 31" x2="10" transform="translate(10 5) rotate(90)" fill="none" stroke="#3d5b8e" stroke-linecap="round" stroke-width="2" />' +
  "</svg>" +
  "</button>" +
  "</div>" +
  '<button type="button" class="btn-svg cin-close">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="28.284" height="28.284" viewBox="0 0 28.284 28.284">' +
  '<g transform="translate(0)">' +
  '<g data-name="Cross" transform="translate(0 14.142) rotate(-45)">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  '<line class="svg-line" data-name="Ligne 31" x2="10" transform="translate(9.999 5) rotate(90)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  "</g>" +
  "</g>" +
  "</svg>" +
  "</button>" +
  "</div>";
var tapis_card =
  '<div class="mycard-2 d-flex align-items-center nett_tapis">' +
  '<select class="form-select tapis-select">' +
  '<option value="poli_long">Poil Long</option>' +
  '<option value="soie_laine">Soie/Laine</option>' +
  "</select>" +
  '<div class="me-2">' +
  '<input  type="text" class="form-control hauteur-input" placeholder="H ( cm )">' +
  '<input  type="text" class="form-control longueur-input" placeholder="L ( cm )">' +
  "</div>" +
  '<button type="button" class="btn-svg cin-close">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="28.284" height="28.284" viewBox="0 0 28.284 28.284">' +
  '<g transform="translate(0)">' +
  '<g data-name="Cross" transform="translate(0 14.142) rotate(-45)">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  '<line class="svg-line" data-name="Ligne 31" x2="10" transform="translate(9.999 5) rotate(90)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  "</g>" +
  "</g>" +
  "</svg>" +
  "</button>" +
  "</div>";
var matelas_card =
  '<div class="mycard-2 d-flex align-items-center">' +
  "Tailles" +
  '<select class="form-select tailles-select">' +
  '<option value="92x210">92x210 cm</option>' +
  '<option value="210x510">210x510 cm</option>' +
  '<option value="500x810">500x810 cm</option>' +
  "</select>" +
  '<button type="button" class="btn-svg cin-close">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="28.284" height="28.284" viewBox="0 0 28.284 28.284">' +
  '<g transform="translate(0)">' +
  '<g data-name="Cross" transform="translate(0 14.142) rotate(-45)">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  '<line class="svg-line" data-name="Ligne 31" x2="10" transform="translate(9.999 5) rotate(90)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  "</g>" +
  "</g>" +
  "</svg>" +
  "</button>" +
  "</div>";
var rideau_card =
  '<div class="mycard-2 d-flex align-items-center nett_rideau">' +
  '<div class="input-group">' +
  '<input type="text" class="form-control hauteur-input" placeholder="H ( cm )">' +
  '<input type="text" class="form-control longueur-input" placeholder="L ( cm )">' +
  "</div>" +
  '<button type="button" class="btn-svg cin-close">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="28.284" height="28.284" viewBox="0 0 28.284 28.284">' +
  '<g transform="translate(0)">' +
  ' <g data-name="Cross" transform="translate(0 14.142) rotate(-45)">' +
  '<circle class="svg-circle" data-name="Ellipse 11" cx="10" cy="10" r="10" fill="#fff" />' +
  '<line class="svg-line" data-name="Ligne 30" x2="10" transform="translate(5 10)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  '<line class="svg-line" data-name="Ligne 31" x2="10" transform="translate(9.999 5) rotate(90)" fill="none" stroke="#ef5479" stroke-linecap="round" stroke-width="2" />' +
  "</g>" +
  "</g>" +
  "</svg>" +
  "</button>" +
  "</div>";
// NOTE : diffrent IDs because using classe will create double elements !
var canape_id = "#collapseCanape";
var fauteuil_id = "#collapseFauteuil";
var chaise_id = "#collapseChaise";
var meridienne_id = "#collapseMeridienne";
var canapelit_id = "#collapseCanapelit";
var tapis_id = "#collapseTapis";
var matelas_id = "#collapseMatelas";
var rideau_id = "#collapseRideau";

if ($(window).width() >= 992) {
  canape_id = "#canape-card";
  fauteuil_id = "#fauteuil-card";
  chaise_id = "#chaise-card";
  meridienne_id = "#meridienne-card";
  canapelit_id = "#canapelit-card";
  tapis_id = "#tapis-card";
  matelas_id = "#matelas-card";
  rideau_id = "#rideau-card";
}

// Add element
$(".add-canape").on("click", function () {
  $(canape_id).prepend(place_card);
});
$(".add-fauteuil").on("click", function () {
  $(fauteuil_id).prepend(place_card);
});
$(".add-meridienne").on("click", function () {
  $(meridienne_id).prepend(place_card);
});
$(".add-canapelit").on("click", function () {
  $(canapelit_id).prepend(place_card);
});
$(".add-tapis").on("click", function () {
  $(tapis_id).prepend(tapis_card);
});
$(".add-matelas").on("click", function () {
  $(matelas_id).prepend(matelas_card);
});
$(".add-rideau").on("click", function () {
  $(rideau_id).prepend(rideau_card);
});
// remove element
$(document).on("click", ".cin-close", function () {
  $(this).parent().remove();
});
// get data
function getdata() {
  $(canape_id + " .cin-input").each(function (index) {
    var canape = {};
    canape.index = index;
    canape.places = $(this).val();
    canapes.push(canape);
  });
  $(fauteuil_id + " .cin-input").each(function (index) {
    var fauteuil = {};
    fauteuil.index = index;
    fauteuil.places = $(this).val();
    fauteuils.push(fauteuil);
  });
  $(meridienne_id + " .cin-input").each(function (index) {
    var meridienne = {};
    meridienne.index = index;
    meridienne.places = $(this).val();
    meridiennes.push(meridienne);
  });
  $(canapelit_id + " .cin-input").each(function (index) {
    var canape = {};
    canape.index = index;
    canape.places = $(this).val();
    canapelits.push(canape);
  });
  $(tapis_id + " .nett_tapis").each(function (index) {
    var tap = {};
    tapis_select = $(this).find(".tapis-select");
    hauteur_input = $(this).find(".hauteur-input");
    longueur_input = $(this).find(".longueur-input");
    tap.type = tapis_select.val();
    tap.hauteur = hauteur_input.val();
    tap.longueur = longueur_input.val();
    tapis.push(tap);
  });
  $(matelas_id + " .tailles-select").each(function (index) {
    var matela = {};
    matela.index = index;
    matela.taille = $(this).val();
    matelas.push(matela);
  });
  $(rideau_id + " .nett_rideau").each(function (index) {
    var rideau = {};
    hauteur_input = $(this).find(".hauteur-input");
    longueur_input = $(this).find(".longueur-input");
    rideau.hauteur = hauteur_input.val();
    rideau.longueur = longueur_input.val();
    rideaux.push(rideau);
  });
}

$(".btn-next").on("click", function () {
  // window.location.href = "./reserver.html";
  // convert array to strings
  // set values into hidden input
  // submit form
  getdata();
  console.log("canapes :");
  console.log(canapes);
  console.log("fauteuils :");
  console.log(fauteuils);
  console.log("chaise :");
  console.log($(chaise_id + " .form-select").val());
  console.log("meridienne :");
  console.log(meridiennes);
  console.log("canape lit :");
  console.log(canapelits);
  console.log("tapis :");
  console.log(tapis);
  console.log("matelas :");
  console.log(matelas);
  console.log("rideaux :");
  console.log(rideaux);
});
