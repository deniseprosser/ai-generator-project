function displayRecipe(response) {
  new Typewriter("#recipe-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 2,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-input");
  let apiKey = "aab3d3obc0205ebt561454f09dff85ec";
  let prompt = `user instructions: create a recipe using the ingredients from ${promptInput.value}`;
  let context =
    "you are an expert chef who can create simple and delicious recipes from any cuisine. Your mission is to create a simple recipe using the ingredients listed in the user instructions. Make sure to follow the user instructions. Present the recipe in basic HTML format. Do not include '```html` at the start of the answer";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-text");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe using ${promptInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
