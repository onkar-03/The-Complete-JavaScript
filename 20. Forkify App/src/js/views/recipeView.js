// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';

// --- Handling Fractional Values using fractional npm package
import { Fraction } from 'fractional';

// --- API:
// https://forkify-api.herokuapp.com/v2

// --- Using Classes for recipeView
// Class is the best way to go here as we will want many properties & methods private to recipes
// Also we will want many Methods to be inherited by Children from Parent class as well
// So classes are the goto Method Here
class RecipeView extends View {
  // Private Variables
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find the Recipe. Please try another one!';
  _message = '';

  _data;
  // Public Methods
  // 1. Render Method
  render(data) {
    // Storing the Recipe data from model.js
    this._data = data;

    // Rendering Data on Page

    // Storing the returned string in a variable 'markup'
    const markup = this._generateMarkup();

    // Remove Existing Content
    // To remove any pre existing content in the container
    this._clear();

    // Rendering created HTML on Parent Container 'recipeContainer'
    // Rendering as first child of the Container using 'afterbegin' method
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
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
    this._clear();

    // Render the spinner in Parent Container
    // Rendering as first child of the Container using 'afterbegin' method
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  // 5. Error Handling
  // Errors should be Handled in View and not in Model
  // Default message is set incase of any need
  renderError = function (message = this._errorMessage) {
    const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

    // Clear any already Existing Content
    this._clear();

    // Inserting HTML
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  // 4. Publisher Subscriber Model
  // Used for Event Listening in View & Event Handling in Controller
  // Linked using Publisher Subscriber Model

  // Publisher Method
  // Getting access to the subscriber i.e. subscriber getting subscribed to publisher
  // Subscriber is which holds the code that needs to be implemented when an event occurs
  // Subscriber here: ControlRecipes from controller.js i.e handler here as argument
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(event =>
      window.addEventListener(event, handler)
    );
  }

  // Handle Servings Update
  addHandlerUpdateServings(handler) {
    // Using event delegation
    // As we have two buttons/children to look for a click, we don't want to listen for both children separately
    // Instead of attaching individual event handlers to each child element, attach a single event handler to the parent element
    // When an event occurs on a child element, it bubbles up to the parent element where the event handler can process it
    this._parentElement.addEventListener('click', event => {
      // Look for the closest button that could possibly be clicked and target that button instead of the whole parent
      // Closest method looks for the closest parent up the Tree unlike the querySelector that looks for children down the Tree
      const btn = event.target.closest('.btn--update-servings');

      // If no button is found, do nothing
      if (!btn) return;

      // Retrieve the new Servings Number from dataset update-to of buttons
      // Destructuring
      const { updateTo } = btn.dataset;

      // Only for positive Servings we call the handler
      // Changing the string to Number
      if (+updateTo > 0) handler(+updateTo);
    });
  }

  // Function to control bookmark actions
  addHandlerAddBookmark(handler) {
    // Using event delegation
    // As we have two buttons/children to look for a click, we don't want to listen for both children separately
    // Instead of attaching individual event handlers to each child element, attach a single event handler to the parent element
    // The bookmarks icon does not exist initially, so its impossible to listen for element from the start load phase of the page when it doesn't exist, hence we listen to the parent element for click using event delegation
    this._parentElement.addEventListener('click', event => {
      // Look for the closest button that could possibly be clicked and target that button instead of the whole parent
      // Closest method looks for the closest parent up the Tree unlike the querySelector that looks for children down the Tree
      const btn = event.target.closest('.btn--bookmark');

      // If no Button was clicked simply Return do nothing
      if (!btn) return;

      // Calling Handler
      handler();
    });
  }

  // 2. Generate Markup
  _generateMarkup() {
    // Here the recipe is stored in this._data hence we use it to refer to all the Data about recipe received from API server
    // It returns a String as Final Output
    return `
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt=${
      this._data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
    <span>${this._data.title}</span>
    </h1>
    </figure>
    
    <div class="recipe__details">
    <div class="recipe__info">
    <svg class="recipe__info-icon">
    <use href="${icons}#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${
      this._data.cookingTime
    }</span>
    <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
    <svg class="recipe__info-icon">
    <use href="${icons}#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${
      this._data.servings
    }</span>
    <span class="recipe__info-text">servings</span>
    
    <div class="recipe__info-buttons">
    <button class="btn--tiny btn--update-servings" data-update-to =${
      this._data.servings - 1
    } >
    <svg>
    <use href="${icons}#icon-minus-circle"></use>
    </svg>
    </button>
    <button class="btn--tiny btn--update-servings" data-update-to =${
      this._data.servings + 1
    } >
    <svg>
    <use href="${icons}#icon-plus-circle"></use>
    </svg>
    </button>
    </div>
    </div>
    
    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
    <svg class="">
    <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
    </svg>
    </button>
    </div>
    
    <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    
    ${
      /*
      <!-- For all the Ingredients we want to traverse each one of them and then... render a List element for it on the Page -->
      <!-- As we want a New String as Output we use .map() as it gives a new array as Output -->
      <!-- We use the .join() to Produce a String from the given Array  -->*/ ''
    }
    
    ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
      </ul>
      </div>
      
      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this._data.publisher
          }</span>. Please check out
          directions at their website.
          </p>
          <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
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

  // 3. Generate Ingredient
  _generateMarkupIngredient(ing) {
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
