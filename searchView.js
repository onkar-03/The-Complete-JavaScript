class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear Search Field After the Search
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Publisher-Subscriber Pattern
  // Listening for the Event in the view
  // Handling the Click on the Search button of the Search Bar
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      // Prevent Default Loading of the Form
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
