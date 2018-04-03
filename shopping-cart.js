class ShoppingCart {

  constructor(){};

  addItemToCart(cart, productToAdd) {
    if (!productToAdd) return cart;

    return [...cart, productToAdd];
  };

  removeItemFromCart(cart, productID) {
    const firstProductIndex = cart.findIndex((item) => item.productID == productID);

    if (firstProductIndex === -1) return cart;

    return [...cart.slice(0, firstProductIndex), ...cart.slice(firstProductIndex + 1)];
  };

  listCartItems(cart) {
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

  getTotalCartCost(cart) {

    const totalCost = cart.reduce((a, b) => ({price: a.price + b.price}));

    return totalCost.price;
  };
};

module.exports = new ShoppingCart();
