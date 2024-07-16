// Polyfilling Async Functions
import 'regenerator-runtime/runtime';

// URL Import
import { API_URL } from './config';

//Importing Commonly used Functions
import { getJSON } from './helpers';

// State Object
// Holds Data necessary for making the Application work
export const state = {
  recipe: {},
  search: {
    // String Searched for
    query: '',
    // Results of Search stored as an Array
    results: [],
  },
};

// Load Recipe from API
export const loadRecipe = async function (id) {
  try {
    // Fetch Recipe and JSON Data as well together
    // Storing the returning ata from getJSON helper function in data variable
    const data = await getJSON(`${API_URL}/${id}`);

    // Reformat Variable Names of Data
    // Making the variable names more readable & generic to understand
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      publisher: recipe.publisher,
    };
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
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

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
      };
    });
  } catch (err) {
    console.log(`${err}💥💥💥`);

    // Throw error for further handling by the controller
    throw err;
  }
};

loadSearchResults(`pizza`);
