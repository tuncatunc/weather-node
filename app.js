const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%C3%A7ankaya%20ankara%20t%C3%BCrkiye',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});