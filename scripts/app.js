$(document).ready(function () {
  console.log('ready')

  var timerElement = $('timer');
  var count = 21;
  var counter = setInterval(timer, 1000);

  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }


//sound should be connected to after Start button is clicked
  // function  soundIntro(soundFile) {
  //   var music = new Music(soundFile);
  //   music.play();
  // }



  // var startNewGame = $(".new")
  var howToPlay = $(".howTo")



    // startNewGame.click(newGame)
    howToPlay.click(newHowTo)


//How To Play link for game instructions
$(".howTo").click(function(){
    $(".overlay").fadeIn(1000);
});

//starts a new game
$(".new").click(function () {
console.log('new yo')
});

//function called after the "Start Game" button is clicked
$(".start_button").click(startGame);


//this function not working
function startGame() {
  console.log('start button clicked')
$('.instructions').hide();
$('.grid_container').show();
$('.score_container').show();
$('.timer').hide();
// soundIntro('sound/Loading_Loop.wav');
}

  //countdown timer working
  function timer(){
   	count = count -1;
   	if (count <= 0)
   	{
      clearInterval(counter);
      return;
   	}
   	$("#timer").text(count);
  };
  timer();



  $(".ready").click(function(){
      $(".overlay").fadeIn(1000);
  });

  //Let's Play link back to main screen
  $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
  });

  // How to play button clicked
  function newHowTo() {
      console.log('how to is working');
  }


//randomly changes the background on image click
  function changeBackground() {
      return '#' + Math.random().toString(16).slice(2, 8);
  };
  $(".box").on("click", function () {
      $('body').css('background', changeBackground());
  });


var appendImages = ['img/Small_pegasus.gif', 'img/broccoli.gif', 'img/butterfly.gif',
 'img/cat.gif', 'img/fairy.gif', 'img/girl.gif', 'img/hamster.gif', 'img/mario.gif',
 'img/parachute.gif', 'img/penguin.gif', 'img/robot.gif', 'img/skull.gif', 'img/Small_pegasus.gif',
'img/smallRobot.gif','img/star.gif', 'img/unicorn.png', 'img/witch.gif', 'img/boom.png', 'img/crunch.png',
  'img/wham.png', 'img/splat.png', 'img/changer.gif', 'img/babyuni.gif', 'img/koala.gif', 'img/laugh.gif',
'img/ow.png', 'img/musicnotes.gif', 'img/kaboom.png', 'img/ninjakid.gif', 'img/panda.gif', 'img/rotatingStar.gif',
'img/ninjaTurtle.gif', 'img/catChasing.gif','img/windup.gif', 'img/camera.gif', 'img/banana.gif']
count = 0;

for (var i = 0; i < appendImages.length; i++) {
  if (appendImages[i].length > count) {
    // console.log(appendImages)
  }
}






//player 1 scorebox
var howMany = 0;

// $(‘.box’).length
// var numberOfImages = $(‘.box’).length;

$('.box').each(function() {
  $(this).click(function() {
    playSound('sound/PopBanner-SoundBible.com-641783855.wav');
    howMany += 10;
    $("#info").text(howMany);
    $(this).append(appendImages);
    $(this).remove();
  });
});
});


// for(var i=0;i<numberOfImages;i++) {
//   $('#'+i).click(function(){
//       howMany += 1;
//       $("#info").text(howMany);
//   });
//  }
