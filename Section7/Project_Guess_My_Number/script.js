'use strict';

/* DOM  -> Document Object model: web API that can interact with JS language. It is a structured representation of HTML documents - contains everything that the HTML has, including text and comments. 
        -> Allows JS to access HTML elements and styles to manipulate them

   DOM Tree Structure:  
        -> Document - special object that is the entry point to the DOM
        -> <html> - document's child
        -> <head> and <body> - html's children
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

const setMessageFontStyle = function (messageColor, messageWeight) {
    document.getElementById("message").style.color = messageColor;
    document.getElementById("message").style.fontWeight = messageWeight;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (guess !== secretNumber) {
        if (!guess || guess < 0 || guess > 20) {
            displayMessage("Invalid number!");
        } else {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "Too high" : "Too low");

                setMessageFontStyle("red", "600");

                score--;
                document.querySelector(".score").textContent = score;
            } else {
                displayMessage("You lost the game!");

                document.querySelector(".score").textContent = 0;
            }
        }
    } else {

        displayMessage("Correct!");

        setMessageFontStyle("green", "600");

        document.querySelector(".my-number").textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".high-score").textContent = highscore;
        }
    }
});

document.querySelector(".new-game").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;

    displayMessage("Start guessing...");

    setMessageFontStyle("black", "200");

    document.querySelector(".my-number").textContent = "?";
    document.querySelector(".guess").value = "";

});