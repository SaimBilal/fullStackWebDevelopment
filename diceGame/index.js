var p1Score = Math.floor(Math.random() * 6) + 1;
var p2Score = Math.floor(Math.random() * 6) + 1;

// var p1Score = Math.floor(Math.random() * 6);
// var p2Score = Math.floor(Math.random() * 6);

// var diceImgPaths = ["./images/dice1.png" , "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

if (p1Score === p2Score) {
    document.querySelector(".splash-heading").textContent = "IT'S A DRAW!";
} else if (p1Score > p2Score) {
    document.querySelector(".splash-heading").textContent = "PLAYER 1 WINS!";
} else {
    document.querySelector(".splash-heading").textContent = "PLAYER 2 WINS!";
}

document.querySelector(".dice-image1").setAttribute("src" , "./images/dice" + p1Score + ".png");
document.querySelector(".dice-image2").setAttribute("src" , "./images/dice" + p2Score + ".png");

// document.querySelector(".dice-image1").setAttribute("src" , diceImgPaths[p1Score]);
// document.querySelector(".dice-image2").setAttribute("src" , diceImgPaths[p2Score]);