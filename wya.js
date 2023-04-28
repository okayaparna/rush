// Get the latitude and longitude of the user's location
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  // Update the latitude and longitude in the DOM
  function showPosition(position) {
    document.querySelector('.lat-number').textContent = position.coords.latitude;
    document.querySelector('.long-number').textContent = position.coords.longitude;
  }
  
  // Attach the click event listener to the button
  document.querySelector('#station-go').addEventListener('click', getLocation);