//global variables
var p1 = new Player('player1', 'dragon');
var p2 = new Player('player2', 'unicorn');
var currentGame = new Game(p1, p2);

var board = document.getElementById('gameboard');

//event listeners
board.addEventListener('click', function(event) {
  play(event);
});


//functions

function play(event) {
  var chosen = event.target.id;
  setWhosTurn();
  selectSquare(chosen);

  var winner = currentGame.checkForWin();
  if (winner) {
    currentGame[winner].wins++;
    //should activate the saveWinsToStorage method
    // update the display of the winnings using retrieveWinsFromStorage method
    //display the winner on the DOM
    window.setTimeout(startNewGame, 3000);

  }

  var draw = currentGame.checkForDraw();
  if (draw) {
    console.log(draw);
    //rather than returning draw, this should invoke a function that will display the draw message to the DOM
    //activate the reset timer scope.setTimeout(startNewGame[, 3])
      // --> does scope refer to the DOM or the data model??
  }
}

function setWhosTurn() {
  if (currentGame.playCount % 2 === 0) {
    currentGame.whosTurn = currentGame.player1.id;
  } else {
    currentGame.whosTurn = currentGame.player2.id;
  }
}

function selectSquare(square) {
  // setWhosTurn();
  var mark = currentGame.whosTurn;
  if (typeof currentGame.gameboard[square] === 'number') {
    currentGame.gameboard[square] = mark;
    currentGame.playCount++;
  }
};

function startNewGame() {
  currentGame.resetBoard(p1,p2);
}

function displayWinner() {

}

function displayToken() {

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
