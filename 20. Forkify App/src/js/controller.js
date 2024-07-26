import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from '../../../searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// Polyfilling Packages (Methods & Async-Await)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Hot Module Reloading using Parcel
if (module.hot) {
  module.hot.accept();
}

// --- Controllers / Event Handlers
// Recipe Controller
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

    // 0. Update Results View to mark the selected recipe
    resultsView.update(model.getSearchResultsPage());

    //3. Update bookmarks view whenever we update / load a recipe
    bookmarksView.update(model.state.bookmarks);

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

    // Passing the Error message to its rightful place in the View to be Handled
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
    // Here we displayed all the Results in a single Page
    // resultsView.render(model.state.search.results);

    // Now displaying only 10 Results per page
    // passing no arguments is same as stating page 1 as in getSearchResults() method in model.js we have assigned default value of page as 1
    resultsView.render(model.getSearchResultsPage(1));

    // 4. Render Pagination Buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

// Pagination Controller
const controlPagination = function (goToPage) {
  console.log('Page Controller', goToPage);

  // 3. Render New Results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 4. Render New Pagination Buttons
  paginationView.render(model.state.search);
};

// Control Servings
const controlServings = function (newServings) {
  // Update the Recipe Serving in the State
  model.updateServings(newServings);

  // Update the Recipe View
  // Render the Recipe all of it again
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1. Add / Remove Bookmarks
  // If recipe not Bookmarked run this to add it top bookmarks on a click
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  // Else if recipe already bookmarked run this to remove the bookmark on a click
  else model.deleteBookmark(model.state.recipe.id);

  // 2. Update recipe after the actions to view Bookmarks
  recipeView.update(model.state.recipe);

  // 3. Update Bookmarks in the UI
  // Render Bookmarks in the View
  bookmarksView.render(model.state.bookmarks);
};

// Bookmarks Controller
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  // Log the Object created in addHandlerUpload
  // console.log(newRecipe);

  try {
    // Render Spinner
    addRecipeView.renderSpinner();

    // Upload the new Recipe
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe in the RecipeView
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render Bookmark View
    // To add the Newly added Recipe as a Bookmark ib the Bookmarks list on the Page
    bookmarksView.render(model.state.bookmarks);

    // Change Recipe Id in URL to the new Recipe Id that was added
    // We use the History API to do this
    // window.history.pushState(state,title,url)
    // state: An object containing the state to be associated with the new history entry.
    // title: A string representing the title of the new history entry. This argument is largely ignored by most browsers, so you can pass an empty string ('')
    // url: A string representing the URL of the new history entry
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close From Window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥💥', err.message);

    addRecipeView.renderError(err.message);
  }
};

// Using Publisher Subscriber Pattern
// Passing the event handler as soon as the program starts to the Event Listener using init() function
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);

  // Passing the Subscriber ControlRecipes to the Publisher addHandlerRender in recipeView
  recipeView.addHandlerRender(controlRecipes);

  // Passing the Subscriber controlServings to the Publisher addHandlerUpdateServings in recipeView
  recipeView.addHandlerUpdateServings(controlServings);

  // Passing the Subscriber controlAddBookmark to the Publisher addHandlerAddBookmark in recipeView
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  // Passing the Subscriber controlSearchResults to the Publisher addHandlerRender in searchView
  searchView.addHandlerSearch(controlSearchResults);

  // Passing the Subscriber controlPagination to the Publisher addHandlerClick in paginationView
  paginationView.addHandlerClick(controlPagination);

  // Passing the Subscriber controlAddRecipe to the Publisher addHandlerUpload in addRecipeView
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

// Calling as soon as the Program Starts
init();
