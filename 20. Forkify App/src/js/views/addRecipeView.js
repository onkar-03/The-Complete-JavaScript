// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';
import { RES_PER_PAGE } from '../config.js';

// Inheritance
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');

  //Button to Open & Close the Form
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  // We want the Function Listening for events to be called as soon as the Page Loads
  // However, there is nothing special happening in here that the controller needs to tell us, all that happens is teh Window to Show up on the Click
  // So we create a constructor which gets called as soon as the Object is created and pass the function in it to run as soon as the page loads
  constructor() {
    // Call the constructor of Parent Class View first
    super();

    // Run functions that need to be called as soon as the page loads
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  // Toggle Window used to toggle class addition and removal
  toggleWindow() {
    // Remove / Add .hidden class using toggle
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  // Handler Function
  // Listening to the Event of opening and closing the Form
  _addHandlerShowWindow() {
    // Using bind to Point this to the current Object and no the _btnOpen
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    // Using bind to Point this to the current Object and no the _btnOpen
    // Close on clicking on Close Button
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));

    // Close window on clicking outside the box on the Overlay
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  // Handling Form Uploads
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      // Prevent Default Loading of the Form
      e.preventDefault();

      // Using FormData to Submit all the fields data on clicking Submit
      // Inside theForm Data we need to pass the arg which is a form which here is the current Object hence 'this' keyword

      // newRecipe is the Data we want to add as a new recipe to our recipes list as a User Recipe
      // Object.fromEntries converts the Data Array into Object
      // Object.fromEntries() is opposite of .entries(), where entries convert the Object to An array and .fromEntries() convert Array of Data to Object
      const newRecipeArray = [...new FormData(this)];
      const newRecipe = Object.fromEntries(newRecipeArray);

      handler(newRecipe);
    });
  }

  _generateMarkup() {}
}

// All we need to do is import it in the controller.js
// Else this file wont be executed, hence object wont be created and we cant listen to clicks for the buttons too
export default new AddRecipeView();
