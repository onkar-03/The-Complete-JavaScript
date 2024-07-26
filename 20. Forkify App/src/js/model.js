// Polyfilling Async Functions
import 'regenerator-runtime/runtime';

// URL & default value Import
import { API_URL, RES_PER_PAGE, KEY } from './config';

//Importing Commonly used Functions
// import { getJSON, sendJSON } from './helpers';
import { AJAX } from './helpers';

// State Object
// Holds Data necessary for making the Application work
export const state = {
  recipe: {},
  search: {
    // String Searched for
    query: '',
    // Results of Search stored as an Array
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  // An Array to store all the recipes as Bookmarks
  bookmarks: [],
};

// Reformat the properties of received data
const createRecipeObject = function (data) {
  // Reformat Variable Names of Data
  // Making the variable names more readable & generic to understand
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    sourceUrl: recipe.source_url,
    cookingTime: recipe.cooking_time,
    servings: recipe.servings,
    publisher: recipe.publisher,
    // Key handling
    // Add key if it exists in the response
    ...(recipe.key && { key: recipe.key }),
  };
};

// Load Recipe from API
export const loadRecipe = async function (id) {
  try {
    // Fetch Recipe and JSON Data as well together
    // Storing the returning ata from getJSON helper function in data variable
    const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);

    // Reformated properties here
    state.recipe = createRecipeObject(data);

    // Only every reload we fetch the recipe data from API hence the bookmarked recipes are reset
    // To keep them bookmarked as initially by the owner, we check if the id of the retrieved recipe is same as for some of the recipes int the bookmarked array using .some() ?? if yes we set the recipes bookmark to 'true' again
    // Hence we use the Create Bookmarks Array to mark recipes as bookmarked on every reload
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    // Temp Error Handling
    // alert(`${err.message} 💣💣💣`);
    // Errors shouldn't be Handled in Model rather should be handled in view
    // Only the Controller Connects the Model and the View
    // Hence we need to throw the error Object itself from here & then the Controller will call the errors handler of the View with the thrown Error Message
    throw err;
  }
};

// Search Functionality
// Exporting in order to be used further by the controller
export const loadSearchResults = async function (query) {
  try {
    // Setting the query
    state.search.query = query;

    // Fetch the Search Result
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    // Creating a New Array of the recipes received in data
    // The Array contains an Object
    // Storing the data in State Object
    state.search.results = data.data.recipes.map(rec => {
      // Reformat Variable Names of Data
      // Returning a new Object with Refactored Names
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image_url,
        sourceUrl: rec.source_url,
        publisher: rec.publisher,
        // Key handling
        // Add key if it exists in the response
        ...(rec.key && { key: rec.key }),
      };
    });

    // Re-initialize the Page to 1 for new search results
    state.search.page = 1;
  } catch (err) {
    console.log(`${err}💥💥💥`);

    // Throw error for further handling by the controller
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 10

  // Exporting 0-9 Results i.e. the 10 Results to be displayed on one page
  // Slice does not include the end Index value
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  // Update the servings in the Recipe
  state.recipe.ingredients.forEach(ing => {
    // New Quantity = OldQuantity * newServings / Old Servings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  // Update servings in State
  state.recipe.servings = newServings;
};

// Persist Bookmarks using Local Storage
const persistBookmarks = function () {
  // Saving to Local Storage
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// Add Bookmarks
export const addBookmark = function (recipe) {
  // Add recipe to the Array which will contain all the bookmarked recipes
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  // Created a new bookmarked property in recipe with a boolean value
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  //Persist Bookmarks data to Storage on bookmark addition
  persistBookmarks();
};

// Remove Bookmarks
export const deleteBookmark = function (id) {
  // Find index of recipe in bookmarks array for removal
  // And Delete the Recipe from Bookmarks Array using splice() method
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark recipes bookmarked value as false as well
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // Persist Bookmarks data to Storage on bookmark deletion
  persistBookmarks();
};

// Method to Retrieve data of saved Bookmarks from Local Storage
const init = function () {
  // Retrieve Data from Local Storage
  const storage = localStorage.getItem('bookmarks');

  // If storage isn't empty we convert teh String Data back to Object using JSON.parse()
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  // Clear the Bookmarks stored in Local Storage
  // Used while Debugging
  localStorage.clearItem('bookmarks');
};

// clearBookmarks();

// Upload Recipe
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong Ingredients format! Please use the Correct Format ;)'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    // Creating Recipe Object to be sent to the API
    const recipe = {
      title: newRecipe.title,
      image_url: newRecipe.image,
      ingredients,
      source_url: newRecipe.sourceUrl,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      publisher: newRecipe.publisher,
    };

    // Sending the Data about the Recipe created by the User to the API using sendJSON that has the url and the recipe as well
    // Storing the data received from the API in the data variable
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    // console.log(data);

    // Store the Data into the state
    state.recipe = createRecipeObject(data);

    // Bookmark the recipe created by the User
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
