

function initMap() {
      // Initialize the map
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
      });

      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // Create a marker for the user's location
          var marker = new google.maps.Marker({
            position: userLatLng,
            map: map,
            icon: 'you-are-here.png', // Local file icon
            title: 'You are here',
            animation: google.maps.Animation.BOUNCE // Marker animation
          });


   // Create a new marker
   var newMarker1 = new google.maps.Marker({
        label: 'Union Square',
        position: { lat: 40.807745, lng: -73.945502 },
        map: map,
      });

      var newMarker2 = new google.maps.Marker({
        label: '103rd St',
        position: {  "lat": 40.799446,
    "lng": -73.968379},
        map: map,
  
      });

      var newMarker3 = new google.maps.Marker({
        label: '10th St',
        position: {
    "lat": 40.803967,
    "lng": -73.966847 },
        map: map,
      });

      var newMarker4 = new google.maps.Marker({
        label: '110th St/Central Park N',
        position: { 
    "lat": 40.799075,
    "lng": -73.951822 },
        map: map,
      });

      var newMarker5 = new google.maps.Marker({
        label: '116th St',
        position: { 
    "lat": 40.807722,
    "lng": -73.96411
 },
        map: map,
      });

      var newMarker6 = new google.maps.Marker({
        label: ' 125th St',
        position: {
    "lat": 40.807745,
    "lng": -73.945502},
        map: map,
      });

      var newMarker7 = new google.maps.Marker({
        label: ' 135th St',
        position: {
    "lat": 40.814229,
    "lng": -73.94077
  }, 
    map: map,
      });

      var newMarker8 = new google.maps.Marker({
        label: '137th St',
        position: { 
    "lat": 40.822008,
    "lng": -73.953676 },
        map: map,
      });
      var newMarker1 = new google.maps.Marker({
        label: ' 14 St',
        position: {
    "lat": 40.737826,
    "lng": -74.000201},
        map: map,
      });

      var newMarker9 = new google.maps.Marker({
        label: '148th St',
        position: { 
    "lat": 40.82388,
    "lng": -73.93647 },
        map: map,
      });
      var newMarker1 = new google.maps.Marker({
        label: '14th St/Union Square',
        position: { 
    "lat": 40.734673,
    "lng": -73.989951 },
        map: map,
      });
      var newMarker10 = new google.maps.Marker({
        label: '155th St",',
        position: { 
    "lat": 40.830135,
    "lng": -73.938209 },
        map: map,
      });
      var newMarker11 = new google.maps.Marker({
        label: ' 1st Ave',
        position: {
    "lat": 40.730953,
    "lng": -73.981628 },
        map: map,
      });
      var newMarker12 = new google.maps.Marker({
        label: '23 St',
        position: {
    "lat": 40.745906,
    "lng": -73.998041},
        map: map,
      });
      var newMarker1 = new google.maps.Marker({
        label: ' 28th St',
        position: {
    "lat": 40.747215,
    "lng": -73.993365 },
        map: map,
      });
      var newMarker14 = new google.maps.Marker({
        label: '34th St',
        position: {
    "lat": 40.7558389,
    "lng": -74.0019611 },
        map: map,
      });
      var newMarker15 = new google.maps.Marker({
        label: '3rd Ave',
        position: {

    "lat": 40.732849,
    "lng": -73.986122 },
        map: map,
      });
      var newMarker16 = new google.maps.Marker({
        label: '42nd St',
        position: {
    "lat": 40.757308,
    "lng": -73.989735},
        map: map,
      });
      var newMarker17 = new google.maps.Marker({
        label: '59th St',
        position: {
    "lat": 40.768296,
    "lng": -73.981736 },
        map: map,
      });

      var newMarker18 = new google.maps.Marker({
        label: '77th St',
        position: {
    "lat": 40.77362,
    "lng": -73.959874},
        map: map,
      });
      var newMarker19 = new google.maps.Marker({
        label: '8 Av',
        position: {
    "lat": 40.739777,
    "lng": -74.002578},
        map: map,
      });
      var newMarker20 = new google.maps.Marker({
        label: '86th St',
        position: {
    "lat": 40.779492,
    "lng": -73.955589},
        map: map,
      });
      var newMarker21 = new google.maps.Marker({
        label: '96 St',
        position: {
    "lat": 40.784267,
    "lng": -73.947114},
        map: map,
      });
      var newMarker22 = new google.maps.Marker({
        label: 'Astor Place',
        position: {
    "lat": 40.730054,
    "lng": -73.99107
},
        map: map,
      });
      var newMarker23 = new google.maps.Marker({
        label: 'Bleecker St',
        position: {
    "lat": 40.725915,
    "lng": -73.994659
},
        map: map,
      });
      var newMarker24 = new google.maps.Marker({
        label: 'Bowery',
        position: {
    "lat": 40.72028,
    "lng": -73.993915
},
        map: map,
      });

      var newMarker25 = new google.maps.Marker({
        label: 'Bowling Green',
        position: {
    "lat": 40.704817,
    "lng": -74.014065
},
        map: map,
      });
      var newMarker26 = new google.maps.Marker({
        label: 'Broad ST',
        position: {
    "lat": 40.706476,
    "lng": -74.011056},
        map: map,
      });   var newMarker27 = new google.maps.Marker({
        label: 'Broadwav-Lafayette',
        position: {
    "lat": 40.725297,
    "lng": -73.996204},
        map: map,
      });   var newMarker28 = new google.maps.Marker({
        label: 'Broadway-Nassau",',
        position: {
    "lat": 40.710197,
    "lng": -74.007691},
        map: map,
      });   var newMarker29 = new google.maps.Marker({
        label: 'Brooklyn Bridge',
        position: {
    "lat": 40.713065,
    "lng": -74.004131},
        map: map,
      });   var newMarker30 = new google.maps.Marker({
        label: 'Canal St',
        position: {
    "lat": 40.720824,
    "lng": -74.005229},
        map: map,
      });var newMarker31 = new google.maps.Marker({
        label: 'Delancey St',
        position: {
    "lat": 40.718611,
    "lng": -73.988114},
        map: map,
      });var newMarker32 = new google.maps.Marker({
        label: 'Essex St',
        position: {
    "lat": 40.718315,
    "lng": -73.987437},
        map: map,
      });var newMarker33 = new google.maps.Marker({
        label: 'Fulton St',
        position: {
    "lat": 40.710374,
    "lng": -74.007582},
        map: map,
      });var newMarker34 = new google.maps.Marker({
        label: 'Houston St',
        position: {
    "lat": 40.728251,
    "lng": -74.005367},
        map: map,
      });var newMarker35 = new google.maps.Marker({
        label: 'Prince St',
        position: {
    "lat": 40.724329,
    "lng": -73.997702},
        map: map,
      });
      var newMarker36 = new google.maps.Marker({
        label: 'Rector St',
        position: {
    "lat": 40.70722,
    "lng": -74.013342},
        map: map,
      });var newMarker37 = new google.maps.Marker({
        label: 'Spring St',
        position: {
    "lat": 40.722301,
    "lng": -73.997141},
        map: map,
      });var newMarker38 = new google.maps.Marker({
        label: 'Times Square',
        position: {
    "lat": 40.754672,
    "lng": -73.986754},
        map: map,
      });var newMarker39 = new google.maps.Marker({
        label: 'Union Square',
        position: {
    "lat": 40.734789,
    "lng": -73.99073},
        map: map,
      });var newMarker40 = new google.maps.Marker({
        label: 'Wall St',
        position: {
    "lat": 40.707557,
    "lng": -74.011862},
        map: map,
      });
      var newMarker40 = new google.maps.Marker({
        label: 'World Trade Center',
        position: {
    "lat": 40.712582,
    "lng": -74.009781},
        map: map,
      });

    
          // Center the map on the user's location
          map.setCenter(userLatLng);
        }, function() {
          handleLocationError(true, map.getCenter());
        });
      } else {
        // Browser doesn't support geolocation
        handleLocationError(false, map.getCenter());
      }
    }

    
    
    function handleLocationError(browserHasGeolocation, pos) {
      var infoWindow = new google.maps.InfoWindow({
        content: browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.'
      });

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Error'
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

