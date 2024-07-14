// --- Importing Icons
// A) Asset Management:
// During development, assets like images and SVG icons are often located in a source directory (e.g., src/img)
// Parcel processes these assets and outputs them into the dist folder, where the optimized production build of your application resides

// B) URL Transformation:
// Parcel can transform the URL of assets during the build process, ensuring that references in your code point to the correct location in the dist folder

// C) Using url: Prefix:
// By using import icons from 'url:../img/icons.svg';, you instruct Parcel to treat the import as a URL
// Parcel will handle the path transformation, so the correct path to the asset is used in the final build
// now we can use the icons var where ever we want to refer to images in the final build
import icons from '../../img/icons.svg';

// --- Handling Fractional Values using fractional npm package
import { Fraction } from 'fractional';
console.log(Fraction);

// --- Using Classes for recipeView
// Class is the best way to go here as we will want many properties & methods private to recipes
// Also we will want many Methods to be inherited by Children from Parent class as well
// So classes are the goto Method Here
class RecipeView {
  // Private Variables
  #parentElement = document.querySelector('.recipe');
  #data;

  // Public Methods

  // 1. Render Method
  render(data) {
    // Storing the Recipe data from model.js
    this.#data = data;

    // Rendering Data on Page

    // Storing the returned string in a variable 'markup'
    const markup = this.#generateMarkup();

    // Remove Existing Content
    // To remove any pre existing content in the container
    this.#clear();

    // Rendering created HTML on Parent Container 'recipeContainer'
    // Rendering as first child of the Container using 'afterbegin' method
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // 2. Load Spinner Method
  renderSpinner = function () {
    // HTML for Spinner
    const markup = `
       <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;
    // Clear the Content of the Container first
    this.#clear();

    // Render the spinner in Parent Container
    // Rendering as first child of the Container using 'afterbegin' method
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  //Private Methods

  // 1. Clear the Content of the Container
  #clear() {
    this.#parentElement.innerHTML = '';
  }

  // 2
  #generateMarkup() {
    // Here the recipe is stored in this.#data hence we use it to refer to all teh Data about recipe received from API server
    // It returns a String as Final Output
    return `
    <figure class="recipe__fig">
    <img src="${this.#data.image}" alt=${
      this.#data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
    <span>${this.#data.title}</span>
    </h1>
    </figure>
    
    <div class="recipe__details">
    <div class="recipe__info">
    <svg class="recipe__info-icon">
    <use href="${icons}#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${
      this.#data.cookingTime
    }</span>
    <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
    <svg class="recipe__info-icon">
    <use href="${icons}#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${
      this.#data.servings
    }</span>
    <span class="recipe__info-text">servings</span>
    
    <div class="recipe__info-buttons">
    <button class="btn--tiny btn--increase-servings">
    <svg>
    <use href="${icons}#icon-minus-circle"></use>
    </svg>
    </button>
    <button class="btn--tiny btn--increase-servings">
    <svg>
    <use href="${icons}#icon-plus-circle"></use>
    </svg>
    </button>
    </div>
    </div>
    
    <div class="recipe__user-generated">
    <svg>
    <use href="${icons}#icon-user"></use>
    </svg>
    </div>
    <button class="btn--round">
    <svg class="">
    <use href="${icons}#icon-bookmark-fill"></use>
    </svg>
    </button>
    </div>
    
    <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    
    ${
      /*
      <!-- For all the Ingredients we want to traverse each one of them and then... render a List element for it on teh Page -->
      <!-- As we want a New String as Output we use .map() as it gives a new array as Output -->
      <!-- We use the .join() to Produce a String from teh given Array  -->*/ ''
    }
    
    ${this.#data.ingredients.map(this.#generateMarkupIngredient).join('')}
      </ul>
      </div>
      
      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this.#data.publisher
          }</span>. Please check out
          directions at their website.
          </p>
          <a
          class="btn--small recipe__btn"
          href="${this.#data.sourceUrl}"
          target="_blank"
          >
          <span>Directions</span>
          <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
          </svg>
          </a>
          </div>
          `;
  }

  // Generate Ingredient
  #generateMarkupIngredient(ing) {
    return `
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
        </svg>

        ${
          /*
      <!-- To convert the Decimal values to Fraction we use the Fraction Library loaded above -->*/ ''
        }
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
        </div>
        </li>
        `;
  }
}

export default new RecipeView();
