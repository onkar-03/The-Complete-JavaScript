// Parent Class Import
import View from './View.js';

// Import Icons
import icons from '../../img/icons.svg';
import { RES_PER_PAGE } from '../config.js';

// Inheritance
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // Event Listener
  // Publisher Subscriber Pattern
  // Here the listener 'addHandlerClick' is the Publisher
  addHandlerClick(handler) {
    // Using event delegation
    // As we have two buttons/children to look for a click, we don't want to listen for both children separately
    // Instead of attaching individual event handlers to each child element, attach a single event handler to the parent element
    // When an event occurs on a child element, it bubbles up to the parent element where the event handler can process it
    this._parentElement.addEventListener('click', function (e) {
      // Look for the closest button that could possibly be clicked and target that button instead of the whole parent
      // Closest method looks for the closest parent up the Tree unlike the querySelector that looks for children down the Tree
      const btn = e.target.closest('.btn--inline');

      // If no button is found, do nothing
      if (!btn) return;

      // Retrieve the page number from the dataset attribute of the element
      // convert it to a Integer using +
      const goToPage = +btn.dataset.goto;

      // Pass the page number to the event handler to navigate to that page
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    // Calculate the number of pages
    // As results is an array we use the .length to compute the size of the array
    // Math.ceil to round it off to the next highest integer
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

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
