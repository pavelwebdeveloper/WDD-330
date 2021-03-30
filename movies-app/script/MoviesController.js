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
  async init(nameForSearch = '') {
    
    this.parentElement = document.querySelector(this.parent);
    
    
    const movieList = await this.movies.getMovies(nameForSearch);
    //console.log(await this.movies.getMovies());
    
    this.parentElement.innerHTML = 'Loading...'; 

    
    
    this.moviesView.renderMoviesList(movieList, this.parentElement);  
    this.parentElement.addEventListener('click', e => {
        
      this.getMovieDetails(e.target.parentElement.getAttribute('data-id'));
  });

  


  document.getElementById("backToListButton").addEventListener('click',  e => {      
    e.target.classList.add("invisible");  
    
    document.querySelector(this.parent).innerHTML = ''; 
    
    let nameForSearch = document.getElementById("searchByName").value;
    this.init(nameForSearch);
  }, false); 

  //document.getElementById('searchByName').addEventListener('keyup', getNameForSearchFromUser, false);

  document.getElementById('searchByName').addEventListener('change', e => {
    let nameForSearch = document.getElementById("searchByName").value;
    

    this.init(nameForSearch);
  }, false);
  
  }

  async getMovieDetails(movieId) {
    // get the details for the quakeId provided from the model, then send them to the view 
    //to be displayed 
    let element = document.querySelector(`[data-id="${movieId}"]`); 
    
    
    
    const movieDetails = await this.movies.getMovieDetailsById(movieId);

    
    
    
    
    
    this.moviesView.renderMovie(movieDetails, element);
    //let elementStorage = element;
      document.querySelector(this.parent).innerHTML = ''; 
      document.querySelector(this.parent).appendChild(element);
      
      document.getElementById("backToListButton").classList.remove("invisible");
   
  }
  
  
   
}   


