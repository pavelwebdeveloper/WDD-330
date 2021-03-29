import { getData } from './utilities.js';
// Movie Model
export default class Movie {
  constructor() {
    
   
    this._movies = [];
    
    this.baseUrl = 'http://www.omdbapi.com/?';
    this.urlToGetSomeMovies = 'http://www.omdbapi.com/?apikey=6c3a52ae&s=Alice in Wonderland';
    //this.baseUrl = 'http://www.omdbapi.com/?apikey=6c3a52ae&s=Winnie the Pooh';
    this.urlToGetMovieDetails = 'http://www.omdbapi.com/?i=tt3896198&apikey=6c3a52ae';
    
  }
  async getMovies() {
   
     
      await getData(this.baseUrl + 'apikey=6c3a52ae&s=Alice in Wonderland').then(data => {
        console.log(data.Search);
        this._movies = data.Search;
      });

    return this._movies;
  }


  async getMovieDetailsById(id) { 
    const movieDetails = await getData(`${this.baseUrl}i=${id}&apikey=6c3a52ae`)/*.then(data => {
      console.log(data);
      return data;
    });*/
    return movieDetails;
    // filter this._quakes for the record identified by id and return it
    //const movieDetails = await this._quakes.then(result => {return result.features;})
    //return features.filter(item => item.id === id)[0];
  }
  
}