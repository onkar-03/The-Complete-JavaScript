// Parent Class Import
import View from './View.js';

// Parent View import
import previewView from './previewView.js';

// Import Icons
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // Returning a String of the Array of Data we have
    // Here we Loop over the Bookmarks i.e. 'this._data' and for each of the Bookmarks we render a View in teh Bookmarks results
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  // In the End we end up with array of string, which when joined using the .join() and ended up with a big markup string that we want to render
}

// Exporting new Instance of view
export default new BookmarksView();
