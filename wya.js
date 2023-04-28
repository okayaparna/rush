// Page Elements
const $step1 = document.getElementById('step-1')
const $step2 = document.getElementById('step-2')
const $step3 = document.getElementById('step-3')
const $nameInput = document.getElementById('name')
const $distanceInput = document.getElementById('distance')
const $letsGoButton = document.getElementById('lets-go')

// Application state variables
let userName = ''
let userDistance = 0
let userCoordinates = null

const travelDestinations = [
  {
    name: 'Statue of Liberty',
    latitude: 40.689247,
    longitude: -74.044502
  },
  {
    name: 'Mt Rushmore',
    latitude: 43.8803,
    longitude: -103.4538
  },  
  {
    name: 'Colisseum',
    latitude: 41.8902,
    longitude: 12.492373
  },
  {
    name: 'The Great Pyramid',
    latitude: 29.9792,
    longitude: 31.1342
  }   
]

// App Helper Functions
function calculateDistance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)) * 0.621371; // 2 * R; R = 6371 km, 0.621371 miles per km
}



// Step 1
$letsGoButton.addEventListener('click', function() {
  // Save the values that the user entered
  userName = $nameInput.value // name is what was entered in the name input
  userDistance = $distanceInput.value // Distance selected in the range slider

  $letsGoButton.innerText = 'Locating...'

  // geolocate the user
  navigator.geolocation.getCurrentPosition(function(position) {
    userCoordinates = position.coords

    // send the user to step 2
    goToStep2()
  })
})

function goToStep2() {
  $step1.style.display = 'none' // Hide 1
  $step3.style.display = 'none' // Hide 3

  $step2.innerHTML = `
    <h3>Hey ${userName}!</h3>
    <p>Your current location is:</p>
    <p>Latitude: ${userCoordinates.latitude}</p>
    <p>Longitude: ${userCoordinates.longitude}</p>
    <p>You said you're willing to travel ${userDistance} miles</p>
    <p><button onclick="goToStep3()">Show me vacation options</button></p>
    <div style="width: 600px; max-width: 100%; margin: 0 auto;">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        src="https://maps.google.com/maps?q=${userCoordinates.latitude},${userCoordinates.longitude}&output=embed">
      </iframe>
    </div>    
  `

  $step2.style.display = 'block' // Show 2
}

function goToStep3() {
  $step2.style.display = 'none' // Hide 2
  $step1.style.display = 'none' // Hide 1

  // Loop through our vacation destination options

  let step3HTML = '<p>Here are your destination options:</p>'
    
  travelDestinations.forEach(function(destination) {
    const distance = calculateDistance(destination.latitude, destination.longitude, userCoordinates.latitude, userCoordinates.longitude)
    const withinTravelDistance = distance < userDistance

    step3HTML = step3HTML + `
      <h3>${destination.name}</h3>
      <p>${parseInt(distance)} miles away</p>
      <p>${withinTravelDistance ? "✅ Let's go! ✅" : "❌ Too far ❌"}</p>
      <p></p>
    `
  })

  step3HTML = step3HTML + `
    <p><button onclick="goToStep2()">Go Back to step 2</button></p>
  `

  $step3.innerHTML = step3HTML

  $step3.style.display = 'block' // Show 3
}









/*
const travelDestinations = [
  {
    name: 'Statue of Liberty',
    latitude: 40.689247,
    longitude: -74.044502
  },
  {
    name: 'Mt Rushmore',
    latitude: 43.8803,
    longitude: -103.4538
  },  
  {
    name: 'Colisseum',
    latitude: 41.8902,
    longitude: 12.492373
  },
  {
    name: 'The Great Pyramid',
    latitude: 29.9792,
    longitude: 31.1342
  }   
]
// App state variables
let userName = ''
let userDistance = 0
let userCoordinates = null
// App Helper Functions
function calculateDistance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;
  return 12742 * Math.asin(Math.sqrt(a)) * 0.621371; // 2 * R; R = 6371 km, 0.621371 miles per km
}
// App Events
$letsGoButton.addEventListener('click', function() {
  $letsGoButton.innerText = 'Locating...'
  userName = $nameInput.value
  userDistance = parseInt($distanceInput.value)
  navigator.geolocation.getCurrentPosition(function(position) {
    userCoordinates = position.coords
    goToStep2()
  })
})
function goToStep2() {
  $step1.style.display = 'none'
  $step2.innerHTML = `
    <h3>Hey ${userName}!</h3>
    <p>Your current location is:</p>
    <p>Latitude: ${userCoordinates.latitude}</p>
    <p>Longitude: ${userCoordinates.longitude}</p>
    <p>You said you're willing to travel ${userDistance} miles</p>
    <p><button id="see-destinations">Click to see your destination options</button></p>
    <div style="width: 600px; max-width: 100%; margin: 0 auto;">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        src="https://maps.google.com/maps?q=${userCoordinates.latitude},${userCoordinates.longitude}&output=embed">
      </iframe>
    </div>
  `
  document.getElementById('see-destinations').addEventListener('click', goToStep3)
  $step2.style.display = 'block'
}
function goToStep3() {
  $step2.style.display = 'none'
  let step3HTML = '<p>Here are your destination options:</p>'
    
  travelDestinations.forEach(function(destination) {
    const distance = calculateDistance(destination.latitude, destination.longitude, userCoordinates.latitude, userCoordinates.longitude)
    const withinTravelDistance = distance < userDistance
    step3HTML = step3HTML + `
      <h3>${destination.name}</h3>
      <p>${parseInt(distance)} miles away</p>
      <p>${withinTravelDistance ? "✅ Let's go! ✅" : "❌ Too far ❌"}</p>
      <p></p>
    `
  })
  $step3.innerHTML = step3HTML
  $step3.style.display = 'block'
}
*/