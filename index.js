// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

// Start button
var startBtn = document.getElementById('startBtn');

// Circle
var circleRound = document.getElementsByClassName('circle-round')[0];

// Players
var players = document.getElementById('players');
var player1Place = document.getElementsByClassName('player1Place')[0];
var player2Place = document.getElementsByClassName('player2Place')[0];
var player1 = '';
var player2 = '';

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



startBtn.addEventListener('click', askForNames);
function askForNames() {
  player1 = prompt('Enter the name of the first player');
  player2 = prompt('Enter the name of the second player');
  displayGame();
}

function displayGame() {
  startBtn.classList.add('d-none');
  players.classList.remove('d-none');

  player1Name.innerHTML = player1;
  player2Name.innerHTML = player2;
  player1Btn.addEventListener('click', player1Roll);
  player2Btn.addEventListener('click', player2Roll);
}




startAgain.addEventListener('click', clearInputs);















function clearInputs() {
  rollingCounter = 1;
  // player1Name.innerHTML = "Player1";
  // player2Name.innerHTML = "Player2";
  player1Current.innerHTML = '0';
  player2Current.innerHTML = '0';
  player1Score.innerHTML = '0';
  player2Score.innerHTML = '0';
  player1Btn.removeAttribute('disabled');
  player2Btn.removeAttribute('disabled');
  player1Place.style.background = 'none';
  player2Place.style.background = 'none';
  startAgain.style.display = 'none';
  player2TotalScore = 0;
  player1TotalScore = 0;
  circleRound.innerHTML = '1';
}

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

function gameOver() {
  player1Btn.setAttribute('disabled', 'disabled');
  player2Btn.setAttribute('disabled', 'disabled');
  startAgain.style.display = 'block';
  if (player1TotalScore > player2TotalScore) {
    player1Place.style.background = '#5cb85c';
  } else if (player1TotalScore < player2TotalScore) {
    player2Place.style.background = '#5cb85c';
  } else {
    player1Place.style.background = '#c9302c';
    player2Place.style.background = '#c9302c';
  }
}
