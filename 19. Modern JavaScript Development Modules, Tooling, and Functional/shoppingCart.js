// Exporting module
console.log('Exporting module');

// Variables
// These variables are Private to the Module only unless Exported
const shippingCost = 10;
export const cart = [];

// --- Export
// For exporting we use the 'export' keyword always

// Exporting Individual Variables from Module
// For this we need to write the 'export' keyword before each of the variables we want to export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// --- Exporting Multiple Variables & Renaming Variables during Export
// For exporting multiple variables we need to specify them inside {} using ,
// We can also rename a variable of the module while exporting using the 'as' keyword
// Here we export the totalQuantity as tq while exporting
export { totalPrice, totalQuantity as tq };

// --- Default Exports
// We use them when we want to export one value per Module
// We use the default keyword here
// Here we dont specify any name rather pass a value like the function itself and not the variable addToCart
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
