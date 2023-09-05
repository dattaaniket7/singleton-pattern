// class ShoppingBag {
//   constructor(bag) {
//     this.bag = bag;
//     // this.getBag = () => {
//     //   console.log(`Your bag has ${this.bag.length} items`);
//     // };
//   }
//   getBag() {
//     console.log(`Your bag has ${this.bag.length} items`);
//   }
// }

// const bag = new ShoppingBag(["milk"]);
// const bag2 = new ShoppingBag(["chocolate", "candy"]);
// const bag3 = new ShoppingBag(["ice cream"]);

// console.log(bag.getBag === bag2.getBag);
// console.log(bag);

// let instance;

// class ShoppingBag {
//   constructor() {
//     if (instance) {
//       throw new Error("This instance already exists");
//     }
//     this.bag = [];
//     instance = this;
//   }
//   getBag() {
//     console.log(this.bag);
//   }
//   addItem(item) {
//     this.bag.push(item);
//   }
// }

let shopping = [];

const ShoppingBag = {
  getBag: () => console.log(`This item has ${shopping.length}`),
  addItem: (item) => shopping.push(item),
};

// const singletonShopping = Object.freeze(new ShoppingBag());

const singletonShopping = Object.freeze(ShoppingBag);

// singletonShopping.bag = [];

export default singletonShopping;
