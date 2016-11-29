const request = require('request');

var getGeocode = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
        json: true
    }, (error, response, body) => {
        if (error)
            callback(error);
        else if (body.status === "ZERO_RESULTS"){
            callback("Unable to find the address!")
        }
        else if (body.status === "OK"){
            callback(undefined, body.results[0].formatted_address);
        }
    });
};

var getLocation = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
        json: true
    }, (error, response, body) => {
        if (error)
            callback(error);
        else if (body.status === "ZERO_RESULTS"){
            callback("Unable to find the address!")
        }
        else if (body.status === "OK"){
            callback(undefined, body.results[0].geometry.location);
        }
    });
};

module.exports = {
    getGeocode,
    getLocation
}
