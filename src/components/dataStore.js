let cart = [];
let total = 0;
let observers = [];
const cartData = {

  addItem: function(item) {
    item.key = cart.length;
    cart[cart.length] = item;
    total = total + Number(item.price).toFixed(2)
    this.notify();
  },
  getcartData: function() {
    return cart;
  },
  deleteItem: function(id) {
    // console.log(id);
    cart = cart.filter(function( obj ) {
    return obj.key !== id;
});
  this.notify();
  },
  deleteCart: function() {
    cart = [];
    this.notify();
  },
  subscribe: function(observer) {
    observers[observers.length] = observer;
  },
  notify: function() {
    observers.forEach((observer) => {
      // console.log(observer);
    observer();
  })
  }
}

module.exports = cartData;
