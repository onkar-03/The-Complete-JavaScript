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
