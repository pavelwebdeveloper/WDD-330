import { getJSON } from './utilities.js';
// Quake Model
export default class Movie {
  constructor() {
    
    // this is where we will store the last batch of retrieved quakes in the model.  
    //I don't always do this...in this case the api doesn't have an endpoint to request 
    //one quake.
    this._movies = [];
    

    this.baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=6c3a52ae';
    
  }
  async getEarthQuakesByRadius(position, radius) {
    // use the getJSON function and the position provided to build out the correct URL 
    //to get the data we need.  Store it into this._quakes, then return it
    //console.log("within getEarthQuakesByRadius");
     
      this._quakes = getJSON(this.baseUrl);

    return this._quakes;
  }

  async getQuakeById(id) {    
    // filter this._quakes for the record identified by id and return it
    const features = await this._quakes.then(result => {return result.features;})
    return features.filter(item => item.id === id)[0];
  }
}