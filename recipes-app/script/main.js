import RecipesController from './RecipesController.js';


const recipesController = new RecipesController('#recipeList', '#commentList');  
    recipesController.init();