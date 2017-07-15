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
    it("can have a maximum energy of 20", function () {
      expect(tamamon.MAX_ENERGY).toEqual(20);
    });

    it("throws an error if the user tries to go beyond the max energy", function() {
      for(var i = 10; i < 20; i += 2) {
        tamamon.feed();
      };
      expect( function() { tamamon.checkMax() } ).toThrow(new Error("Pet is at full energy"));
    });
  });

  describe("#feed", function () {
    it("feeds the pet and increases the health by 2", function () {
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
});
