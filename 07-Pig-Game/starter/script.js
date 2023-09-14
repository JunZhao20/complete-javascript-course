'use strict';

// selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
let score0EL = document.querySelector('#score--0');
let score1EL = document.getElementById('score--1'); // little faster than ^^
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
let currentScore0EL = document.getElementById('current--0');
let currentScore1EL = document.getElementById('current--1');

//setting player scores to 0
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentScore0EL.textContent = 0;
  currentScore1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();

let switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//rolling dice functionaility
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  } else {
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    //add current score to active players score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

/*
  let lst = ['score--0', 'score--1', 'current--0', 'current--1'];
  for (let i = 0; i < lst.length; i++) {
    document.getElementById(lst[i]).textContent = 0;
  }
*/
