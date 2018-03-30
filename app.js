
const productItems = require("./product-items.json");

const cart = {};

const getProductItem = (ProductID) => {
  return productItems.find(item => item.ProductID === ProductID)
};

const addItemToCart = (ProductID) => {

};

console.log(getProductItem("A"));

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cherries' );

console.log(result)
