$(document).ready(function() {

  function updateEnergy() {
    $('#default-energy').text(tamamon.energy);
  };

  var tamamon = new Tamamon;
  updateEnergy();

  $('#feed').on('click', function() {
    tamamon.feed();
    updateEnergy();
  });
});
