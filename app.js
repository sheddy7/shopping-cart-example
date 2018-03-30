
const productItems = require("./product-items.json");

let cart = [];

const getProductItem = (productID) => {
  return productItems.find(item => item.productID === productID);
};

const addItemToCart = (cart, productID) => {
  const productToAdd = getProductItem(productID);

  if (!productToAdd) return cart;

  return [...cart, productToAdd];
};

const listCartItems = (cart) => {
  return cart.reduce((groups, item) => {
    console.log(item.title);
    if (groups[item.title]) {
      console.log('bwark');
      groups[item.title] = groups[item.title] + 1;
    } else {
      console.log('here');
      groups[item.title] = 1;
    }
    return groups;
  })
};

cart = addItemToCart(cart, 'A');
//cart = addItemToCart(cart, 'A');
cart = addItemToCart(cart, 'B');
cart = addItemToCart(cart, 'D');
console.log(cart);
listCartItems(cart);
