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
  });

  describe("#feed", function () {
    it("feeds the pet and increases the health by 2", function () {
      tamamon.feed();
      expect(tamamon.energy).toEqual(12);
    });
  });
});
