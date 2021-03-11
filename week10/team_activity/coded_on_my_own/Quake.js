import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor(starttime = '2019-01-01', endtime = '2019-02-02') {
    
 //'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
    // this is where we will store the last batch of retrieved quakes in the model.  
    //I don't always do this...in this case the api doesn't have an endpoint to request 
    //one quake.
    this._quakes = [];
    this.starttime = starttime;
    this.endtime = endtime;
    //if(starttime != '' && endtime != ''){

    this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    //this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='+this.starttime+'&endtime='+this.endtime;
    /*} else {
      this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
    }*/
  }
  async getEarthQuakesByRadius(position, radius) {
    // use the getJSON function and the position provided to build out the correct URL 
    //to get the data we need.  Store it into this._quakes, then return it
    //console.log("within getEarthQuakesByRadius");
    console.log("HERE IS THE starttime !!!!!!!!!!!!!!!!!!");  
    console.log(this.starttime);
    console.log("HERE IS THE endtime !!!!!!!!!!!!!!!!!!");  
    console.log(this.endtime);
    console.log("HERE IS THE baseUrl !!!!!!!!!!!!!!!!!!");  
    console.log(this.baseUrl);
      console.log("HERE IS THE RADIUS !!!!!!!!!!!!!!!!!!");
      console.log(radius);
     
      this._quakes = getJSON(this.baseUrl + '&starttime='+ this.starttime+'&endtime='+this.endtime + '&latitude=' + position.lat + '&longitude=' 
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

  /*getDataFromUser(){
    let starttime = document.getElementById("starttime").value;
    let endtime = document.getElementById("endtime").value;
    let radius = document.getElementById("radius").value;
    console.log("FROM SUBMIT");
    console.log(starttime);
    console.log(endtime);
    console.log(radius);
    if(starttime != "" && endtime != ""){
    this.quakes = new Quake(starttime, endtime);
    }
    if(radius != ""){
      radius = parseInt(radius);
      this.radius = radius;
    }

  } */ 
}