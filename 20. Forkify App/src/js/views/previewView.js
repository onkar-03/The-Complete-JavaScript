// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';

// Its the Child View Class for the Results and Bookmarks View
class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    // Retrieving the Recipe id
    const id = window.location.hash.slice(1);

    return `
          <li class="preview">
            <a class="preview__link ${
              this._data.id === id ? 'preview__link--active' : ''
            } " href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>\
                <div class="preview__user-generated ${
                  this._data.key ? '' : 'hidden'
                }">
                   <svg>
                     <use href="${icons}#icon-user"></use>
                   </svg>
                </div>
              </div>
            </a>
          </li>`;
  }
}

// Exporting new Instance of view
// This generates only one preview markup as above only which is used by bookmarksView and resultsView to show the Results
export default new PreviewView();
