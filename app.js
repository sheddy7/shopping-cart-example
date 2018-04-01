const shoppingCart = require('./shopping-cart');
const productItems = require('./product-items.json');

const initialCart = [];

// This method would need find polyfils for IE and older browsers
const getProductItem = (productID) => {
  return productItems.find(item => item.productID === productID);
};

const addItemToCart = (cart, productID) => {
  const productToAdd = getProductItem(productID);

  if (!productToAdd) return cart;

  return [...cart, productToAdd];
};

// This method would need findIndex polyfils for IE and older browsers
const removeItemFromCart = (cart, productID) => {
  const firstProductIndex = cart.findIndex((item) => item.productID == productID);

  if (firstProductIndex === -1) return cart;

  return [...cart.slice(0, firstProductIndex), ...cart.slice(firstProductIndex + 1)];
};

const listCartItems = (cart) => {
  let itemList = [];

  cart.forEach((item) => {
    const { productID } = item;

    if (itemList[productID]) {
      itemList[productID].quantity++;
    } else {
      const { title, price } = item;

      itemList[productID] = {
        title,
        price,
        quantity: 1
      };
    }
  });

  return itemList;
};

const getTotalCartCost = (cart) => {

  return cart.reduce((a, b) => ({price: a.price + b.price}));
};

shoppingCart.listCartItems(
  shoppingCart.addItemToCart(initialCart, getProductItem('A'))
);
