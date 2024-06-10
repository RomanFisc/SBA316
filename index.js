document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('recipe')
  const formError = document.getElementById("form-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const diet = document.querySelector('select').value;
    if (diet === 'none') {
        formError.textContent = 'Please select a diet type.';
    } else {
        getRecipe(diet);
    }
});

function getRecipe(dietPreference) {
    const applicationId = '968509fe';
    const applicationKey = 'd6ce1fe3e7091aa8c5fd6f6dee111055';
    const baseUrl = 'https://api.edamam.com/search';
    const url = `${baseUrl}?q=&app_id=${applicationId}&app_key=${applicationKey}&health=${dietPreference}`;

    fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data.hits && data.hits.length > 0) {
              const randomRecipe = data.hits[Math.floor(Math.random() * data.hits.length)].recipe;
              displayRecipe(randomRecipe);
          } else {
              throw new Error('No recipes found for the selected dietary restriction.');
          }
      })
      .catch(error => {
          console.error('Error fetching recipe:', error);
          formError.textContent = 'An error occurred while fetching the recipe. Please try again later.';
      });
    }

function displayRecipe(recipe) {
    formError.textContent = '';
    console.log('Title:', recipe.label);
    console.log('Ingredients:', recipe.ingredientLines);
    console.log('Link:', recipe.url);

    let recipeBox = document.createElement('div')
    c
}
});