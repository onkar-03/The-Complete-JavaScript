// Parent Class Import
import View from './View.js';

// Parent View import
import previewView from './previewView.js';

// Import Icons
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes found for your Query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    // Returning a String of the Array of Data we have
    // Here we Loop over the Bookmarks and for each of the Bookmarks we render a View in teh Bookmarks results
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

// Exporting new Instance of view
export default new ResultsView();
