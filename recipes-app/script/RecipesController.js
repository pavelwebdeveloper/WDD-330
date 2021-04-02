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
  async init(nameForSearch = '') {
    
    this.parentElement = document.querySelector(this.parent);
    this.commentListParentElement = document.querySelector(this.commentListParent);
    
    
    const recipeList = await this.recipes.getRecipes(nameForSearch);
    //console.log(await this.movies.getMovies());

    console.log(recipeList);
    
    this.parentElement.innerHTML = 'Loading...'; 

    
    
    this.recipesView.renderRecipesList(recipeList, this.parentElement); 
    
    const commentList = this.comments.getCommentList();

    

    
    this.parentElement.addEventListener('click', e => {
        
      this.getRecipeDetails(e.target.parentElement.getAttribute('data-id'));
      console.log("id inside RecipeController: ");
      console.log(e.target.parentElement.getAttribute('data-id'));
      
     
      
  });

  


  document.getElementById("backToListButton").addEventListener('click',  e => {      
    e.target.classList.add("invisible"); 
    document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible"); 
    
    document.querySelector(this.parent).innerHTML = ''; 
    document.getElementById("inputComment").innerHTML = '';
    
    let nameForSearch = document.getElementById("searchByName").value;
    this.init(nameForSearch);
  }, false); 

  //document.getElementById('searchByName').addEventListener('keyup', getNameForSearchFromUser, false);
  //location.reload();
  document.getElementById('searchByName').addEventListener('keyup', e => {
      
    let nameForSearch = document.getElementById("searchByName").value;
    

    this.init(nameForSearch);
  }, false);

  
  
  
  }

  async getRecipeDetails(recipeUri) {
    // get the details for the quakeId provided from the model, then send them to the view 
    //to be displayed 
    let element = document.querySelector(`[data-id="${recipeUri}"]`); 
    
    
    
    
    const recipeDetails = await this.recipes.getRecipeDetailsById(recipeUri);

    console.log("recipeDetails");
    console.log(recipeDetails);
    
    
    
    
    this.recipesView.renderRecipe(recipeDetails, element);
    //console.log("getting id");
    //console.log(document.getElementById("recipeList"));
    //let recipe_uri = document.getElementById("recipeList").firstChild.getAttribute('data-id');
    console.log("recipe_uri");
    //console.log(recipe_uri);
    //console.log("inside renderRecipe");
    //console.log(recipeUri);
    //let elementStorage = element;
      document.querySelector(this.parent).innerHTML = ''; 
      document.querySelector(this.parent).appendChild(element);
      
      document.getElementById("backToListButton").classList.remove("invisible");
      document.getElementById("message").classList.remove("invisible");
      document.getElementById("inputComment").classList.remove("invisible");
      document.getElementById("commentList").classList.remove("invisible");
      const commentList = this.comments.getCommentList();

      this.commentsView.renderCommentsList(commentList, this.commentListParentElement, recipeUri); 

      document.getElementById('add_comment').addEventListener('click', e => {    
        this.comments.saveComment();  
        const commentList = this.comments.getCommentList();
        console.log("commentList inside MovieController inside renderRecipe: ");
      console.log(commentList);
        this.commentsView.renderCommentsList(commentList, this.commentListParentElement, recipeUri); 
      }, false);
   
  }
  
  
   
}   


