// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

// Start button
var startBtn = document.getElementById('startBtn');

// Circle
var circleRound = document.getElementsByClassName('circle-round')[0];

// Scoreboard
var scoreboard = document.getElementsByClassName('scoreboard')[0];

// Players
var players = document.getElementById('players');
var player1Place = document.getElementsByClassName('player1Place')[0];
var player2Place = document.getElementsByClassName('player2Place')[0];
var player1NameValue = '';
var player2NameValue = '';

var container = document.getElementsByClassName('container')[0];

// Scoreboard
var player1TotalScore = 0;
var player2TotalScore = 0;

var player1Score = document.getElementById('player1Score');
var player2Score = document.getElementById('player2Score');

var player1Current = document.getElementById('player1Current');
var player2Current = document.getElementById('player2Current');

var player1Name = document.getElementById('player1Name');
var player2Name = document.getElementById('player2Name');

var player1Btn = document.getElementById('player1Btn');
var player2Btn = document.getElementById('player2Btn');

var rollingCounter = 1;

// Start again button
var startAgain = document.getElementById('startAgain');

// Start game
startBtn.addEventListener('click', askForNames);
function askForNames() {
  player1NameValue = prompt('Enter the name of the first player');
  player2NameValue = prompt('Enter the name of the second player');
  displayGame();
}

// Display game
function displayGame() {
  startBtn.classList.add('d-none');
  players.classList.remove('d-none');
  scoreboard.classList.remove('d-none');

  player1Name.innerHTML = player1NameValue;
  player2Name.innerHTML = player2NameValue;

  player1Btn.addEventListener('click', player1Roll);
  player2Btn.addEventListener('click', player2Roll);
}

// Player 1 roll
function player1Roll() {
  rollingCounter += 0.5;
  this.setAttribute('disabled', 'disabled');
  player2Btn.removeAttribute('disabled');
  var rand = Math.floor(Math.random() * 6 + 1);
  player1TotalScore += rand;
  player1Current.innerHTML = rand;
  player1Score.innerHTML = player1TotalScore;
  if (Math.floor(rollingCounter) < 11) {
    circleRound.innerHTML = Math.floor(rollingCounter);
  } else {
    gameOver();
  }
}

// Player 2 roll
function player2Roll() {
  rollingCounter += 0.5;
  this.setAttribute('disabled', 'disabled');
  player1Btn.removeAttribute('disabled');
  var rand = Math.floor(Math.random() * 6 + 1);
  player2TotalScore += rand;
  player2Current.innerHTML = rand;
  player2Score.innerHTML = player2TotalScore;
  if (Math.floor(rollingCounter) < 11) {
    circleRound.innerHTML = Math.floor(rollingCounter);
  } else {
    gameOver();
  }
}

// Game over
function gameOver() {
  player1Btn.setAttribute('disabled', 'disabled');
  player2Btn.setAttribute('disabled', 'disabled');

  startAgain.classList.remove('d-none');

  if (player1TotalScore > player2TotalScore) {
    player1Place.style.background = 'green';
    player2Place.style.background = 'red';
    player1Btn.innerHTML = 'Won!';
    player2Btn.innerHTML = 'Lost!';
    player2Btn.classList.remove('btn-success');
    player2Btn.classList.add('btn-danger');
  } else if (player1TotalScore < player2TotalScore) {
    player1Place.style.background = 'red';
    player2Place.style.background = 'green';
    player1Btn.innerHTML = 'Lost!';
    player1Btn.classList.remove('btn-success');
    player1Btn.classList.add('btn-danger');
    player2Btn.innerHTML = 'Won!';
  } else {
    player1Place.style.background = 'orange';
    player2Place.style.background = 'orange';
    player2Place.style.background = 'red';
    player1Btn.innerHTML = 'Draw!';
    player2Btn.innerHTML = 'Draw!';
  }
}

// Start again
startAgain.addEventListener('click', clearInputs);
function clearInputs() {
  rollingCounter = 1;

  player1Current.innerHTML = '0';
  player2Current.innerHTML = '0';

  player1Score.innerHTML = '0';
  player2Score.innerHTML = '0';

  player1Btn.removeAttribute('disabled');
  player2Btn.removeAttribute('disabled');

  player1Place.style.background = 'none';
  player2Place.style.background = 'none';

  player1Btn.innerHTML = 'Throw the dice';
  player2Btn.innerHTML = 'Throw the dice';

  if (player1Btn.classList.contains('btn-danger')) {
    player1Btn.classList.remove('btn-danger');
    player1Btn.classList.add('btn-success');
  } else {
    player2Btn.classList.remove('btn-danger');
    player2Btn.classList.add('btn-success');
  }

  startAgain.classList.add('d-none');

  player2TotalScore = 0;
  player1TotalScore = 0;

  circleRound.innerHTML = '1';
}
