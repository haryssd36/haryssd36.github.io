function getGeoLocation(setOrigin) {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => setOrigin(position.coords.latitude, position.coords.longitude));
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function setLocation(map, marker, position) {
    map.setCenter(position);
    marker.setPosition(position);
}