import Recipe from './Recipe.js';
import RecipesView from './RecipesView.js';
import Comment from './Comment.js';
import CommentsView from './CommentsView.js';




// Movie controller
export default class RecipesController {
  constructor(recipeListParent, commentListParent) {
    this.parent = recipeListParent;
    this.commentListParent = commentListParent;
    
    
    this.parentElement = null;
    this.commentListParentElement = null;
   
    
    this.recipes = new Recipe();
    this.recipesView = new RecipesView();
    this.comments = new Comment();
    this.commentsView = new CommentsView();
  }
  async init(searchValue = '', searchType = '') {
    
    this.parentElement = document.querySelector(this.parent);
    this.commentListParentElement = document.querySelector(this.commentListParent);
    
    
    const recipeList = await this.recipes.getRecipes(searchValue, searchType);
    //console.log(await this.movies.getMovies());

    //console.log(recipeList);
    
    this.parentElement.innerHTML = 'Loading...'; 

    
    
    this.recipesView.renderRecipesList(recipeList, this.parentElement); 

    
    
    const commentList = this.comments.getCommentList();

    

    
    this.parentElement.addEventListener('click', e => {
        
      this.getRecipeDetails(e.target.parentElement.getAttribute('data-id'));
      //console.log("id inside RecipeController: ");
      //console.log(e.target.parentElement.getAttribute('data-id'));
      
     
      
  });

  


  document.getElementById("backToListButton").addEventListener('click',  e => {      
    e.target.classList.add("invisible"); 
    document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible"); 
    
    document.querySelector(this.parent).innerHTML = ''; 
    document.getElementById("inputComment").innerHTML = '';
    
    let nameForSearch = document.getElementById("searchByName").value;
    let letterForSearch = document.getElementById("searchByFirstLetter").value;
    if(nameForSearch == ''){
      this.init(letterForSearch);
    } else if(letterForSearch == ''){
      this.init(nameForSearch);
    }
    
  }, false); 

  //document.getElementById('searchByName').addEventListener('keyup', getNameForSearchFromUser, false);
  //location.reload();

  document.getElementById('searchByFirstLetter').addEventListener('keyup', e => {
      
    let letterForSearch = document.getElementById("searchByFirstLetter").value;
    let searchType = 'byLetter';
    document.getElementById("searchByName").value = '';
    console.log("document.getElementById(this.parent)");
    console.log(document.querySelector(this.parent));
    
    this.makeElementsInvisibleWhenSearching();
    
    
    this.init(letterForSearch, searchType);
  }, false);


  document.getElementById('searchByName').addEventListener('keyup', e => {
      
    let nameForSearch = document.getElementById("searchByName").value;
    let searchType = 'byName';
    document.getElementById("searchByFirstLetter").value = '';
    this.makeElementsInvisibleWhenSearching();

    
    this.init(nameForSearch, searchType);
  }, false);

  
  
  
  }

  async getRecipeDetails(idMeal) {
    // get the details for the quakeId provided from the model, then send them to the view 
    //to be displayed 
    //let element = document.querySelector(`[data-id="${idMeal}"]`); 
    console.log("inside getRecipeDetails");
    console.log("this.parentElement");
    console.log(this.parentElement);
    let element = this.parentElement; 
    
    
    
    
    const recipeDetails = await this.recipes.getRecipeDetailsById(idMeal);

    
    
    
    
    
    this.recipesView.renderRecipe(recipeDetails, element);
    
      
      document.getElementById("backToListButton").classList.remove("invisible");
      document.getElementById("message").classList.remove("invisible");
      document.getElementById("inputComment").classList.remove("invisible");
      document.getElementById("commentList").classList.remove("invisible");
      const commentList = this.comments.getCommentList();

      this.commentsView.renderCommentsList(commentList, this.commentListParentElement, idMeal); 

      document.getElementById('add_comment').addEventListener('click', e => {    
        this.comments.saveComment();  
        const commentList = this.comments.getCommentList();
        
        this.commentsView.renderCommentsList(commentList, this.commentListParentElement, idMeal); 
      }, false);
   
  }

  makeElementsInvisibleWhenSearching(){
    document.querySelector(this.parent).innerHTML = '';
    let visibilityOfBackToListButton = document.getElementById("backToListButton").classList.value;
    if(visibilityOfBackToListButton == ''){
      document.getElementById("backToListButton").classList.add("invisible");
      document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible");
    }

  }

  
   
}   


