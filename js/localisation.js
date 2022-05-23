let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  const LatLng = { lat: 33.687381, lng: -7.3784308 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: LatLng,
    zoom: 13,
    gestureHandling: "greedy",
  });
  marker = new google.maps.Marker({
    // position: pos,
    map: map,
    title: "j'habite ici",
    draggable: true,
  });
  // current location
  infoWindow = new google.maps.InfoWindow();

  $("#btn-location").on("click", function () {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // show_clear_map();
          map.zoom = 17;
          marker.setPosition(pos);
          // console.log(pos);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

$("#btn-next").on("click", function () {
  savedata();
});

function show_clear_map() {
  // change opacity to 1
}

function savedata() {
  var lat = marker.position.lat();
  var lng = marker.position.lng();
  console.log("lat :" + lat);
  console.log("lng :" + lng);
}

window.initMap = initMap;
