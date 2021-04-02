// Recipe View handler
export default class RecipesView {
    renderRecipesList(recipesList, listElement) {

      console.log("recipesList");
      console.log(recipesList);
      
      listElement.innerHTML = recipesList
      .map(recipe => {
        
        return `<li data-id="${recipe.idMeal}" class="recipe">
  <h3>${recipe.strMeal}</h3>
  </li>`;
      })
      .join('');
    }


    
    renderRecipe(recipe, element) {

        console.log("inside renderRecipe");
      console.log(recipe);

element.innerHTML = `<ul id="detailsList"><li><b>Title</b> ${recipe[0].strMeal}</li>
<li><b>Image</b> <img src="${recipe[0].strMealThumb}"></img></li>
<li><b>cuisineType</b> ${recipe[0].strArea}</li>
<li><b>dishType</b> ${recipe[0].strCategory}</li>
<li><b>instructions</b> ${recipe[0].strInstructions}</li>


</ul>`;

//<li><b>healthLabels</b> ${this.renderHealthLabels(recipe[0].recipe.healthLabels)}</li>
// <li><b>ingredients</b> ${this.renderIngredients(recipe[0].recipe.ingredients)}</li>

const inputElement = document.getElementById("inputComment");
            inputElement.innerHTML = "";
            var input = document.createElement("input");
            input.setAttribute("id", "comment_text");
            inputElement.appendChild(input);
            var button = document.createElement("button");
            button.setAttribute("id", "add_comment");
            var node = document.createTextNode("Add comment");
            button.appendChild(node);
            inputElement.appendChild(button);

    
            //return movieId;
  }

  
  renderIngredients(ingredients){
    return ingredients.map(ingredient => {
        
        return `<ul><li>
  <h3>${ingredient.text}</h3><p><b>weight: </b>${ingredient.weight}</p> <img src="${ingredient.image}"></img>
  </li></ul>`;
        
      })
      .join('');
  }

  renderHealthLabels(healthLabels){
    return healthLabels.map(healthLabel => {
        
        return `<ul><li>${healthLabel}</li></ul>`;        
      })
      .join('');
  }
  
}