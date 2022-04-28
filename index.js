// Import stylesheets
import './style.css';

// Write Javascript code!


/* Players*/
// var player1 = 'Danilo';
// var player2 = 'Ivan';
var player1 = prompt('Player 1');
var player2 = prompt('Player 2');

/* Round */
var round = 0;

/* Player score */
var player1Score = 0;
var player2Score = 0;

function bacanjeKockice() {
  /* Eliminacija skakanja konzole */
  console.clear();

  /* Round count */
  round++;

  /* Dice */
  // var k1 = Math.floor(Math.random() * 6);
  // var k2 = Math.floor(Math.random() * 6);
  var kockica1 = Math.ceil(Math.random() * 6);
  var kockica2 = Math.ceil(Math.random() * 6);

  /* Player score */
  player1Score += kockica1;
  player2Score += kockica2;

  /* Dice trowed */
  //console.log(kockica1, kockica2);
  console.log('*** ROUND ' + round + ' ***');
  console.log(player1 + ':' + kockica1 + ' --- ' + kockica2 + ':' + player2);

  /* Current score */
  console.log(
    player1 +
      '(' +
      player1Score +
      ')' +
      ' : ' +
      '(' +
      player2Score +
      ')' +
      player2
  );

  /* Game ends after 10 rounds */
  if (round === 10) {
    winner();
  } else {
    setTimeout(bacanjeKockice, 3000);
  }
}

bacanjeKockice();

function winner() {
  if (player1Score > player2Score) {
    console.log('Winner: ' + player1 + '!');
  } else if (player1Score < player2Score) {
    console.log('Winner: ' + player2 + '!');
  } else {
    console.log('Draw: no winner!');
  }
}
