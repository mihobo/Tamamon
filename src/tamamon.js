function Tamamon() {
  this.energy = 10,
  this.MAX_ENERGY = 20
  this.MIN_ENERGY = 0
  this.energyMessage = "Happy happy happy"
};

Tamamon.prototype.feed = function () {
  this.checkMax();
  this.energy += 2;
};

Tamamon.prototype.playtime = function () {
  this.checkMin();
  this.energy -= 2;
};

Tamamon.prototype.checkMax = function () {
  if (this.energy >= this.MAX_ENERGY ) {
    throw new Error("Full energy");
  };
};

Tamamon.prototype.checkMin = function () {
  if (this.energy <= this.MIN_ENERGY ) {
    throw new Error("No more energy");
  };
};

Tamamon.prototype.showEnergyNotifications = function () {
  if (this.energy === this.MAX_ENERGY) {
    this.energyMessage = "At full energy"
  } else if (this.energy >= 10 && this.energy <= 18) {
    this.energyMessage = "Happy happy happy"
  } else if (this.energy > 0 && this.energy < 10) {
    this.energyMessage = "Tired...hungry...zZz"
  } else {
    this.energyMessage = "No energy left"
  };
};
