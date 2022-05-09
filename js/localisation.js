let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  const LatLng = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: LatLng,
    zoom: 8,
    gestureHandling: "greedy",
  });
  //   new google.maps.Marker({
  //     position: LatLng,
  //     map,
  //     title: "Ma position",
  //     draggable: true,
  //   });

  geocoder = new google.maps.Geocoder();
  console.log(geocoder);
  const inputText = document.getElementById("adresse");
  const submitButton = document.getElementById("btnSearch");
  const clearButton = document.getElementById("btnClear");

  marker = new google.maps.Marker({
    title: "Ma position",
    draggable: true,
    map,
  });
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
  function clear() {
    marker.setMap(null);
  }

  function geocode(request) {
    clear();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;

        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }
  // current location
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
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
window.initMap = initMap;
