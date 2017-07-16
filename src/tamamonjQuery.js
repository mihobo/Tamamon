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

  function defaultImage() {
    setTimeout(function() {
      $("#default01").prop('src', "Images/Tamamon01.png");
      $("#default02").prop('src', "Images/Tamamon02.png");
    }, 3000);
  };

  function shakeHead() {
    $("#default01").prop('src', "Images/TamamonShakeHead01.png");
    $("#default02").prop('src', "Images/TamamonShakeHead02.png");
  };

  function feedPet() {
    $("#default01").prop('src', "Images/TamamonFeed02.png");
    $("#default02").prop('src', "Images/TamamonFeed01.png");
  };

  function playPet() {
    $("#default01").prop('src', "Images/TamamonPlay01.png");
    $("#default02").prop('src', "Images/TamamonPlay02.png");
  };

  var tamamon = new Tamamon;
  updateEnergy();
  $("#energyMessage").text(tamamon.energyMessage);

  $('#feed').on('click', function startAnimationFeed() {
    if (tamamon.energy === tamamon.MAX_ENERGY) {
      shakeHead();
      defaultImage();
    } else {
      feedPet();
      defaultImage();
    };
    tamamon.feed();
    tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });

  $('#playtime').on('click', function startAnimationPlay() {
    if (tamamon.energy === tamamon.MIN_ENERGY) {
      shakeHead();
      defaultImage();
    } else {
      playPet();
      defaultImage();
    };
    tamamon.playtime();
    tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });
});
