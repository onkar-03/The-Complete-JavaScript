import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// Polyfilling Packages (Methods & Async-Await)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Hot Module Reloading using Parcel
if (module.hot) {
  module.hot.accept();
}

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
    // alert(err.message);

    // Passing the Error message to its rightful place in teh View to be Handled
    recipeView.renderError();
  }
};

//////////////////////////////////
// --- 3) Adding Event Listeners for Load & HashChange

// PART 1
// We want to trigger the Event when the URL hash '#' code changes
// For this we have the hashchange event in .addEventListener()
// Also we want the function controlRecipes to run on hashchange only
// window.addEventListener('hashchange', controlRecipes);

// PART 2
// We also want the Recipe to be displayed when we paste the valid url with id in any browser
// For this we need to trigger the show recipe on 'load' event of .addEventListener
// window.addEventListener('load', controlRecipes);

// PART 3 Refactored Code
// ['hashchange', 'load'].forEach(event =>
//   window.addEventListener(event, controlRecipes)
// );

// Search Controller
const controlSearchResults = async function () {
  try {
    // Render Search spinner in Results Section
    resultsView.renderSpinner();

    // 1. Get Query from Search
    const query = searchView.getQuery();

    // If no Query then Return
    if (!query) return;

    // 2. Load Results
    await model.loadSearchResults(`${query}`);

    // 3. Render Results
    // console.log(model.state.search.results);

    // Render the Data in Search Results Section
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// Using Publisher Subscriber Pattern
// Event Handler: ControlRecipe & controlSearchResults
// Passing the event handler as soon as the program starts to the Event Listener using init() function
const init = function () {
  // Passing the Subscriber ControlRecipes to the Publisher addHandleRender in recipeView
  recipeView.addHandleRender(controlRecipes);
  // Passing the Subscriber controlSearchResults to the Publisher addHandleRender in searchView
  searchView.addHandlerSearch(controlSearchResults);
};

// Calling
init();
