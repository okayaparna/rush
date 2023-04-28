// Get the latitude and longitude of the user's location and round off to 5 digits
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(5);
      const long = position.coords.longitude.toFixed(5);
      showPosition(lat, long);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Update the latitude and longitude in the DOM
function showPosition(lat, long) {
  document.querySelector('.lat-number').textContent = lat;
  document.querySelector('.long-number').textContent = long;
}

// Attach the click event listener to the button
document.querySelector('#station-go').addEventListener('click', getLocation);