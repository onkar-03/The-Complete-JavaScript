const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// API
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const showRecipe = async function () {
  try {
    // API Request
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );

    // Convert to Js Object
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message}(${res.status})`);
    }

    console.log(res);
    console.log(data);
  } catch (err) {
    alert(err.message);
  }
};

showRecipe();
