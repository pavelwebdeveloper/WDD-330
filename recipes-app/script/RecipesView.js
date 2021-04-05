// Recipe View handler
export default class RecipesView {
    renderRecipesList(recipesList, listElement) {

      console.log("listElement");
      console.log(listElement);
      
      listElement.innerHTML = recipesList
      .map(recipe => {
        
        return `<li data-id="${recipe.idMeal}" class="recipe">
  <h3>${recipe.strMeal}</h3> <img class="mealThumb" src="${recipe.strMealThumb}"></img>
  </li>`;
      })
      .join('');
      
    }


    
    renderRecipe(recipe, element) {

        console.log("inside renderRecipe");
        console.log("recipe[0].idMeal");
      console.log(recipe[0].idMeal);
      console.log("element");
      console.log(element);

element.innerHTML = "";     
element.innerHTML = `<ul id="detailsList"><li><b>Title</b> ${recipe[0].strMeal}</li>
<li><b>Image</b> <img src="${recipe[0].strMealThumb}"></img></li>
<li><b>cuisineType</b> ${recipe[0].strArea}</li>
<li><b>dishType</b> ${recipe[0].strCategory}</li>
<li><b>instructions to cook</b> ${recipe[0].strInstructions}</li>
<li><b>ingredients</b> <ul id="ingredientsFor${recipe[0].idMeal}"></ul></li>
</ul>`;


const inputElement = document.getElementById("inputComment");
console.log("inputElement");
      console.log(inputElement);

            inputElement.innerHTML = "";
            var textarea = document.createElement("textarea");
            textarea.setAttribute("id", "comment_text");
            textarea.setAttribute("placeholder", "You are welcome to leave a comment about the dish in here");
            textarea.setAttribute("rows", "10");
            textarea.setAttribute("cols", "30");
            inputElement.appendChild(textarea);
            var button = document.createElement("button");
            button.setAttribute("id", "add_comment");
            var node = document.createTextNode("Add comment");
            button.appendChild(node);
            inputElement.appendChild(button);

            this.renderIngredients(recipe[0], recipe[0].idMeal);        
            //return movieId;

            document.getElementById("comment_text").addEventListener("mouseover", this.highlightRecipe, false);
            document.getElementById("comment_text").addEventListener("mouseout", this.highlightRecipe, false);
  }

  highlightRecipe(event){
    event.target.classList.toggle('highlight');
  }

  
  renderIngredients(ingredients, idMeal){

    console.log("insde renderIngredients");
      //console.log(ingredients.length);
      console.log("ingredients");
      console.log(ingredients);
    
    var ingredientList = ``;
    var ingredientsArray = [];
      var measuresArray = [];
    for (let ingredient in ingredients) {      

      console.log("ingredients[ingredient]");
      console.log(ingredients);
      console.log(ingredients);
      //console.log(ingredients[ingredient].length);
      
      if(ingredient.includes("strIngredient") && ingredients[ingredient] != null && ingredients[ingredient] != ""){
        ingredientsArray.push(ingredients[ingredient]);
       }
       if(ingredient.includes("strMeasure") && ingredients[ingredient] != null && ingredients[ingredient] != ""){
        measuresArray.push(ingredients[ingredient]);
       }
    }

    console.log("ingredientsArray");
      console.log(ingredientsArray);
      console.log(ingredientsArray.length);

      console.log("measuresArray");
      console.log(measuresArray);
      console.log(measuresArray.length);

    for(let i=0; i<ingredientsArray.length;i++){
      for(let x=0; x<measuresArray.length;x++){
        if(i == x){
      ingredientList += `<li><b>${ingredientsArray[i]}</b> - ${measuresArray[x]}</li>`;
        }
      }
    }   

      console.log("inside renderIngredients");
      console.log(idMeal);
      console.log(document.getElementById(`ingredientsFor${idMeal}`));

      //return ingredientList;
      document.getElementById(`ingredientsFor${idMeal}`).innerHTML = ingredientList;
  }
  
  
}