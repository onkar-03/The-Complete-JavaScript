///////////////////////////////////////
// 05. The Module Pattern

// --- What is IIFE ??
// An IIFE (Immediately-Invoked Function Expression) is a JavaScript design pattern that defines and executes a function immediately after it is created
// Its executed only once
// The primary purpose of an IIFE is to create a new scope for variables, avoiding polluting the global scope and enabling better encapsulation and modularization of code.

// Define a module pattern using an immediately-invoked function expression (IIFE)
const ShoppingCart = (function () {
  // --- Private Variables
  // Variables defined inside a function are not accessible from outside that function
  // When you use an IIFE, you're creating a function that runs immediately and contains its own scope
  // As they are scoped for the function only hence they are private to the IIFE
  // Private variables inside the IIFE, not accessible from outside the function
  // They can only be accessed from outside if they are made Public like we did her
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  // --- Private Methods
  // Similar to the Variables the functions created inside the IIFE are not accessible from outside that function

  // Private method to add items to the cart
  const addToCart = function (product, quantity) {
    // Add the product and quantity as an object to the cart array
    cart.push({ product, quantity });
    // Log a message indicating the item was added, including the shipping cost
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  // Private method to order stock from the supplier
  const orderStock = function (product, quantity) {
    // Log a message indicating the stock order
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // --- Making Some Methods & Variables Public
  // Returning an object in an IIFE (Immediately-Invoked Function Expression) is a way to expose certain methods and properties to the outside world while keeping the rest private
  // Return an object with references to the addToCart method and some private variables
  // This makes addToCart and mentioned private variables publicly accessible while keeping other parts private
  return {
    addToCart,
    cart, // Expose the cart array
    totalPrice, // Expose the total price
    totalQuantity, // Expose the total quantity
  };
})();

// ShoppingCart is an Object created by the IIFE
// Its because of closures that we can still access the variables and functions even after IIFE completes its execution
// Using the Object we can access the Public methods and variables of the IIFE
ShoppingCart.addToCart('apple', 4); // Adds 4 apples to the cart and logs a message
ShoppingCart.addToCart('pizza', 2); // Adds 2 pizzas to the cart and logs a message

// Log the entire ShoppingCart object to the console to inspect its properties
console.log(ShoppingCart);

// Attempt to log the shippingCost property, which is private and not exposed
// This will result in 'undefined' since shippingCost is not accessible outside the IIFE
console.log(ShoppingCart.shippingCost);

// This is called the Revealing Module Pattern which is used very commonly in JavaScript
// This pattern has limitations that is why native modules were added to ES6
