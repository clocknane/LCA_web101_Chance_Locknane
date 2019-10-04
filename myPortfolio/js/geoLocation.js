// Declaring a variable for later use and fetching the ID named "my-coords"
var userLocation = document.getElementById("my-coords");

// Calling the onClick Function from my HTML
function getCoords() {
  // Making use of the navigator.geolocation property which gives access to user location
  if (navigator.geolocation) {
    // After declaring variable and learning we are using the navigator.geolocation property, we are not calling for the position and asking for display of position
    navigator.geolocation.getCurrentPosition(displayPosition);

    // Making use of an else statement which says to say not available otherwise
  } else {
    userLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  userLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}
