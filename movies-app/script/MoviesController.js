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
    const movieList = await this.movies.getMovies();
    //console.log(await this.movies.getMovies());
    console.log(this.movies); 
    this.parentElement.innerHTML = 'Loading...'; 
    
    this.moviesView.renderMoviesList(movieList, this.parentElement);  
    this.parentElement.addEventListener('click', e => {
      //console.log("child");
      //console.log(e.target.parentElement.getAttribute('data-id'));    
      this.getMovieDetails(e.target.parentElement.getAttribute('data-id'));
  });
  }

  async getMovieDetails(movieId) {
    // get the details for the quakeId provided from the model, then send them to the view 
    //to be displayed 
    let element = document.querySelector(`[data-id="${movieId}"]`); 
    console.log(element);
    console.log(this.movies);
    
    
    const movieDetails = await this.movies.getMovieDetailsById(movieId);

    
    
    
    console.log("movieDetails &&&&&&&&&&&&&&");
    console.log(movieDetails);
    
    this.moviesView.renderMovie(properties, element);
    let elementStorage = element;
      document.querySelector('[id="quakeList"]').innerHTML = ''; 
      document.querySelector('[id="quakeList"]').appendChild(elementStorage);
      console.log("THE CLASSES:    ");
      console.log(document.getElementById("backToListButton"));
      document.getElementById("backToListButton").classList.remove("invisible");
   
  }
  
 
   
}   


