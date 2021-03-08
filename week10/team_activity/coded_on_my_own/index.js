import { getJSON, getLocation } from './utilities.js'

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// url for testing with error
//const url = 'https://earthquake.usgs.gov/fdsnws/even';

let specifiedURL = '';



getLocation()
//.then(result => console.log(`Latitude: ${result.coords.latitude},
//Longitude: ${result.coords.longitude}`))
//const promise = getLocation();
//promise.then(result => console.log(result.coords.latitude));
/*.then(result => console.log(`https://earthquake.usgs.gov/fdsnws/event/1/query?
format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${result.coords.latitude}&
longitude=${result.coords.longitude}&maxradiuskm=100, Latitude: ${result.coords.latitude},
Longitude: ${result.coords.longitude}`) )*/
.then(result => console.log(`https://earthquake.usgs.gov/fdsnws/event/1/query?
format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${result.coords.latitude}&
longitude=${result.coords.longitude}&maxradiuskm=100, Latitude: ${result.coords.latitude},
Longitude: ${result.coords.longitude}`) )

getJSON(baseUrl);

console.log(specifiedURL);

/*https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=
2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&
maxradiuskm=100*/