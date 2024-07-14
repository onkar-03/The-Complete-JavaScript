import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Polyfilling Packages (Methods & Async-Await)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Parent Container
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// --- API:
// https://forkify-api.herokuapp.com/v2

// Loading a Recipe from API
const controlRecipes = async function () {
  try {
    // Retrieve the hash code from url
    // EG: #664c8f193e7aa067e94e863b -> hash code
    // EG: 664c8f193e7aa067e94e863b -> id
    // For this we use the window.location === Entire URL
    // .hash is used to retrieve the hash '#' part only: #664c8f193e7aa067e94e863b
    // .slice(1) used to remove the starting # symbol from hash-code to get the id -> 664c8f193e7aa067e94e863b
    const id = window.location.hash.slice(1);
    // console.log(id);

    // Incase there is no id initially simply return to default page
    if (!id) return;

    // While Loading Recipe we want the Spinner to be displayed
    recipeView.renderSpinner();

    // --- 1) Loading Recipe:
    // Load Recipe
    // loadRecipe is an async function in model.js hence we get a 'Promise'
    // So we await until the Promise is settled
    // No storing of the Response as we don't return anything
    await model.loadRecipe(id);

    // --- 2) Rendering Recipe:

    // To render the Recipe passing the Retrieved data about recipe from API to recipe View
    recipeView.render(model.state.recipe);
  } catch (err) {
    // Catch and Display Error
    alert(err.message);
  }
};

//////////////////////////////////
// --- 3) Adding Event Listeners for Load & HashChange

// PART 1
// We want to trigger the Event when the URL hash '#' code changes
// For this we have the hashchange event in .addEventListener()
// Also we want the function showRecipe to run on hashchange only
// window.addEventListener('hashchange', showRecipe);

// PART 2
// We also want the Recipe to be displayed when we paste the valid url with id in any browser
// For this we need to trigger the show recipe on 'load' event of .addEventListener
// window.addEventListener('load', showRecipe);

// Refactored Code
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, showRecipe)
);
