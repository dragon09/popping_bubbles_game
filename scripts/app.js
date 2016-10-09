$(document).ready(function () {
  console.log('ready')
});

var startNewGame = $(".new")
var giveHint = $(".hint")
var playerInput = $("#userGuess");
var guessCount = 0;
var count = $("#count");
var body = document.body;
var pointsAdded = 0;


    startNewGame.click(newGame)
    giveHint.click(newHint)

$(".hint").click(function(){
    $(".overlay").fadeIn(1000);

});


$(".new").click(function () {
console.log('new yo')
});

$("a.close").click(function(){
    $(".overlay").fadeOut(1000);
});


function newGame() {
    console.log("new game clicked");
    // guessCount = 0
    // count.text(guessCount)
    // playerInput.val('')
   $('.newGuess').remove()
}

function newHint() {
    console.log('hint is working');

}
