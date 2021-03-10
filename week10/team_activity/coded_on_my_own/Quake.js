import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
    // this is where we will store the last batch of retrieved quakes in the model.  
    //I don't always do this...in this case the api doesn't have an endpoint to request 
    //one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL 
    //to get the data we need.  Store it into this._quakes, then return it
    //console.log("within getEarthQuakesByRadius");
      //console.log(this.baseUrl);
    this._quakes = getJSON(this.baseUrl + '&latitude=' + position.lat + '&longitude=' 
    + position.lon + '&maxradiuskm=' + radius);
    return this._quakes;
  }
  async getQuakeById(id) {
    
    // filter this._quakes for the record identified by id and return it
    //return this._quakes.then(features => features.filter(item => item.id === id)[0]);
    const features = await this._quakes.then(result => {return result.features;})
    console.log("features");
    console.log(features.filter(item => item.id === id)[0]);
    return features.filter(item => item.id === id)[0];
  }
}