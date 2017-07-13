function Tamamon() {
  this.energy = 10,
  this.MAX_ENERGY = 20
};

Tamamon.prototype.feed = function () {
  this.energy += 2;
};
