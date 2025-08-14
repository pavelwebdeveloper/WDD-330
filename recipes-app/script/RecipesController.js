import Recipe from './Recipe.js';
import RecipesView from './RecipesView.js';
import Comment from './Comment.js';
import CommentsView from './CommentsView.js';
import canvas from './canvas.js';




// Movie controller
export default class RecipesController {
  constructor(recipeListParent, commentListParent) {
    this.parent = recipeListParent;
    this.commentListParent = commentListParent;
    
    
    this.parentElement = null;
    this.commentListParentElement = null;
   
    
    this.recipes = new Recipe();
    this.recipesView = new RecipesView(); 
    //this.favoriteRecipesInfo;
    this.comments = new Comment();
    this.commentsView = new CommentsView();


    this.searchType = '';
    //this.controller = this;
  }
  async init(searchValue = '', searchType = '') {


    canvas.showLogo();
    
    this.parentElement = document.querySelector(this.parent);
    this.commentListParentElement = document.querySelector(this.commentListParent);
    
    
    
    const recipeList = await this.recipes.getRecipes(searchValue, searchType);
    
    var favoriteRecipes = this.recipes.getFavoriteRecipesList();
    var favoriteRecipesData = await this.recipes.getFavoriteRecipesData(favoriteRecipes);    
    
    this.parentElement.innerHTML = 'Loading...';     
    
    this.recipesView.renderRecipesList(recipeList, this.parentElement); 

    
    if(favoriteRecipes.length > 0){
      console.log("favoriteRecipes.length");
      console.log(favoriteRecipes.length);
      document.getElementById("favoriteRecipes").classList.remove("invisible");


      // click event for mouse clicks
      document.getElementById("favoriteRecipes").addEventListener('click', e => {
        document.getElementById("favoriteRecipes").classList.add("invisible");
        let nameForSearchElement = document.getElementById("searchByName");
        let letterForSearchElement = document.getElementById("searchByFirstLetter");
        nameForSearchElement.value = '';
        letterForSearchElement.value = '';        
        let listElement = document.getElementById("recipeList");
        let favoriteList = true;        
        this.recipesView.renderRecipesList(favoriteRecipesData, listElement, favoriteList);          
    });

    // touchend event for portable devices
    document.getElementById("favoriteRecipes").addEventListener('touchend', e => {
      document.getElementById("favoriteRecipes").classList.add("invisible");
      let nameForSearchElement = document.getElementById("searchByName");
      let letterForSearchElement = document.getElementById("searchByFirstLetter");
      nameForSearchElement.value = '';
      letterForSearchElement.value = '';      
      let listElement = document.getElementById("recipeList");
      let favoriteList = true;      
      this.recipesView.renderRecipesList(favoriteRecipesData, listElement, favoriteList);      
  });
    }    
    
    const commentList = this.comments.getCommentList();

    

      // click event for mouse clicks
      this.parentElement.addEventListener('click', e => {  
        console.log("What is the parent element ?");  
        console.log(e.target.parentElement); 
        console.log("What is the data-id for parent element ?");  
        console.log(e.target.parentElement.getAttribute('data-id')); 
        
        this.getRecipeDetails(e.target.parentElement.getAttribute('data-id'), e.target.parentElement);
        document.getElementById("favoriteRecipes").classList.add("invisible");     
    });

      // touchend event for portable devices
      this.parentElement.addEventListener('touchend', e => {        
        this.getRecipeDetails(e.target.parentElement.getAttribute('data-id'), e.target.parentElement);
        document.getElementById("favoriteRecipes").classList.add("invisible");   
    });

    this.parentElement.addEventListener('click', e => {     
      this.getRecipeDetails(e.target.getAttribute('data-id'), e.target);
      document.getElementById("favoriteRecipes").classList.add("invisible");     
  });

    // touchend event for portable devices
    this.parentElement.addEventListener('touchend', e => {        
      this.getRecipeDetails(e.target.getAttribute('data-id'), e.target);
      document.getElementById("favoriteRecipes").classList.add("invisible");   
  });

  

  // click event for mouse clicks
  document.getElementById("backToListButton").addEventListener('click',  e => { 
    
    
      document.getElementById("dishCollection").innerHTML = "";    
      e.target.classList.add("invisible"); 
      document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible"); 
      document.getElementById("backToFavoriteRecipesList").classList.add("invisible");    
      document.querySelector(this.parent).innerHTML = ''; 
      document.getElementById("inputComment").innerHTML = '';
      document.getElementById("favoriteRecipes").classList.add("invisible");      
      let nameForSearch = document.getElementById("searchByName").value;
      let letterForSearch = document.getElementById("searchByFirstLetter").value;
      
      if(nameForSearch == ''){
        let searchType = 'byLetter';
        this.init(letterForSearch, searchType);
      } else if(letterForSearch == ''){
        let searchType = 'byName';
        this.init(nameForSearch, searchType);
      }    
  }, false); 


   // touchend event for portable devices
  document.getElementById("backToListButton").addEventListener('touchend',  e => {  
      document.getElementById("dishCollection").innerHTML = "";    
      e.target.classList.add("invisible"); 
      document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible"); 
      document.getElementById("backToFavoriteRecipesList").classList.add("invisible");    
      document.querySelector(this.parent).innerHTML = ''; 
      document.getElementById("inputComment").innerHTML = '';
      document.getElementById("favoriteRecipes").classList.add("invisible");      
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

  document.getElementById('searchByFirstLetter').addEventListener('keyup', async e => {
    document.getElementById("dishCollection").innerHTML = "";
    document.getElementById("backToFavoriteRecipesList").classList.add("invisible");      
    let letterForSearch = document.getElementById("searchByFirstLetter").value;
    let searchType = 'byLetter';
    document.getElementById("searchByName").value = '';
    console.log("document.getElementById(this.parent)");
    console.log(document.querySelector(this.parent));    
    this.makeElementsInvisibleWhenSearching();    
    //this.init(letterForSearch, searchType);
    const recipeList = await this.recipes.getRecipes(letterForSearch, searchType);
    if(recipeList == null){
      this.parentElement.innerHTML = '<b style="color:red;">Sorry, no results for this letter</b>'; 
       
    } else {
    this.recipesView.renderRecipesList(recipeList, this.parentElement); 
    }
  }, false);


  document.getElementById('searchByName').addEventListener('keyup', async e => {
    document.getElementById("dishCollection").innerHTML = "";
    document.getElementById("backToFavoriteRecipesList").classList.add("invisible");      
    let nameForSearch = document.getElementById("searchByName").value;
    let searchType = 'byName';
    document.getElementById("searchByFirstLetter").value = '';
    this.makeElementsInvisibleWhenSearching();    
    //this.init(nameForSearch, searchType);
    const recipeList = await this.recipes.getRecipes(nameForSearch, searchType);
    if(recipeList == null){
      this.parentElement.innerHTML = '<b style="color:red;">Sorry, no results for this word</b>';
    } else {
    this.recipesView.renderRecipesList(recipeList, this.parentElement); 
    }
  }, false); 
  
  }



  async getRecipeDetails(idMeal, listElement) {   
    
    let element = this.parentElement; 
    const recipeDetails = await this.recipes.getRecipeDetailsById(idMeal); 

   
    
    var elementClassList = listElement.classList;  
    
    var favoriteRecipes = this.recipes.getFavoriteRecipesList();
    var favoriteRecipesData = await this.recipes.getFavoriteRecipesData(favoriteRecipes);
    this.recipesView.renderRecipe(recipeDetails, element, favoriteRecipes);

    if(elementClassList.value == "favoriteRecipe"){
    document.getElementById("backToFavoriteRecipesList").classList.remove("invisible");

    document.getElementById("backToFavoriteRecipesList").addEventListener('click', e => {
      document.getElementById("backToFavoriteRecipesList").classList.add("invisible");
      document.getElementById("message").classList.add("invisible");
      document.getElementById("inputComment").classList.add("invisible");
      document.getElementById("commentList").classList.add("invisible");      
      let listElement = document.getElementById("recipeList");
      let favoriteList = true;      
      this.recipesView.renderRecipesList(favoriteRecipesData, listElement, favoriteList);        
  });
    }

    if(document.querySelector("img.draggableImage") != null){
    var imageToDrag = document.querySelector("img.draggableImage");
    var recipeName = document.querySelector("img.draggableImage").nextSibling.firstChild.firstChild.nextSibling.textContent;
    }

      this.dragImage(this.recipes, imageToDrag, recipeName);
      
      document.getElementById("backToListButton").classList.remove("invisible");
      document.getElementById("message").classList.remove("invisible");
      document.getElementById("inputComment").classList.remove("invisible");
      document.getElementById("commentList").classList.remove("invisible");
      const commentList = this.comments.getCommentList();

      this.commentsView.renderCommentsList(commentList, this.commentListParentElement, idMeal); 

      // click event for mouse clicks
      document.getElementById('add_comment').addEventListener('click', e => {    
        this.comments.saveComment();  
        const commentList = this.comments.getCommentList();        
        this.commentsView.renderCommentsList(commentList, this.commentListParentElement, idMeal); 
      }, false);   


      // touchend event for portable devices
      document.getElementById('add_comment').addEventListener('touchend', e => {    
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

  dragImage(recipesObject, imageToDrag, recipeName){   
    if(imageToDrag != null){
    imageToDrag.addEventListener('dragstart', function (event) {
      // handle the dragstart event
      event.dataTransfer.setData("text/plain", this.id);
      });
    }

      var likeList = document.getElementById("canvasLikeList");
      if(likeList != null){
          likeList.addEventListener("dragover", function(event) {
          event.preventDefault();
          });
       }

      if(likeList != null){
      likeList.addEventListener("drop", function(event) { 

              var likeListMessageElement = document.getElementById('likeListMessage');
              var dishID = event.dataTransfer.getData("text/plain");
              canvas.showLikeListMessage(likeListMessageElement, recipeName);

              event.preventDefault();
              recipesObject.saveRecipe(dishID);
          })
      }

  }  
}   


