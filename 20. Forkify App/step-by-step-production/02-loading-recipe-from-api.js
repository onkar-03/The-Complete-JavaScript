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

///////////////////////////////////////
// Loading a Recipe from API
const showRecipe = async function () {
  try {
    // --- 1) Loading Recipe:
    // API Request
    const res = await fetch(
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e863b`
    );

    // Convert to Js Object
    const data = await res.json();

    // Check Response
    if (!res.ok) {
      throw new Error(`${data.message}(${res.status})`);
    }

    // Checking Output
    // console.log(res);
    // console.log(data);

    // Reformat Variable Names of Data
    // Making the variable names more readable & generic to understand
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      publisher: recipe.publisher,
    };

    // Checking Output
    console.log(recipe);
  } catch (err) {
    // Catch and Display Error
    alert(err.message);
  }
};

showRecipe();
