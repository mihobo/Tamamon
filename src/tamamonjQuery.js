$(document).ready(function startAnimation() {
    var frames = document.getElementById("animation").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function() {
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
    }, 500);

  function updateEnergy() {
    $('#default-energy').text(tamamon.energy);
  };

  var tamamon = new Tamamon;
  updateEnergy();
  $("#energyMessage").text(tamamon.energyMessage);

  $('#feed').on('click', function startAnimationFeed() {
    tamamon.feed();
    $("#default01").prop('src', "Images/TamamonFeed02.png");
    $("#default02").prop('src', "Images/TamamonFeed01.png");
    setTimeout(function() {
      $("#default01").prop('src', "Images/Tamamon01.png");
      $("#default02").prop('src', "Images/Tamamon02.png");
    }, 3000);
      tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });

  $('#playtime').on('click', function startAnimationPlay() {
    tamamon.playtime();
    $("#default01").prop('src', "Images/TamamonPlay01.png");
    $("#default02").prop('src', "Images/TamamonPlay02.png");
    setTimeout(function() {
      $("#default01").prop('src', "Images/Tamamon01.png");
      $("#default02").prop('src', "Images/Tamamon02.png");
    }, 3000);
    tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });
});
