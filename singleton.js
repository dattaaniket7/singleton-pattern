class ShoppingBag {
  constructor(bag) {
    this.bag = bag;
    // this.getBag = () => {
    //   console.log(`Your bag has ${this.bag.length} items`);
    // };
  }
  getBag() {
    console.log(`Your bag has ${this.bag.length} items`);
  }
}

const bag = new ShoppingBag(["milk"]);
const bag2 = new ShoppingBag(["chocolate", "candy"]);
const bag3 = new ShoppingBag(["ice cream"]);

console.log(bag.getBag === bag2.getBag);
console.log(bag);
