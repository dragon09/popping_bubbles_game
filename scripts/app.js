$(document).ready(function () {
  console.log('ready')




//onClick pop sound
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


$('.title').hide();
$('.grid_container').hide();
$('.score_container').hide();



//this function not working
function startGame() {
  console.log('start button clicked')
$('.instructions').hide();
$('.title').show();
$('.grid_container').show();
$('.score_container').show();
$('.timer').show();
// soundIntro('sound/Loading_Loop.wav');
}

//for timer
var timerElement = $('#timer');
var count = 21;
//var counter = setInterval(timer, 1000);

  //countdown timer working
  function timer(){
   	count--;
   	if (count <= 0)	{
      // stop interval
      //clearInterval(counter);

      // time's up!
    $('#container').append('<img src="img/popbubgrad.png" />')

      return;
   	}
    setTimeout(timer, 1000);
   	$("#timer").text(count);
  };
  timer();

//How To Play link-upper left corner
  $(".ready").click(function(){
      $(".overlay").fadeIn(1000);
  });

  //How to Play link back to main screen
  $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
  });

  // How to Play button clicked
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

//append images to the DOM to replaced onclick bubble function-NOT WORKING
var appendImages = ['img/vic.png', 'img/Small_pegasus.gif', 'img/broccoli.gif', 'img/butterfly.gif',
 'img/cat.gif', 'img/fairy.gif', 'img/girl.gif', 'img/hamster.gif', 'img/mario.gif',
 'img/parachute.gif', 'img/penguin.gif', 'img/robot.gif', 'img/skull.gif', 'img/Small_pegasus.gif',
'img/smallRobot.gif','img/star.gif', 'img/unicorn.png', 'img/witch.gif', 'img/boom.png', 'img/crunch.png',
  'img/wham.png', 'img/splat.png', 'img/changer.gif', 'img/babyuni.gif', 'img/koala.gif', 'img/laugh.gif',
'img/ow.png', 'img/musicnotes.gif', 'img/kaboom.png', 'img/ninjakid.gif', 'img/panda.gif',
'img/ninjaTurtle.gif', 'img/catChasing.gif','img/windup.gif', 'img/camera.gif', 'img/banana.gif']
count = 0;

// for (var i = 0; i < appendImages.length; i++) {
//   if (appendImages[i].length > count) {
//     // console.log(appendImages)
//   }
// }


//number of points for scoreboard global variable
var howMany = 0;

// $(‘.box’).length
// var numberOfImages = $(‘.box’).length;


$(document.body).on('click', '[src="img/gameOver.png"]', function(e){
  $('#gameover').show();
});

$(document.body).on('click', '[src="img/winner.png"]', function(e){
  $('#winner').show();
});

$(document.body).on('click', '.box', function(e){
  howMany++;
  $('#scoreCount').text(howMany);
});

//higher level function for onClick image to sound pop, remove and points
$('.box').each(function() {
  $(this).click(function() {
    playSound('sound/PopBanner-SoundBible.com-641783855.wav');
    howMany += 10;
    $("#info").text(howMany);
    // (this).append(appendImages);
    $(this).remove();


    //appendImages
    var firstImage = appendImages.pop();
    if(firstImage){
      $('.box').append('<img class="box" src="'+firstImage+'" />');
    }
    console.log('appendImages working')
  });
});
});


//puedocode function to check how many points player has and then increase level
//  function unicorn() {
//   if (pegasus image is revealed) {
//     addPoints(++100);
//   }
//   else if (skull image is revealed) {
//     gameOver();
//   }
//   else if (unicorn is revealed) {
//     Winner(++500);
//   }
//
//   else {
//     console.log('this is working');
//     }
// }

//
// function addPoints() {
//   $('.box').each(function() {
//   $('img/Small_pegasus.gif').click(function() {
//     $('#info')++100;
// }
//
// function winner() {
//   $('.box').each(function() {
//   $('img/unicorn.png').click(function() {
//     $('#info')++500;
// }


// for(var i=0;i<numberOfImages;i++) {
//   $('#'+i).click(function(){
//       howMany += 1;
//       $("#info").text(howMany);
//   });
//  }
