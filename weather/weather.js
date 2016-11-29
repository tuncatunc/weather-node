const request = require('request');

const darkSkyApiKey = '96fef7c5cb15e5d542ac68f3142f935a';

var getCurrentWeather = (location, callback) => {
    var encodedlat = encodeURIComponent(location.lat);
    var encodedlng = encodeURIComponent(location.lng);
    
    request({
        url: `https://api.darksky.net/forecast/${darkSkyApiKey}/${encodedlat},${encodedlng}?lang=tr&units=auto`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200)
            callback(undefined, body.currently);
        else
            callback("Unable to fetch weather!")
    });
}
module.exports = {
    getCurrentWeather
}