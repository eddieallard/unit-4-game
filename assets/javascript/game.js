$(document).ready(function () {

    // Variables declared and adds points to the player's total score.
    var wins = 0;
    var losses = 0;

    var computerGuess;
    var totalScore;
 

    var bluegem;
    var orangegem;
    var guitargem;
    var glovegem;

    
    

    // The player will be shown a random number at the start of the game.

    function initGame() {

        computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
        

    // Each crystal should have a random hidden value between 1 - 12.

        bluegem = Math.floor(Math.random() * 12) + 1;
        orangegem = Math.floor(Math.random() * 12) + 1;
        guitargem = Math.floor(Math.random() * 12) + 1;
        glovegem = Math.floor(Math.random() * 12) + 1;
        


        $("#butt1").text(totalScore);
        $("#butt2").text(computerGuess);

        totalScore = 0;

    }
    initGame();

    // The random number shown at the start of the game should be between 19 - 120.

    function startRandom() {
        $("#random-button").on("click", function () {

            computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
        })};


    // The logic for buttons and their functions below this line

    function gameButtonsLogic() {
        $("#bluegem").click(function () {
            totalScore += bluegem;
            $("#butt1").text(totalScore);
            gameLogic();
            
        });

        $("#glovegem").on("click", function () {
            totalScore += glovegem;
            $("#butt1").text(totalScore);
            gameLogic();
            
        });

        $("#orangegem").on("click", function () {
            totalScore += orangegem;
            $("#butt1").text(totalScore);
            gameLogic();
            
        });

        $("#guitargem").on("click", function () {
            totalScore += guitargem;
            $("#butt1").text(totalScore);
            gameLogic();
            
        })};
        gameButtonsLogic();

    // Conditions of the game and scoreboawrd updates below this line
        function gameLogic() {
            if (totalScore === computerGuess) {
                wins++;
                $("#wins-text").text(wins);                
                initGame();              
            }
            else if (totalScore > computerGuess) {
                losses++;
                $("#losses-text").text(losses);
                initGame();
            }
        };



});