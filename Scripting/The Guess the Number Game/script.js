var randomNumber = Math.floor(Math.random() * 10) + 1;

var guesses = document.getElementById("guesses");
var lastResult = document.getElementById("lastResult");
var lowOrHi = document.getElementById("lowOrHi");

var guessSubmit = document.getElementById("guessSubmit");
var guessField = document.getElementById("guessField");
var guessCount = 1;
guesses.innerHTML = "Previous guesses: ";

function checkGuess() {
    var userGuess = Number(guessField.value);
    guesses.innerHTML += userGuess + " ";
    if (userGuess > 10 || userGuess < 0) {
        lastResult.innerHTML = ("Number should be in a range of 1 to 10");
        lowOrHi.innerHTML = "";
    }
    else if (userGuess == randomNumber) {
        lastResult.innerHTML = "Congratulations! You got it right! You needed " + guessCount + " tries";
        lowOrHi.innerHTML = "";
    } else {
        lastResult.innerHTML = "Wrong!";
        if (userGuess < randomNumber) {
            lowOrHi.innerHTML = "Your guess is too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.innerHTML = "Your guess is too high!";
        }
    }

    guessCount++;
    guessField.value = "";
}