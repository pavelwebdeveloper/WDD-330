import { getData } from './utilities.js';
// Movie Model
export default class Movie {
  constructor() {
    
   
    this._movies = [];
    

    this.baseUrl = 'http://www.omdbapi.com/?apikey=6c3a52ae&s=Alice in Wonderland';
    //this.baseUrl = 'http://www.omdbapi.com/?apikey=6c3a52ae&s=Winnie the Pooh';
    
  }
  async getMovies() {
   
     
      await getData(this.baseUrl).then(data => {
        console.log(data.Search);
        this._movies = data.Search;
      });

    return this._movies;
  }

  
}