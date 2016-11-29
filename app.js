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

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

geocode.getGeocode(argv.address, (errorMessage, results) => {
    if (errorMessage)
        console.log(JSON.stringify(errorMessage));
    else{
        console.log(JSON.stringify(results));
    }
});

geocode.getLocation(argv.address, (errorMessage, results) => {
    if (errorMessage)
        console.log(JSON.stringify(errorMessage));
    else{
        weather.getCurrentWeather(results, (error, current) => {
            if (error)
                console.log(error);
            else
                console.log(`Current Temperature is ${current.temperature}, it feels like ${current.apparentTemperature}`);
        })
    }
});

