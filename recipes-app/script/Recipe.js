import { getData } from './utilities.js';
// Movie Model
export default class Recipe {
  constructor() {
    
   
    this._recipes = [];
    
    this.baseUrl = 'https://api.edamam.com/search?';
    this.urlToGetSomeRecipes = 'https://api.edamam.com/search?q=soup&app_id=2468925c&app_key=bd6464a1072a72672687d0373d5f92a9';
    //this.baseUrl = 'http://www.omdbapi.com/?apikey=6c3a52ae&s=Winnie the Pooh';
    //this.urlToGetMovieDetails = 'http://www.omdbapi.com/?i=tt3896198&apikey=6c3a52ae';
    
  }
  async getRecipes(nameForSearch = '') {

    //console.log("LENGTH");
    //console.log(nameForSearch.length);
   
     if(nameForSearch.length == 0){
     // await getData(this.baseUrl + 'q=soup&app_id=2468925c&app_key=bd6464a1072a72672687d0373d5f92a9').then(data => {
        await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then(data => { 
      console.log(data.meals);
        this._recipes = data.meals;
      });
      
    } else {
        console.log("letter for search");
        console.log(nameForSearch.length);
      await getData('https://www.themealdb.com/api/json/v1/1/search.php?f=' + nameForSearch.trim()).then(data => {
        console.log("Search");
        console.log(data.meals);
        this._recipes = data.meals;
      });
    }

    return this._recipes;
  }


  async getRecipeDetailsById(id) {  
     console.log("this._recipes"); 
    console.log(this._recipes);
    // filter this._quakes for the record identified by id and return it
    //const details = await this._recipes.then(result => {return result.features;})
    return this._recipes.filter(item => item.idMeal === id);
  }
}