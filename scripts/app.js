$(document).ready(function () {
  console.log('ready')


  //onClick pop sound
  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }

  function introMusic(soundFile) {
    var audio1 = document.createElement('audio1');
  }

audio1.src = ('sound/Loading_Loop.wav')


  //sound should be connected to after Start button is clicked
  // function  soundIntro(soundFile) {
  //   var music = new Music(soundFile);
  //   music.play();
  // }


  var startNewGame = $(".new")
  var howToPlay = $(".howTo")

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
  $('.container2').hide();



  //this function not working
  function startGame() {
    console.log('start button clicked')
    $('.instructions').hide();
    $('.title').show();
    $('.grid_container').show();
    $('.score_container').show();
    $('#timer').show();
    // soundIntro('sound/Loading_Loop.wav');
  }


  //for timer
  var timerElement = $('#timer');
  var count = 25;

  var isTimerStarted = false;
  //var counter = setInterval(timer, 1000);

    //countdown timer working
  function timer(){
    isTimerStarted = true;
   	count--;
   	if (count <= 0)	{
      // stop interval
      //clearInterval(counter);



      // time's up!
      // append the image
      $('#timer').append('<img id="timesup" src="img/timesup.png" />')



      // remove the image after 5 seconds
      setTimeout(function(){
        $('#timesup').fadeOut();
      }, 5000)

      isTimerStarted = false;
      return;
   	}
    setTimeout(timer, 1000);
   	$("#timer").text(count);
  };

  $('#start_button').click(function(){
    if(!isTimerStarted){
      timer();
    }
  })


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




  //append images to the DOM onclick bubble function
  var appendImages = ['img/vic.png', 'img/broccoli.gif', 'img/butterfly.gif',
   'img/cat.gif', 'img/fairy.gif', 'img/girl.gif', 'img/hamster.gif', 'img/mario.gif',
   'img/parachute.gif', 'img/penguin.gif', 'img/robot.gif', 'img/skull.gif', 'img/Small_pegasus.gif',
  'img/smallRobot.gif','img/star.gif', 'img/unicorn.png', 'img/witch.gif', 'img/boom.png', 'img/crunch.png',
    'img/wham.png', 'img/splat.png', 'img/changer.gif', 'img/babyuni.gif', 'img/koala.gif', 'img/laugh.gif',
  'img/ow.png', 'img/musicnotes.gif', 'img/kaboom.png', 'img/ninjakid.gif', 'img/panda.gif',
  'img/ninjaTurtle.gif', 'img/catChasing.gif','img/windup.gif', 'img/camera.gif', 'img/banana.gif']

  appendImages.sort(function() { return 0.5 - Math.random() });


  // for (var i = 0; i < appendImages.length; i++) {
  //   if (appendImages[i].length > count) {
  //     // console.log(appendImages)
  //   }
  // }


  //number of points for scoreboard global variable
  var howMany = 0;

  // $(‘.box’).length
  // var numberOfImages = $(‘.box’).length;



  $(document.body).on('click', '.box', function(e){
    howMany++;
    $('#info').text(howMany);
    $('body').css('background', changeBackground());
  });
  //randomly changes the background on image click
  function changeBackground() {
      return '#' + Math.random().toString(16).slice(2, 8);
  };


  //checkScore to add level
  var info = {
    scoreCounter: 0,
    addScore: function(num) {
      //this.info += num;
      this.scoreCounter += num;
      $('#info').text(this.scoreCounter);
      collect10();
      return;
    }
  };


  //add one level
  var level = {
    compareLevel: 1,
    levelUp: function(num) {
      this.compareLevel += num;
      $('#level_number').text(this.level_number);
      collect10();
      return;
    }
  };

  //if/else logic for level up
  function collect10() {
    if (level.compareLevel < 2 && info.scoreCounter >= 11) {
      console.log('got 12')
      level.levelUp(1);
      $('.level').show();
      setTimeout(function(){
        $('.level').fadeOut();
      }, 5000);
    }
    else if (level.compareLevel < 12 && info.scoreCounter >= 21) {
      level.levelUp(1);
      $('.level').show();
    }
    else if (level.compareLevel < 22 && info.scoreCounter >= 41) {
      level.levelUp(1);
      $('.level').show();
    }
    else {
      console.log('this is working');
    }
  }
  collect10();



  startNewGame.click(newGame);

  function newGame() {
    console.log('THIS IS A NEW GAME CLICK')
    $('.box').each(function() {
      $(this).click(function() {
        playSound('sound/PopBanner-SoundBible.com-641783855.wav');
        howMany += 10;
        $("#info").text(howMany);
        $(this).remove();
      });
    });
  }

  function appendImage(){
    var firstImage = appendImages.pop();
    if(firstImage){
      $('.images_container').append('<img class="box" src="'+firstImage+'" />');
      console.log('appendImages working');

      if(firstImage=='img/unicorn.png'){
        alert('You found a special unicorn and earned 3 More Images! + 200 points!')
        appendImage();
        appendImage();
        appendImage();
        info.addScore(200);
      } else if (firstImage=='img/skull.gif') {
        alert('Sorry! You clicked on the scary skull and lose -100 points and 5 of your images.')
        appendImages.remove('<img class="box" src="'+firstImage+'" />');
        // appendImages.remove('<img class="box" src="'+firstImage+'" />');
        // appendImages.remove('<img class="box" src="'+firstImage+'" />');
      } else if (firstImage=='img/vic.png') {
        alert('You found my baby picture!  Collect ++200 points and 2 More images!')
        appendImage();
        appendImage();
        info.addScore(200);
      } else if (firstImage=='img/unicorn.png' && 'img/Small_pegasus.gif' && 'img/babyuni.gif') {
        alert('It/s magical!  You found 2 unicorns AND a pegasus!  Nothing can top that! You win!!!')
        $('#winner').show();
        }
        // });
    }
  }


  //higher level function for onClick image to sound pop, remove and add points
  $('.box').each(function() {
    $(this).click(function() {

      playSound('sound/PopBanner-SoundBible.com-641783855.wav');
      howMany += 10;
      $("#info").text(howMany);
      // (this).append(appendImages);
      $(this).remove();
      console.log('i am removed')

      appendImage()
      //appendImages

    });
  });


}); // on document ready





// for(var i=0;i<numberOfImages;i++) {
//   $('#'+i).click(function(){
//       howMany += 1;
//       $("#info").text(howMany);
//   });
//  }
