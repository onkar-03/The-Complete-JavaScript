// Parent Js
// Contains all the necessary functions used multiple times across different views

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

// Export the View class by default
export default class View {
  _data;

  // Public Methods
  // 1. Render Method
  // Used to add a new Element
  render(data, render = true) {
    // If we get no Data / get an Empty Array then display error message
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    // Storing the Recipe data from model.js
    this._data = data;

    // Rendering Data on Page
    // Storing the returned string in a variable 'markup'
    const markup = this._generateMarkup();

    // If render passed is false simply return the generated markup
    if (!render) return markup;

    // Remove Existing Content
    // To remove any pre existing content in the container
    this._clear();

    // Rendering created HTML on Parent Container 'recipeContainer'
    // Rendering as first child of the Container using 'afterbegin' method
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Update Method
  // Used to update the existing Element
  update(data) {
    // If we get no Data / get an Empty Array then display error message
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError(); // Call renderError() method to display an error message
    }

    // Storing the Updated data in this._data
    this._data = data;

    // Render the new Data on the Page
    // We will generate the whole markup again but won't render it ... instead, we will compare it with the old markup and only change text and attributes that have changed from old to new version
    // Generate new HTML markup string based on updated data
    const newMarkup = this._generateMarkup();

    // Convert the Markup String to DOM Object making it easy to compare with the already existing DOM
    // Convert the markup string into a DOM fragment
    /**
     * @method document.createRange().createContextualFragment
     * This method converts the new markup string into a DOM fragment.
     * The DOM fragment allows us to compare the new elements with the current elements in the DOM.
     */
    const newDom = document.createRange().createContextualFragment(newMarkup);

    // Get all elements from the new DOM fragment
    /**
     * @method Array.from
     * This method converts a NodeList into an array. This is used to easily iterate over elements.
     */
    const newElements = Array.from(newDom.querySelectorAll('*'));

    // Get all elements from the current DOM
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );

    newElements.forEach((newEl, i) => {
      const currEl = currentElements[i]; // Corresponding current element

      // Update Changed Texts
      // Check if the new element is different from the current element && Ensure that the element has text content
      /**
       * @method newEl.isEqualNode
       * This method checks if the new element is identical to the current element.
       * It compares the nodes to see if any changes are needed.
       */
      if (
        !newEl.isEqualNode(currEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // Update the text content of the current element
        /**
         * @method currEl.textContent
         * This property sets or returns the text content of the specified node.
         * If the new element has different text content, it updates the current element's text content.
         */
        currEl.textContent = newEl.textContent;
      }

      // Update Changed Attributes
      if (!newEl.isEqualNode(currEl)) {
        // Check if the new element is different from the current element
        /**
         * @method newEl.attributes
         * This property returns a live collection of all attribute nodes registered to the specified node.
         * We use this to update the attributes of the current element to match the new element.
         */

        Array.from(newEl.attributes).forEach(
          // Update the attributes of the current element
          /**
           * @method currEl.setAttribute
           * This method adds a new attribute or changes the value of an existing attribute on the specified element.
           * If the new element has different attributes, it updates the current element's attributes.
           */
          att => currEl.setAttribute(att.name, att.value)
        );
      }
    });
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

  // Render Message
  renderMessage = function (message = this._message) {
    const markup = `
          <div class="message">
            <div>
               <svg>
                <use href="${icons}#icon-smile"></use>
               </svg>
            </div>
            <p>
              ${message}
            </p>
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
