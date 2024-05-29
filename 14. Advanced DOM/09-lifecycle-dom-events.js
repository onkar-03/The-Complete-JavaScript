// --- DomContentLoaded ---
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, which means that HTML has been downloaded and converted to Dom Tree
// All scrips must be downloaded and executed before the DOMContentLoaded event can happen
// This event does not wait for external Images an Resources to Load, only HTML an Js needs to be Loaded
// We should only handle DOMContentLoaded event if you placed the script in the head without defer or async

// Listening to the DOMContentLoaded event:
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// This is equivalent to DOMContentLoaded in Vanilla JS (jQuery).
// $(document).ready();

// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images

// Listening to the load event:
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// The beforeunload event is fired just before the user is about to leave  a page.
//  It can be used to ask users if they are 100% sure they want to  leave the page.
// After adding this if we close the Browser we get a popup of if we really want to quit the site
window.addEventListener('beforeunload', function (e) {
  // Some browsers require us to call preventDefault() in order to use this
  e.preventDefault();
  console.log(e);
  // returnValue displays warning before leaving the page (!It's been deprecated)
  // What ever we write in the '' we get a efault message on closing
  e.returnValue = '';
});
