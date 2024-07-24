// Parent Class Import
import View from './View.js';

// Parent View import
import previewView from './previewView.js';

// Import Icons
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a recipe and bookmark it ;)';
  _message = '';

  _generateMarkup() {
    // Returning a String of the Array of Data we have
    // Here we Loop over the Bookmarks and for each of the Bookmarks we render a View in teh Bookmarks results
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

// Exporting new Instance of view
export default new BookmarksView();
