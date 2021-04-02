import RecipesController from './RecipesController.js'
//import getData from './utilities.js'



const recipesController = new RecipesController('#recipeList', '#commentList');  
    recipesController.init();