import Movie from './Movie.js';
import MoviesView from './MoviesView.js';
import Comment from './Comment.js';
import CommentsView from './CommentsView.js';




// Movie controller
export default class QuakesController {
  constructor(movieListParent, commentListParent) {
    this.parent = movieListParent;
    this.commentListParent = commentListParent;
    
    
    this.parentElement = null;
    this.commentListParentElement = null;
   
    
    this.movies = new Movie();
    this.moviesView = new MoviesView();
    this.comments = new Comment();
    this.commentsView = new CommentsView();
  }
  async init(nameForSearch = '') {
    
    this.parentElement = document.querySelector(this.parent);
    this.commentListParentElement = document.querySelector(this.commentListParent);
    
    
    const movieList = await this.movies.getMovies(nameForSearch);
    //console.log(await this.movies.getMovies());
    
    this.parentElement.innerHTML = 'Loading...'; 

    
    
    this.moviesView.renderMoviesList(movieList, this.parentElement); 
    
    const commentList = this.comments.getCommentList();

    

    this.commentsView.renderCommentsList(commentList, this.commentListParentElement); 
    this.parentElement.addEventListener('click', e => {
        
      this.getMovieDetails(e.target.parentElement.getAttribute('data-id'));
  });

  


  document.getElementById("backToListButton").addEventListener('click',  e => {      
    e.target.classList.add("invisible");  
    
    document.querySelector(this.parent).innerHTML = ''; 
    document.getElementById("inputComment").innerHTML = '';
    
    let nameForSearch = document.getElementById("searchByName").value;
    this.init(nameForSearch);
  }, false); 

  //document.getElementById('searchByName').addEventListener('keyup', getNameForSearchFromUser, false);

  document.getElementById('searchByName').addEventListener('keyup', e => {
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

      this.comments.saveComment();
   
  }
  
  
   
}   


