$(document).ready(function startAnimation() {

    var tamamon = new Tamamon;

    var frames = document.getElementById("animation").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function() {
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
    }, 500);
    reduceEnergyOverTime();

  function reduceEnergyOverTime() {
    setInterval(function() {
      tamamon.playtime();
      tamamon.showEnergyNotifications();
      updateEnergy();
      $('#energyMessage').text(tamamon.energyMessage);
    }, 10000);
  };

  function updateEnergy() {
    $('#default-energy').text(tamamon.energy);
  };

  function returnToDefaultImage() {
    setTimeout(function() {
      $("#default01").prop('src', "Images/Pet/Tamamon01.png");
      $("#default02").prop('src', "Images/Pet/Tamamon02.png");
    }, 3000);
  };

  function shakeHead() {
    $("#default01").prop('src', "Images/Pet/TamamonShakeHead01.png");
    $("#default02").prop('src', "Images/Pet/TamamonShakeHead02.png");
  };

  function feedPet() {
    $("#default01").prop('src', "Images/Pet/TamamonFeed02.png");
    $("#default02").prop('src', "Images/Pet/TamamonFeed01.png");
  };

  function playPet() {
    $("#default01").prop('src', "Images/Pet/TamamonPlay01.png");
    $("#default02").prop('src', "Images/Pet/TamamonPlay02.png");
  };

  updateEnergy();
  $("#energyMessage").text(tamamon.energyMessage);

  $('#feed').on('click', function startAnimationFeed() {
    if (tamamon.energy === tamamon.MAX_ENERGY) {
      shakeHead();
      returnToDefaultImage();
    } else {
      feedPet();
      returnToDefaultImage();
    };
    tamamon.feed();
    tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });

  $('#playtime').on('click', function startAnimationPlay() {
    if (tamamon.energy === tamamon.MIN_ENERGY) {
      shakeHead();
      returnToDefaultImage();
    } else {
      playPet();
      returnToDefaultImage();
    };
    tamamon.playtime();
    tamamon.showEnergyNotifications();
    updateEnergy();
    $('#energyMessage').text(tamamon.energyMessage);
  });
});
