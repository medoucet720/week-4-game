$(document).ready(function() {
  var randomNumber;
  var crystalNumber;
  var totalScore =0;
  var winCounter = 0;
  var lossCounter = 0;


  gameInit();

  //At start of game, random number is generated
  function gameInit() {
    randomTarget();
    randomCrystals();
 
  }

  function randomTarget() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $('#displayrandom').html(randomNumber);
  }

  //Four crystals are assigned a random number that is hidden from player
  function randomCrystals() {
    crystalNumber1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    crystalNumber2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    crystalNumber3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    crystalNumber4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  }

  //take those random crystal val and store them with the crystal each time the game refreshes


    $('#crystal-one').attr('data-crystalvalue', crystalNumber1);
    $('#crystal-two').attr('data-crystalvalue', crystalNumber2);

    $('#crystal-three').attr('data-crystalvalue', crystalNumber3);

    $('#crystal-four').attr('data-crystalvalue', crystalNumber4);

    //repeat for all crystals

    $('#win-counter').html('Wins: ' + winCounter);
    $('#loss-counter').html('Losses: ' + lossCounter);


  function reset() {
    totalScore = 0;
    $('#totalscore').html(totalScore);
    randomCrystals();
    randomTarget();
  }

  function updateLosses() {
  	alert('you lose');
    lossCounter++;
    $("#loss-counter").html("Losses: " + lossCounter);
    reset();
  }


  function updateWins() {
  	alert('you win');
    winCounter++;
    $("#win-counter").html("Wins: " + winCounter);
    reset();
  }
    //Each time you click on crystal, points are added to total score

    $('.gemimage').on('click', function() {
      crystalNumber = $(this).attr('data-crystalvalue');
      crystalNumber = parseInt(crystalNumber);
      totalScore = totalScore + crystalNumber;
        console.log('Total SO FAR: ' + totalScore);
        $('#totalscore')
          .html(totalScore)
          .css('font-size', '40px')
          .css('color', 'white');


      if (totalScore === randomNumber) {
        updateWins();
      } else if (totalScore > randomNumber) {
        updateLosses();
    } 
    }) 
  });
  
