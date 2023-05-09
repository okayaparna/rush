async function fetchPositionsFromJSON() {
    try {
      const response = await fetch('MTA-Wi-Fi-Locations-2.json'); // Fetch the JSON file
      const data = await response.json(); // Parse the JSON response
  
      const positions = data.map(item => ({
        lat: item.lat,
        lng: item.lng
      }));
  
      console.log(positions); // Array of positions [{ lat: 40.799446, lng: -73.968379 }, ...]
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
    }
  }
  
  fetchPositionsFromJSON();


// Assuming you have a JSON file named "data.json" with an array of positions:
// [
//   { "lat": 40.799446, "lng": -73.968379 },
//   { "lat": 40.123456, "lng": -73.987654 },
//   ...
// ]
async function fetchMarkersFromJSON() {
    try {
      const response = await fetch('MTA-Wi-Fi-Locations.json'); // Fetch the JSON file
      const data = await response.json(); // Parse the JSON response
  
      // Iterate over each position in the data array
      data.forEach(position => {
        // Create a new marker for each position
        const newMarker = new google.maps.Marker({
          position: position,
          map: map
        });
      });
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
    }
  }
  
  fetchMarkersFromJSON();
  