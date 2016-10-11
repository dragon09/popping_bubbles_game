$(document).ready(function () {
  console.log('ready')



//pop sound working on click image
  $("#0").click(function() {

  })

  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }

  // var startNewGame = $(".new")
  var howToPlay = $(".howTo")



    // startNewGame.click(newGame)
    howToPlay.click(newHowTo)



    $("#notification").fadeIn("slow").append('your message');
    $(".dismiss").click(function(){
           $("#notification").fadeOut("slow");
    });


//How To Play link for game instructions
$(".howTo").click(function(){
    $(".overlay").fadeIn(1000);
});

starts a new game
$(".new").click(function () {
console.log('new yo')
});

//3-2-1 begin counter
// var startCounter = 5;
// var interval = setInterval(function () {
//   startCounter--;
//
//   if (startCounter == 0) {
//       clearInterval(interval);{
//       }
//   }


  //countdown timer working
  var timerElement = $('timer');
  var count = 21;
  var counter = setInterval(timer, 1000);

  function timer(){
   	count = count-1;
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

//player 1 scorebox
var howMany = 0;

// $(‘.box’).length
// var numberOfImages = $(‘.box’).length;

$('.box').each(function() {
  $(this).click(function() {
    playSound('sound/PopBanner-SoundBible.com-641783855.wav');
    howMany += 1;
    $("#info").text(howMany);
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
