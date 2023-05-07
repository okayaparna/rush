// Fetch the data from the JSON file
fetch('MTA-Wi-Fi-Locations.json')
  .then((response) => response.json())
  .then((data) => {
    // Process the Wi-Fi locations data here

    // Create an array to store the Wi-Fi spots in Manhattan
    const manhattanSpots = data.filter((spot) => spot.Borough === 'Manhattan');

    // Generate the Google Maps iframe source URL
    const googleMapsSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.183496992697!2d-73.99472398507504!3d40.73814277932685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fdb93d4e6b%3A0xc3fdd2e4c8e8d8db!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1682621151712!5m2!1sen!2s`;

    // Create the Google Maps iframe element
    const googleMapsIframe = document.createElement('iframe');
    googleMapsIframe.src = googleMapsSrc;
    googleMapsIframe.width = '800';
    googleMapsIframe.height = '600';
    googleMapsIframe.style.border = '0';
    googleMapsIframe.allowfullscreen = true;
    googleMapsIframe.loading = 'lazy';
    googleMapsIframe.referrerpolicy = 'no-referrer-when-downgrade';

    // Append the Google Maps iframe to a container element on the page
    const mapContainer = document.getElementById('map-container');
    mapContainer.appendChild(googleMapsIframe);

    // Process the Wi-Fi spots in Manhattan as needed
    console.log('Wi-Fi spots in Manhattan:', manhattanSpots);
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
  });
