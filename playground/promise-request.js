const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200 && body.status === "OK")
                resolve(body.results[0].formatted_address);
            else
                reject("Unable to fetch address");
        });
    });
};


 geocodeAddress('Ankara').then(
    (address) => {console.log('Success:', address);},
    (errorMessage) => {console.error('Error:', errorMessage);}
)

geocodeAddress('00000').then(
    (address) => {console.log('Success:', address);},
    (errorMessage) => {console.error('Error:', errorMessage);}
)