$(document).ready(function () {

    // Add a specific amount of points to the player's total score.
    var wins = 0;
    var losses = 0;

    var computerGuess;
    var userGuess;

    var bluegem;
    var orangegem;
    var guitargem;
    var glovegem;

    var totalScore;

    // The player will be shown a random number at the start of the game.

    function initGame() {

        totalScore = 0;

        computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
        console.log(computerGuess);

    // Each crystal should have a random hidden value between 1 - 12.
        bluegem = Math.floor(Math.random() * 12) + 1;
        orangegem = Math.floor(Math.random() * 12) + 1;
        guitargem = Math.floor(Math.random() * 12) + 1;
        glovegem = Math.floor(Math.random() * 12) + 1;


        $("#user-score").text(userGuess);
        $("#butt2").text(computerGuess);

    }
    initGame();

    // The random number shown at the start of the game should be between 19 - 120.

    function startRandom() {
        $("#random-button").on("click", function () {

            computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
        })
    };
    


});