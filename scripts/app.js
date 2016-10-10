$(document).ready(function () {
  console.log('ready')
});

var startNewGame = $(".new")
var howToPlay = $(".howTo")
// var playerInput = $("#userGuess");
// var guessCount = 0;
var count = $("#count");
var pointsAdded = 0;




    startNewGame.click(newGame)
    howToPlay.click(newHowTo)


$(".howTo").click(function(){
    $(".overlay").fadeIn(1000);
});

//new game
$(".new").click(function () {
console.log('new yo')
});

var timerElement = $('timer');
var count = 31;
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

// New Game button clicked
function newGame() {
    console.log("new game clicked");
    // guessCount = 0
    // count.text(guessCount)
    // playerInput.val('')
  //  $('.newGuess').remove()
}




// How to play button clicked
function newHowTo() {
    console.log('how to is working');
}

//click to pop audio-NOT WORKING
 // function audioPop() {
 //   $('#sound').html("<embed src='audio/pop.wav' hidden=true autostart=true loop=false>");
 //   document.getElementById('sound').innerHTML="<audio autoplay><source src='audio/pop.wav' type='audio/wav'></audio>";
 // }





//grids and bubbles
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

    // $('#40').click(function () {
    //     console.log('click 40 working')
    //     $(this).remove();
    // });
