function Tamamon() {
  this.energy = 10,
  this.MAX_ENERGY = 20
};

Tamamon.prototype.feed = function () {
  this.checkMax();
  this.energy += 2;
};

Tamamon.prototype.checkMax = function () {
  if (this.energy >= this.MAX_ENERGY ) {
    throw new Error("Full energy");
  };
};
