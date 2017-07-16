describe("Tamamon", function () {

  var tamamon;

  beforeEach(function () {
    tamamon = new Tamamon();
  });

  describe("#energy", function () {
    it("it has a default energy of 10", function () {
      expect(tamamon.energy).toEqual(10);
    });
  });

  describe("#MAX_ENERGY", function () {
    it("has a maximum energy of 20", function () {
      expect(tamamon.MAX_ENERGY).toEqual(20);
    });

    it("throws an error if the user tries to go beyond the max energy", function() {
      for(var i = 10; i < 20; i += 2) {
        tamamon.feed();
      };
      expect( function() { tamamon.checkMax() } ).toThrow(new Error("At full energy"));
    });
  });

  describe("#feed", function () {
    it("feeds the pet and increases its energy by 2", function () {
      tamamon.feed();
      expect(tamamon.energy).toEqual(12);
    });
  });

  describe("#showEnergyErrors", function () {
    it("tells the user when the pet has full energy", function() {
      for(var i = 10; i < 20; i += 2) {
        tamamon.feed();
      };
      tamamon.showEnergyErrors();
      expect(tamamon.energyMessage).toEqual("Full energy")
    })
  })

  describe("#MIN_ENERGY", function () {
    it("has a minimum energy of 0", function () {
      expect(tamamon.MIN_ENERGY).toEqual(0);
    });

    it("throws an error if the user tries to go beyond the min energy", function() {
      for(var i = 10; i > 0; i -= 2) {
        tamamon.play();
      };
      expect( function() { tamamon.checkMin() } ).toThrow(new Error("No more energy"));
    });
  });

  describe("#play", function () {
    it("plays with the pet and decreases its energy by 2", function () {
      tamamon.play();
      expect(tamamon.energy).toEqual(8);
    });
  });
});
