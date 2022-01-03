import RecipesController from './RecipesController.js';


const recipesController = new RecipesController('#recipeList', '#commentList');  
    recipesController.init();

    document.getElementById('searchByFirstLetter').addEventListener('focus', e => {
        document.getElementById('searchByName').value = "";
      }, false);

      document.getElementById('searchByName').addEventListener('focus', e => {
        document.getElementById('searchByFirstLetter').value = "";
      }, false);
    