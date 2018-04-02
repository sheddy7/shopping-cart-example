const expect  = require('chai').expect;

const shoppingCart = require('./shopping-cart');

describe('Shopping cart tests', () => {

  const fakeCart = [
    {
      productID: 'A',
      title: 'Test',
      price: 5
    },
    {
      productID: 'C',
      title: 'Test',
      price: 7
    }
  ];

  context('addItemToCart', () => {
    it('adds item to the cart', () => {

      const fakeItem = { productID: 'B' };

      const expectedCart = [
        { productID: 'A', title: 'Test', price: 5 },
        { productID: 'C', title: 'Test', price: 7 },
        { productID: 'B' }
      ];

      expect(shoppingCart.addItemToCart(fakeCart, fakeItem)).to.deep.equal(expectedCart);
    });

    it('returns cart if no productToAdd given', () => {

      expect(shoppingCart.addItemToCart(fakeCart)).to.deep.equal(fakeCart);
    })
  });

  context('removeItemFromCart', () => {
    it('removes an item from the cart', () => {

      const expectedCart = [
        { productID: 'C', title: 'Test', price: 7 }
      ];

      expect(shoppingCart.removeItemFromCart(fakeCart, 'A')).to.deep.equal(expectedCart);
    });

    it('returns cart if item to reomve is not in cart', () => {

      expect(shoppingCart.removeItemFromCart(fakeCart, 'E')).to.deep.equal(fakeCart);
    });
  });

  context('listCartItems', () => {
    it('returns items and their quantity', () => {

      const expectedResult = {
        A: {
          title: 'Test', price: 5, quantity: 1
        },
        C: {
          title: 'Test', price: 7, quantity: 1
        }
      };

      expect(shoppingCart.listCartItems(fakeCart)).to.deep.equal(expectedResult);
    });
  });

  context('getTotalCartCost', () => {
    it('returns the total cost of the cart', () => {

      const expectedResult = 12;

      expect(shoppingCart.getTotalCartCost(fakeCart)).to.deep.equal(expectedResult);
    });
  });
});
