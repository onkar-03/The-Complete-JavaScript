const header = document.querySelector('.header');

// Creating an Element using .createElement(tagName)
const message = document.createElement('div');

// Adding classes to the created element
message.classList.add('cookie-message');

message.innerHTML = `
We use cookies for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;

header.after(message);

// --- Setting the Style
// To set the style we use the .style.propertyName where property name is in camelCase version

// A) Setting the background color & width
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// --- REMEMBER : These styles set using the .style property are all inline styles, i.e styles directly here in the DOM

// B) To get a style that was set explicitly (Directly in the DOM):
// - The styles that are defined using the style property as inline styles can only be accessed using the '.style' property

// - As the backgroundColor was a set explicitly we can access it using the .style property
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// - As color was not set explicitly using the style property we can access it using the .style
console.log(message.style.color); // empty (the color hasn't been set explicitly)

// C) To get an style that was set implicitly (In .css file)
// To get implicit styles we have to use the getComputedStyle(element).styleName
console.log(getComputedStyle(message).color); // returns the color
console.log(getComputedStyle(message).height); // returns the height

// D) Changing the Height of the message
// message.style.height used to set the new height explicitly
// getComputedStyle.height returns a string
// If we want to add a number to it first we need to convert it to a Number using Number.parseFloat() we convert it to a Floating Point Number
// Then we add the Number and the + 'px' to it to make it a CSS property value
//  10 specifies the base that we want to use that is the Decimal Base (10)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(message.style.height);

// --- Working with CSS Custom Properties ---
// Set or change an CSS custom property using .setProperty(propertyName,Value)
// To select the root property we need to use the 'document.documentElement'
document.documentElement.style.setProperty('--color-primary', 'orange');

// --- Attributes ---
// All the src, img, class, id etc... are all attributes of say <img> tag here
// We can access and change these different attributes

// A) Selecting classes
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.nav__link--btn');

// B) Reading Standard attributes
// <img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo"/>
// Standard attributes of an HTML <img> tag are the attributes that are commonly used to define the properties of an image element
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.id);

// C) Setting Standard Attributes
// Setting teh alt text for logo here
logo.alt = 'Beautiful minimalist logo';

// D) Reading Non-Standard Attributes
// We can't read the non standard attributes using the same method like for the standard ones
console.log(logo.designer); // undefined

// We need to use the .getAttribute('nameOfAttribute') method to get the non-standard attributes
console.log(logo.getAttribute('designer'));

// E) Setting Non-Standard Attributes
// .setAttribute('nameOfAttribute', 'Value')
console.log(logo.setAttribute('company', 'bankist'));

// F) Absolute vs Relative URL / Links
console.log(logo.src); // http://127.0.0.1:8080/img/logo.png (absolute version)
console.log(logo.getAttribute('src')); // img/logo.png (relative version)

console.log(link.href); // http://127.0.0.1:8080/# (absolute version)
console.log(link.getAttribute('href')); // # (relative version)

// G) Data attributes (special attributes that start with data)
// They start with 'data-' keyword at the beginning
// Also in the .dataset.name the name is in camelCase
// The name is data--version-number: written as .dataset.versionNumber

// data-version-number
console.log(logo.dataset.versionNumber);

// --- Classes ---

// Operations
logo.classList.add('a', 'b', 'c');
logo.classList.remove('a', 'b', 'c');
logo.classList.toggle('a');
logo.classList.contains('a');

// We can also set class as follows
// Don't use because it overrides all existing classes
logo.className = 'ONKAR';
