var soundFilePaths = ["./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3", "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3", "./sounds/crash.mp3"];

for (let index = 0; index < document.querySelectorAll(".drum-button").length; index++) {
    document.querySelectorAll(".drum-button")[index].addEventListener("click", function () {
        var sound = new Audio(soundFilePaths[index]);
        sound.play();
    });
}

document.addEventListener("keypress", function(triggeringEvent) {
    playSoundOnKeyPress(triggeringEvent.key.toUpperCase());
});

function playSoundOnKeyPress(key) {
    var soundFile;

    switch (key) {
        case "W":
            soundFile = new Audio(soundFilePaths[0]);
            soundFile.play();
            break;
        case "A":
            soundFile = new Audio(soundFilePaths[1]);
            soundFile.play();
            break;
        case "S":
            soundFile = new Audio(soundFilePaths[2]);
            soundFile.play();
            break;
        case "D":
            soundFile = new Audio(soundFilePaths[3]);
            soundFile.play();
            break;
        case "J":
            soundFile = new Audio(soundFilePaths[4]);
            soundFile.play();
            break;
        case "K":
            soundFile = new Audio(soundFilePaths[5]);
            soundFile.play();
            break;
        case "L":
            soundFile = new Audio(soundFilePaths[6]);
            soundFile.play();
            break;
    
        default:
            console.log("The Key Pressed was " + key + " .");
            break;
    }
}