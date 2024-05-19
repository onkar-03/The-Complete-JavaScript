// --- Styles ---
// Remember these styles are set as inline styles
const message = document.createElement('div');

// --- Setting the background color & width
message.style.backgroundColor = '#37383d';
message.style.width = '120px';

// --- To get a style that was set explicitly
// The styles that are defined using the style property as inline styles can only be accessed using the style property
// Hence we cant get 'color' but can get the declared inline style 'backgroundColor'
console.log(message.style.color); // empty (the color hasn't been set explicitly)
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// --- To get an style that was set implicitly (In .css file)
// To get implicit styles we have to use the getComputedStyle(element).styleName
console.log(getComputedStyle(message).color); // returns the color
console.log(getComputedStyle(message).height); // returns the height

// --- Changing the Height of the message
// getComputedStyle.height returns a string
// If we want to add a number to it first we need to convert it to a Number using Number.parseFloat()
// Then we add the Number and the + 'px' to it to make it a CSS property value
//  10 specifies the base that we want to use that is the Decimal Base (10)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// --- Working with CSS Custom Properties ---
// Set or change an CSS custom property using .setProperty()
// To select the root property we need to use the 'document.documentElement'
document.documentElement.style.setProperty('--color-primary', 'orange');

// --- Attributes ---
// All the src, img, class, id etc... are attributes here
const logo = document.querySelector('.img');
const link = document.querySelector('.link');

// Standard attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

// Non-standard attributes
console.log(logo.designer); // won't work
console.log(logo.getAttribute('designer')); // works
logo.setAttribute('company', 'Bankist');

// Absolute vs Relative
console.log(logo.src); // http://127.0.0.1:8080/img/logo.png (absolute version)
console.log(logo.getAttribute('src')); // img/logo.png (relative version)

console.log(link.href); // http://127.0.0.1:8080/# (absolute version)
console.log(link.getAttribute('href')); // # (relative version)

// Data attributes (special attributes that start with data)
// data-version-number
console.log(sel.dataset.versionNumber);
// data-full-name
console.log(sel.dataset.fullName);

// --- Classes ---
sel.classList.add('a', 'b', 'c');
sel.classList.remove('a', 'b', 'c');
sel.classList.toggle();
sel.classList.contains();

// Don't use because it overrides all existing classes
sel.className = 'a';
