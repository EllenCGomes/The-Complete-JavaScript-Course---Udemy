'use strict';


const diceEl = document.getElementById("dice");
const newGameButton = document.querySelector(".new-game");
const rollDiceButton = document.querySelector(".roll-dice");
const holdButton = document.querySelector(".hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
    for (let i = 0; i <= 1; i++) {
        document.getElementById(`player${i}`).textContent = `Player ${i + 1}`;
        document.getElementById(`player${i}`).style.color = "black";
        document.getElementById(`player${i}`).style.fontWeight = "300";
        document.querySelector(`#player${i}-score`).textContent = 0;
        document.getElementById(`current${i}`).textContent = 0;
    }

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.getElementById(`dot${activePlayer}`).classList.remove("hidden");
    rollDiceButton.disabled = false;
    holdButton.disabled = false;
};

init();

const rollDice = function () {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `img/dice-${randomDice}.png`;
    diceEl.classList.remove("hidden");
    if (randomDice !== 1) {
        currentScore += randomDice;
        document.getElementById(`current${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}

const switchPlayer = function () {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`dot${activePlayer === 1 ? activePlayer - 1 : activePlayer + 1}`).classList.toggle("hidden");
    document.getElementById(`dot${activePlayer}`).classList.toggle("hidden");
}

const setWinner = function () {
    playing = false;
    document.getElementById(`player${activePlayer}`).textContent = "Winner!";
    document.getElementById(`player${activePlayer}`).style.color = "#EB4D4D";
    document.getElementById(`player${activePlayer}`).style.fontWeight = "600";
    document.getElementById(`dot${activePlayer}`).classList.toggle("hidden");
    diceEl.classList.add("hidden");
    rollDiceButton.disabled = true;
    holdButton.disabled = true;
}

const setPlayerScore = function () {
    scores[activePlayer] += currentScore;
    document.getElementById(`player${activePlayer}-score`).textContent = scores[activePlayer];
    scores[activePlayer] >= 20 ? setWinner() :
        switchPlayer();
}


rollDiceButton.addEventListener("click", function () {
    if (playing) rollDice();
});
holdButton.addEventListener("click", function () {
    if (playing) setPlayerScore();
});
newGameButton.addEventListener("click", init);
