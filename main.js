console.log("Hello World");

var chosen = Math.floor((Math.random() * 10) + 1);
var palyerGuess;

function displayFeedback(feedback) {
  document.getElementById('question').innerHTML = feedback;
}

function isEnter(e) {
  if(e.keyCode == 13){
    makeGuess();
    document.getElementById('response').value="";
  }
}

function makeGuess() {
  console.log("Make a guess");
  var playerGuess = parseInt(document.getElementById('response').value);
  if(isNaN(playerGuess)) {
    displayFeedback('Enter a number!')
  }
  else {
    if(playerGuess > chosen) {
      displayFeedback('You guessed too high');
    }
    else if (playerGuess < chosen) {
      displayFeedback('You guessed too low');
    }
    else {
      displayFeedback("You got it right!");
      chosen = Math.floor((Math.random() * 10) + 1);
    }
  }
}
