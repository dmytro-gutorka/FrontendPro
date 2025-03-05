'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const totalScore0El = document.querySelector('.name--0');
const totalScore1El = document.querySelector('.name--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentTotalScoreOfBothPlayers = document.querySelectorAll(".current-score");
const currentScoreOfBothPlayers = document.querySelectorAll(".score");


let isGameOver = false;

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;


score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden')

function switchPlayer() {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', () => {
    if (!isGameOver) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', () => {
    if (!isGameOver) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10){
            diceEl.classList.add('hidden');
            isGameOver = true;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        } else {
            switchPlayer()
        }
    }
    
})


btnNew.addEventListener('click', () => {
    isGameOver = false;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    scores = [0, 0]
    currentScore = 0
    currentTotalScoreOfBothPlayers[0].textContent = 0
    currentTotalScoreOfBothPlayers[1].textContent = 0

    currentScoreOfBothPlayers[0].textContent = 0
    currentScoreOfBothPlayers[1].textContent = 0
    
})