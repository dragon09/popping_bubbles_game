$(document).ready(function () {
  console.log('ready')



//pop sound working on click image
  $("#0").click(function() {
    playSound('sound/PopBanner-SoundBible.com-641783855.wav');
  })

  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }

  var startNewGame = $(".new")
  var howToPlay = $(".howTo")


    startNewGame.click(newGame)
    howToPlay.click(newHowTo)

//How To Play link for game instructions
$(".howTo").click(function(){
    $(".overlay").fadeIn(1000);
});

//starts a new game
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


  //Let's Play link back to main screen
  $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
  });

  // How to play button clicked
  function newHowTo() {
      console.log('how to is working');
  }


  // New Game button clicked
  function newGame() {
      console.log("new game clicked");
  }

$('grid_container').fireworks();


//player 2 scoreboard
  // var howMany = 0;
  // $('#0').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#1').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#2').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#3').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#4').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#5').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#6').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#7').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#8').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#9').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#10').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#11').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#12').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#13').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#14').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#15').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#16').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#17').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#18').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#19').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#20').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#21').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#22').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#23').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#24').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#25').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#26').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#27').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#28').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#29').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#30').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#31').click(function(){
  //     howMany += 1;
  //     $("#info").text(howMany);
  // });
  //
  // $('#32').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#33').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#34').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#35').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#36').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#37').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#38').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });
  //
  // $('#39').click(function(){
  //     howMany += 1;
  //     $("#info2").text(howMany);
  // });









  //player 1 scoreboard
   var howMany = 0;
   $('#0').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#1').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#2').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#3').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#4').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#5').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#6').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#7').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#8').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#9').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#10').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#11').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#12').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#13').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#14').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#15').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#16').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#17').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#18').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#19').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#20').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#21').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#22').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#23').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#24').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#25').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#26').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#27').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#28').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#29').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#30').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#31').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#32').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#33').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#34').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#35').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#36').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#37').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#38').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   $('#39').click(function(){
       howMany += 1;
       $("#info").text(howMany);
   });

   // $('#40').click(function(){
   //     howMany += 1;
   //     $("#info").text(howMany);
   // });









   $('#0').click(function () {
           console.log('click 0 working')
           $(this).remove();
       });

  $('#1').click(function () {
          console.log('click 1 working')
          $(this).remove();
      });

  $('#2').click(function () {
          console.log('click 2 working')
          $(this).remove();
      });

  $('#3').click(function () {
          console.log('click 3 working')
          $(this).remove();
      });

  $('#4').click(function () {
          console.log('click 4 working')
          $(this).remove();
      });

  $('#5').click(function () {
          console.log('click 5 working')
          $(this).remove();
      });

  $('#6').click(function () {
          console.log('click 6 working')
          $(this).remove();
      });

  $('#7').click(function () {
          console.log('click 7 working')
          $(this).remove();
      });

  $('#8').click(function () {
          console.log('click 8 working')
          $(this).remove();
      });

  $('#9').click(function () {
          console.log('click 9 working')
          $(this).remove();
      });

  $('#10').click(function () {
          console.log('click 10 working')
          $(this).remove();
      });

  $('#11').click(function () {
          console.log('click 11 working')
          $(this).remove();
      });

  $('#12').click(function () {
          console.log('click 12 working')
          $(this).remove();
    });

  $('#13').click(function () {
          console.log('click 13 working')
          $(this).remove();
    });

  $('#14').click(function () {
          console.log('click 14 working')
          $(this).remove();
    });

  $('#15').click(function () {
          console.log('click 15 working')
          $(this).remove();
    });

  $('#16').click(function () {
          console.log('click 16 working')
          $(this).remove();
    });

  $('#17').click(function () {
          console.log('click 17 working')
          $(this).remove();
      });

  $('#18').click(function () {
          console.log('click 18 working')
          $(this).remove();
      });

  $('#19').click(function () {
        console.log('click 19 working')
        $(this).remove();
      });

  $('#20').click(function () {
        console.log('click 20 working')
        $(this).remove();
    });

  $('#21').click(function () {
      console.log('click 21 working')
      $(this).remove();
    });

  $('#22').click(function () {
      console.log('click 22 working')
      $(this).remove();
  });

  $('#23').click(function () {
      console.log('click 23 working')
      $(this).remove();
  });

  $('#24').click(function () {
      console.log('click 24 working')
      $(this).remove();
    });

  $('#25').click(function () {
      console.log('click 25 working')
      $(this).remove();
  });

  $('#26').click(function () {
        console.log('click 26 working')
        $(this).remove();
    });

  $('#27').click(function () {
        console.log('click 27 working')
        $(this).remove();
    });

  $('#28').click(function () {
      console.log('click 28 working')
      $(this).remove();
    });

  $('#29').click(function () {
      console.log('click 29 working')
      $(this).remove();
    });

  $('#30').click(function () {
        console.log('click 30 working')
                                      $(this).remove();
                                  });

  $('#31').click(function () {
                                      console.log('click 31 working')
                                      $(this).remove();
  });

  $('#32').click(function () {
                                          console.log('click 32 working')
                                          $(this).remove();
                                      });

  $('#33').click(function () {
                                          console.log('click 33 working')
                                          $(this).remove();
  });

  $('#34').click(function () {
                                          console.log('click 34 working')
  $(this).remove();
  });

  $('#35').click(function () {
    console.log('click 35 working')
                                                  $(this).remove();
  });

  $('#36').click(function () {
                                              console.log('click 36 working')
                                              $(this).remove();
  });

  $('#37').click(function () {
                                              console.log('click 37 working')
                                              $(this).remove();
  });

  $('#38').click(function () {
                                              console.log('click 38 working')
                                              $(this).remove();
  });

  $('#39').click(function () {
        console.log('click 39 working')
        $(this).remove();
  });
});

    // $('#40').click(function () {
    // console.log('click 40 working')
    // $(this).remove();
    // });
