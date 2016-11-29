const axios = require('axios');

const darkSkyApiKey = '96fef7c5cb15e5d542ac68f3142f935a';

var argv = require('yargs')
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true
        }
    })
    .help()
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find the address.');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        console.log(response.data.results[0].formatted_address);
        var weatherUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lng}?units=auto`;
        
        return axios.get(weatherUrl);
    })
    .then((response) => {
        var temp = response.data.currently.temperature;
        var tempApparent = response.data.currently.apparentTemperature;
        var summary = response.data.currently.summary;

        console.log(`It is currently ${temp}, feels like ${tempApparent}. ${summary}`);
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') console.error('Unable to connect to API servers!');
        else console.error(e.message);
    });

