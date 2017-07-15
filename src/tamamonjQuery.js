$(document).ready(function() {

  function updateEnergy() {
    $('#default-energy').text(tamamon.energy);
  };

  var tamamon = new Tamamon;
  updateEnergy();
  $("#energyMessage").text(tamamon.energyMessage);

  $('#feed').on('click', function() {
    tamamon.feed();
    tamamon.showEnergyErrors();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });
});
