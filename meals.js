const searchBtn=document.getElementById('search-btn')
searchBtn.addEventListener('click',function(){
   
 
    const searchBox=document.getElementById('search-box').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchBox}`)
        .then(response => response.json())
        .then(data =>displayMeals(data));
    
    const displayMeals = (data) => {
        const Main = document.getElementById('main')
        let mealInfo=""
       if(data.meals){
        data.meals.forEach(meal => {
            const Meal = document.createElement('div')
            Meal.className="oneItem"
             mealInfo = `
            <button onclick="mealDetails('${meal.strMeal}')">
                <img class="picture" src="${meal.strMealThumb}">
                <h4>${meal.strMeal}</h4>
            </button>
            `;
            Meal.innerHTML = mealInfo;
            Main.appendChild(Meal);
    
        });
    
       }
       else{
        // mealInfo=`<h1 id="notice">Data is not found!</h1>`
        // const notGet = document.getElementById('main');
        // notGet.innerHTML=mealInfo;
        alert("This data in not found!");
       }
    }

})

// console.log(data.meals[0].strMeal)

const mealDetails=(name)=>{
    const nameURL=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(nameURL)
    .then(response=>response.json())
    .then(data=>getMealDetails(data.meals[0]))

}

const getMealDetails=meal=>{
    console.log(meal)
    const mealDetails=document.getElementById('meal-details');
    
    mealDetails.innerHTML=`
    <div id="viewDetails">
    <img class="picture" src="${meal.strMealThumb}">
    <h2>${meal.strMeal}</h2>
    <h3>Food Area: ${meal.strArea}</h3>
    <h3> Food Category: ${meal.strCategory}</h3>
    <p>Ingredient1: ${meal.strIngredient1}</p>
    <p>Ingredient2: ${meal.strIngredient2}</p>
    <p>Ingredient3: ${meal.strIngredient3}</p>
    <p>Ingredient4: ${meal.strIngredient4}</p>
    <p>Ingredient5: ${meal.strIngredient5}</p>
    <p>Ingredient6: ${meal.strIngredient6}</p>
    </div>
    `;
    console.log(mealDetails)
}






