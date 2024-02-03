let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInput = document.getElementById("input").value;
let image = document.getElementById("foodIcon");
let dishName = document.querySelector("#name p");
let dishArea = document.querySelector("#name h5");
let recipeBtn = document.querySelector("#recipeBtn");
let recipeCard = document.querySelector("#recipeCard");
let closeIcon = document.querySelector("#close");
let Instructions = document.querySelector("#recipeCard p"); 
let ingredientsList = document.querySelector("#ingredients");
let searchBtn = document.querySelector("#search");
let card = document.querySelector("#card");
searchBtn.addEventListener("click", function(){
    let userInput = document.getElementById("input").value;
    if(userInput.length == 0){
        alert("input field is empty");

    }
    else{
        fetch(url+userInput)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let myMeal= data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strInstructions);
    let count = 1;
    let ingredients = [];
    for(let i in myMeal){
        let ingredient =""
        let measure = ""
        if(i.startsWith("strIngredient")&& myMeal[i]){
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure`+count];

            count = count + 1;
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    console.log(ingredients);
    image.src = myMeal.strMealThumb;
    dishName.innerText = myMeal.strMeal;
    dishArea.innerText= myMeal.strArea;
    Instructions.innerHTML= myMeal.strInstructions;
    ingredients.forEach((i)=>{
        let child = document.createElement("li");
        child.innerText = i;
        ingredientsList.appendChild(child);

    })




  });


    }
})

function closeCard(){
    recipeCard.style.display = "none";
    card.style.display ="block";
}
let getRecipe = ()=>{
    recipeCard.style.display = "block";
    card.style.display = "none";
   

}

recipeBtn.addEventListener("click", getRecipe);


