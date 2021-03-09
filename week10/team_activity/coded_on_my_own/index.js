import { getJSON, getLocation } from './utilities.js'
import QuakesController from './QuakesController.js'



const quakesController = new QuakesController('#quakeList');  
    quakesController.init();
    console.log(quakesController.getQuakesByRadius())
    


const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// url for testing with error
//const url = 'https://earthquake.usgs.gov/fdsnws/even';




/*getLocation()
.then( (result) => { 
    const quakesController = new QuakesController('#quakeList', `lat: ${result.coords.latitude}, lon: ${result.coords.longitude}`);  
    quakesController.init();
    console.log(quakesController);
    return result;
})*/
//.then( (result) => result.json())
//.then( (coords) => { return coords.latitude;})
/*.then( position => `https://earthquake.usgs.gov/fdsnws/event/1/query?
format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${position.coords.latitude}&
longitude=${position.coords.longitude}&maxradiuskm=100, Latitude: ${position.coords.latitude},
Longitude: ${position.coords.longitude}` )*/
//.then( (position) => {return position.coords.latitude;}) 
//.then(result => console.log(`Latitude: ${result.coords.latitude},
//Longitude: ${result.coords.longitude}`))
//const promise = getLocation();
//promise.then(result => console.log(result.coords.latitude));
/*.then(result => console.log(`https://earthquake.usgs.gov/fdsnws/event/1/query?
format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${result.coords.latitude}&
longitude=${result.coords.longitude}&maxradiuskm=100, Latitude: ${result.coords.latitude},
Longitude: ${result.coords.longitude}, ${result.coords}`) )
.then( (position) => {return position.coords;})*/








/*https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=
2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&
maxradiuskm=100*/