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

var code = geocode.getGeocode(argv.address, (errorMessage, results) => {
    if (errorMessage)
        console.log(JSON.stringify(errorMessage));
    else
        console.log(JSON.stringify(results));
});