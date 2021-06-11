//global variables
var p1 = new Player('player1', 'dragon');
var p2 = new Player('player2', 'unicorn');
var currentGame = new Game(p1, p2);



//event listeners


//if you have an event listenter on


//functions

function play(squareClicked) {
  selectSquare(squareClicked);
  var winner = currentGame.checkForWin();
  if (winner) {
    return winner;
  }
  var draw = currentGame.checkForDraw();
  if (draw) {
    return draw;
  }
}

function setWhosTurn() {
  if (currentGame.playCount % 2 === 0) {
    currentGame.whosTurn = currentGame.player1.token;
  } else {
    currentGame.whosTurn = currentGame.player2.token;
  }
}

function selectSquare(square) {
  setWhosTurn();
  var mark = currentGame.whosTurn;
  currentGame.gameboard[square] = mark;
  currentGame.playCount++;
}




/* When the page loads, a new game should be ready to be played.

Each click will...
  - check who's turn it is (game.is1sTurn)
  - mark the gameboard square(game.gameboard.sqr#) that was clicked with the player who's turn it is
  - add one to the game.playCount
  - check for a win
    - if there's a win, activate the winning function
  - check for a draw
    - if there's a draw, activate draw function
  - switch who's turn

When a win is found
  - the winner message is displayed
  - storage is updated with the win
  - the winning side's points get updated from storage
  - the display of wins is updated
  - the gameboard is reassigned to a new instance of game
  - the game display is reset

When a draw is found
  - draw message is displayed
  - gameboard is reassigned to a new instance of gameboard
  - the game display is reset
*/
