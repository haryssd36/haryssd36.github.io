// sample code at
// https://developers.google.com/maps/documentation/javascript/examples/directions-simple#maps_directions_simple-javascript

var directionsService = null;
var directionsRenderer = null;

function initDirection(map) {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    
    directionsRenderer.setMap(map);
}

function getDirection(start, end) {
    var request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            var distance = result.routes[0].legs[0].distance.text;
            var duration = result.routes[0].legs[0].duration.text;
            directionsRenderer.setDirections(result);

            alert(`Distance is: ${distance} with ${duration} of travel time`);
        }
    });
  }