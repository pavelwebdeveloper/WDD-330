import canvas from './canvas.js';

// Recipe View handler
export default class RecipesView {
    renderRecipesList(recipesList, listElement, favoriteList) {     
      
      
      if(favoriteList){
        listElement.innerHTML = '';
        for(let i=0;i<recipesList.length;i++){
              listElement.innerHTML += recipesList[i]
            .map(recipe => {
              return `<li data-id="${recipe.idMeal}" class="favoriteRecipe">
         <img class="mealThumb" src="${recipe.strMealThumb}"></img><h3 class="recipeHeading">${recipe.strMeal}</h3>
        </li>`;
            })
            .join('');
    }
      } else {
          listElement.innerHTML = recipesList
          .map(recipe => {
            return `<li data-id="${recipe.idMeal}" class="recipe">
       <img class="mealThumb" src="${recipe.strMealThumb}"></img><h3 class="recipeHeading">${recipe.strMeal}</h3>
      </li>`;
          })
          .join('');
        }
    }

    
    /*async renderFavoriteRecipesList(favoriteRecipesData, parentElement){
      
      console.log("favoriteRecipesData !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(favoriteRecipesData);
  
      this.renderRecipesList(favoriteRecipesData, parentElement); 
    }*/

    
    renderRecipe(recipe, element, favoriteRecipes) {        
     
      document.getElementById("dishCollection").innerHTML = `<canvas id='canvasLikeList'>Sorry, but your browser does not support the canvas element</canvas><br><canvas id="likeListMessage"></canvas>`;


      

      element.innerHTML = "";  
      var ignoreImage = false;
      for(let i=0; i<favoriteRecipes.length;i++ ){  
        if(favoriteRecipes[i].idForMeal == recipe[0].idMeal){
          ignoreImage = true;
          
        }
      }

      if(!ignoreImage){
        element.innerHTML = `<img src="${recipe[0].strMealThumb}" id="${recipe[0].idMeal}" class="draggableImage"></img>`;
      }

    element.innerHTML += `<ul id="detailsList"><li id="${recipe[0].idMeal}"><b>Title</b> ${recipe[0].strMeal}</li>
                          <li><b>Image</b><img src="${recipe[0].strMealThumb}"></img></li>
                          <li><b>cuisineType</b> ${recipe[0].strArea}</li>
                          <li><b>dishType</b> ${recipe[0].strCategory}</li>
                          <li><b>instructions to cook</b> ${recipe[0].strInstructions}</li>
                          <li><b>ingredients</b> <ul id="ingredientsFor${recipe[0].idMeal}"></ul></li>
                          </ul>`;

    if(!ignoreImage){
      canvas.drawDishCollectionBox();
    } else {
      document.getElementById("dishCollection").innerHTML = '';
    }

const inputElement = document.getElementById("inputComment");


            inputElement.innerHTML = "";
            var textarea = document.createElement("textarea");
            textarea.setAttribute("id", "comment_text");
            textarea.setAttribute("placeholder", "You are welcome to leave a comment about the dish in here");
            textarea.setAttribute("rows", "10");
            textarea.setAttribute("cols", "30");
            inputElement.appendChild(textarea);
            var commentMessageElement = document.createElement("p");
            commentMessageElement.setAttribute("id", "commentMessageElement");
            inputElement.appendChild(commentMessageElement);
            var messageElement = document.createElement("p");
            messageElement.setAttribute("id", "anotherMessage");
            inputElement.appendChild(messageElement);
            var button = document.createElement("button");
            button.setAttribute("id", "add_comment");
            var node = document.createTextNode("Add comment");
            button.appendChild(node);
            inputElement.appendChild(button);

            this.renderIngredients(recipe[0], recipe[0].idMeal);       
            document.getElementById("comment_text").addEventListener("mouseover", this.highlightCommentTextarea, false);
            document.getElementById("comment_text").addEventListener("mouseout", this.highlightCommentTextarea, false);            
  }

  highlightCommentTextarea(event){
    event.target.classList.toggle('highlight');
  }

  
  renderIngredients(ingredients, idMeal){    
    
      var ingredientList = ``;
      var ingredientsArray = [];
      var measuresArray = [];

    for (let ingredient in ingredients) {        
      if(ingredient.includes("strIngredient") && ingredients[ingredient] != null && ingredients[ingredient] != ""){
        ingredientsArray.push(ingredients[ingredient]);
       }
       if(ingredient.includes("strMeasure") && ingredients[ingredient] != null && ingredients[ingredient] != ""){
        measuresArray.push(ingredients[ingredient]);
       }
    }    

    for(let i=0; i<ingredientsArray.length;i++){
      for(let x=0; x<measuresArray.length;x++){
        if(i == x){
      ingredientList += `<li><b>${ingredientsArray[i]}</b> - ${measuresArray[x]}</li>`;
        }
      }
    }      

      //return ingredientList;
      document.getElementById(`ingredientsFor${idMeal}`).innerHTML = ingredientList;
  }
  
  
  
}