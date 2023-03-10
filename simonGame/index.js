var gameState = false;
var inputSequence = [];
var gameSequence = [];
var gameLevel = 0;
var iterator = 0;
var falseClickflag = false;

// adding sounds and click animations to the buttons 

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    playGameSequenceNextAnimation(userChosenColour);

    if (gameState === false) {
        startGame(userChosenColour);
        checkGameSequence();
    } else {
        inputSequence.push(userChosenColour);
        checkGameSequence();
    }
});

//------------------------ The game logic ------------------------------------

function startGame(initialButtonPressClass) {

    if ($("body").hasClass('game-over')) {
        $("body").removeClass('game-over');
    }

    gameLevel++;

    $("#level-title").text("Level: " + gameLevel);

    inputSequence.push(initialButtonPressClass);
    gameSequence.push(initialButtonPressClass);
    gameState = true;

}

function nextStep() {
    $("#level-title").text("Level: " + (++gameLevel));
    gameSequence = generateGameSequence(gameSequence);
    playGameSequenceNextAnimation(gameSequence[gameSequence.length - 1]);
    inputSequence = [];
    console.log(inputSequence);
    console.log(gameSequence);
}

function endGame() {
    $("#level-title").text("Game Over! Press A button To Start");
    $("body").addClass('game-over');
    gameState = false;
    gameLevel = 0;
    inputSequence = [];
    gameSequence = [];
}

//helper functions

function generateGameSequence(gameSequence) {

    let buttons = ["red", "green", "yellow", "blue"];
    gameSequence.push(buttons[Math.floor(Math.random() * buttons.length)]);
    return gameSequence;
}

// next step animation seperated from the click

function playGameSequenceNextAnimation(nextColor) {

    let clickedButton = $("#" + nextColor);
    clickedButton.addClass("pressed");
    setTimeout(function () {
        clickedButton.removeClass("pressed");
    }, 75);

    let clickSound = new Audio("./sounds/" + nextColor + ".mp3");
    clickSound.play();

}

function checkGameSequence() {

    if (!(inputSequence[inputSequence.length - 1] === gameSequence[inputSequence.length - 1])) {    //is the latest input the same as the game sequence input at that point.
        
        endGame();
    } else {
        
        if (inputSequence.length === gameSequence.length) {     //has the player finished entering the sequence 
            setTimeout(function () {
                nextStep();
            }, 1000);
        }
    }

}



