function shoppingCart(){};

shoppingCart.prototype.addItemToCart = (cart, productToAdd) => {
  if (!productToAdd) return cart;

  return [...cart, productToAdd];
};

// This method would need findIndex polyfil for IE and older browsers
shoppingCart.prototype.removeItemFromCart = (cart, productID) => {
  const firstProductIndex = cart.findIndex((item) => item.productID == productID);

  if (firstProductIndex === -1) return cart;

  return [...cart.slice(0, firstProductIndex), ...cart.slice(firstProductIndex + 1)];
};

shoppingCart.prototype.listCartItems = (cart) => {
  let itemList = {};

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

shoppingCart.prototype.getTotalCartCost = (cart) => {

  const totalCost = cart.reduce((a, b) => ({price: a.price + b.price}));

  return totalCost.price;
};

module.exports = new shoppingCart();
