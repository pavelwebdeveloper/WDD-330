import Movie from './Movie.js';
import MoviesView from './MoviesView.js';




// Movie controller
export default class QuakesController {
  constructor(parent) {
    this.parent = parent;
    
    
    this.parentElement = null;
   
    
    this.movies = new Movie();
    this.moviesView = new MoviesView();
  }
  async init() {
    console.log(this.parent);
    this.parentElement = document.querySelector(this.parent);
    
    console.log(this.parentElement);
    this.movies = await this.movies.getMovies();
    //console.log(await this.movies.getMovies());
    console.log(this.movies); 
    this.parentElement.innerHTML = 'Loading...'; 
    this.moviesView.renderMoviesList(this.movies, this.parentElement);  
    this.parentElement.addEventListener('click', e => {
      console.log("child");
      console.log(e.target.value);   
    
  });
  }
 
   
}   


