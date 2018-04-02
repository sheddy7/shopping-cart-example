const shoppingCart = require('./shopping-cart');
const productItems = require('./product-items.json');

let currentCart = [];

// This method would need find polyfil for IE and older browsers
const getProductItem = (productID) => {
  return productItems.find(item => item.productID === productID);
};

currentCart = shoppingCart.addItemToCart(currentCart, getProductItem('A'));
currentCart = shoppingCart.addItemToCart(currentCart, getProductItem('B'));
currentCart = shoppingCart.addItemToCart(currentCart, getProductItem('C'));

console.log(shoppingCart.listCartItems(currentCart));
console.log(shoppingCart.getTotalCartCost(currentCart));

currentCart = shoppingCart.addItemToCart(currentCart, getProductItem('A'));
currentCart = shoppingCart.addItemToCart(currentCart, getProductItem('B'));

console.log(shoppingCart.listCartItems(currentCart));
console.log(shoppingCart.getTotalCartCost(currentCart));

currentCart = shoppingCart.removeItemFromCart(currentCart, 'A');
currentCart = shoppingCart.removeItemFromCart(currentCart, 'C');

console.log(shoppingCart.listCartItems(currentCart));
console.log(shoppingCart.getTotalCartCost(currentCart));
console.log(currentCart);
