function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-text", {
    strings: "Generating recipe...",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
