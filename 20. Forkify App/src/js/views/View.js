// Parent Js
// Contains all the necessary functions used multiple times across different views

// Import Icons
import icons from '../../img/icons.svg';

// Export the View class by default
export default class View {
  _data;

  // Public Methods
  // 1. Render Method
  render(data) {
    // If we get no Data / get an Empty Array then display error message
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
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

  //Protected Methods
  // 1. Clear the Content of the Container
  _clear() {
    this._parentElement.innerHTML = '';
  }
}
