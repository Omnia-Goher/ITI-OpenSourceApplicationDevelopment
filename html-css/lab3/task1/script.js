function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc, showError, options)
}

function showLoc(e) {
    var long = e.coords.longitude;
    var lat = e.coords.latitude;
    location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
}

function showError(e) {
    var error = e.code
    switch (error) {
        case 0:
            console.log("Error Message: ", e.message)
            break;
        case 1:
            console.log("Error Message: ", e.message)
            break;
        case 2:
            console.log("Error Message: ", e.message)
            break;
        case 3:
            console.log("Error Message: ", e.message)
            break;
        default:
            break;
    }
}

var options = {
   timeout: 0
}