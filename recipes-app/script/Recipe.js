import { getData } from './utilities.js';
// Movie Model
export default class Recipe {
  constructor() {   
    this._recipes = [];
    this._favoriteRecipes = [];
    
    this.baseUrl = 'https://api.edamam.com/search?';
    this.urlToGetSomeRecipes = 'https://api.edamam.com/search?q=soup&app_id=2468925c&app_key=bd6464a1072a72672687d0373d5f92a9';    
  }


  async getRecipes(valueForSearch = '', searchType = '') {   
    
   
     if(valueForSearch.length == ''){ 
       
            
            await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then(data => { 
            this._recipes = data.meals;
          });
          
        } else { 
          if(searchType == 'byName'){        
            await getData('https://www.themealdb.com/api/json/v1/1/search.php?s=' + valueForSearch.trim()).then(data => {           
            this._recipes = data.meals;

            console.log("The result of search by name");
            console.log(this._recipes);
            
          });
        } else if(searchType == 'byLetter'){ 
          console.log("I AM HEREEEEEEEEEEEEEEEEEEEEEEEE");   
          console.log(searchType);  
        await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=' + valueForSearch.trim()).then(data => {     
          this._recipes = data.meals;
          console.log("The result of search by letter");
            console.log(this._recipes);
        });
      }
    }
 
    return this._recipes;
  }


  async getRecipeDetailsById(id) {  
    await getData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id.trim()).then(data => {           
            this._recipes = data.meals;
          });
            return this._recipes;
  }

  getFavoriteRecipesList(){
    let storedComments = localStorage.getItem("favoriteRecipes")
            if(storedComments == null){
              this._favoriteRecipes = [];
            } else {
              this._favoriteRecipes = JSON.parse(storedComments)               
            }
            return this._favoriteRecipes;
   }

  saveRecipe(recipeId){       
           
            let type = "favoriteRecipes";
            let idMeal = recipeId;           
        var favoriteRecipe = {idForMeal:idMeal};
        let favoriteRecipes = this.getFavoriteRecipesList();
        favoriteRecipes.push(favoriteRecipe);
        let favoriteRecipesArrayString = JSON.stringify(favoriteRecipes)
        localStorage.setItem(type, favoriteRecipesArrayString);   
  }

  async getFavoriteRecipesData(favoriteRecipes){
    var favoriterecipesData = [];
    for(let i=0; i<favoriteRecipes.length;i++){      
      await getData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + favoriteRecipes[i].idForMeal).then(data => {            
        favoriterecipesData.push(data.meals);        
      });
    }
    return favoriterecipesData;
  }
}