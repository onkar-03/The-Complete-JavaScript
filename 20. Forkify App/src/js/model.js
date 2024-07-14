// State Object
// Holds Data necessary for making the Application work
export const state = {
  recipe: {},
};

// Load Recipe from API
export const loadRecipe = async function (id) {
  try {
    // API Request
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e863b`
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
    alert(err.message);
  }
};
