// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';
import { RES_PER_PAGE } from '../config.js';

// Inheritance
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      // Closest method looks for the closest parent up teh Tree unlike the querySelector that looks for children down the Tree
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }
  // Calculate the number of pages
  // As results is an array we use the .length to compute the size of the array
  // Math.ceil to round it off to the next highest integer

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Calculate the number of pages
    // As results is an array we use the .length to compute the size of the array
    // Math.ceil to round it off to the next highest integer
    // const numPages = Math.ceil(
    //   this._data.results.length / this._data.resultsPerPage
    // );
    // console.log(numPages);

    // If on page 1 & there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
         <button data-goto="${
           curPage + 1
         }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    // If on Last Page
    if (curPage === numPages && numPages > 1) {
      return `
         <button data-goto="${
           curPage - 1
         }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;
    }

    // If on any Other Page
    if (curPage < numPages) {
      return `
         <button data-goto="${
           curPage - 1
         }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // If only one page, return nothing as no button is required
    return '';
  }
}

export default new PaginationView();
