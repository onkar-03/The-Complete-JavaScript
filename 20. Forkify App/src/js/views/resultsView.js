// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes found for your Query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);

    // Returning a String of the Array of Data we have
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(result) {
    return `
          <li class="preview">
            <a class="preview__link " href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>`;
  }
}

// Exporting new Instance of view
export default new ResultsView();
