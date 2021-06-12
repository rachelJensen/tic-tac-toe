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
  setWhosTurn();
  selectSquare(event.target.id);
  displayBoard();

  if (currentGame.checkForWin()) {
    //save win (to storage)
    //display winnings (from storage)
    window.setTimeout(startNewGame, 3000);
  }

  var draw = currentGame.checkForDraw();
  if (draw) {
    //display draw message
    console.log(draw);
    window.setTimeout(startNewGame, 3000);
  }

}

function setWhosTurn() {
  if (currentGame.playCount % 2 === 0) {
    currentGame.whosTurn = currentGame.player1.id;
  } else {
    currentGame.whosTurn = currentGame.player2.id;
  }
}

function selectSquare(squareId) {
  var mark = currentGame.whosTurn;
  if (typeof currentGame.gameboard[squareId] === 'number') {
    currentGame.gameboard[squareId] = mark;
    currentGame.playCount++;
  }
};

// function displayToken(squareId) {
//   var squareToMark = document.getElementById(squareId);
//   if (currentGame.gameboard[squareId] === 'player1') {
//     squareToMark.innerHTML = '<img class="icon" src="./assets/1566741.svg" alt="dragon">';
//   } else {
//     squareToMark.innerHTML = '<img class="player2 icon" src="./assets/2023216.svg" alt="unicorn">';
//   }
// }

function displayWinner() {

}

function startNewGame() {
  currentGame.resetBoard(p1,p2);
  //reset display
}

function displayBoard() {
  for (var property in currentGame.gameboard) {
    var squareToMark = document.getElementById(property);

    if (currentGame.gameboard[property] === 'player1') {
     squareToMark.innerHTML = '<img class="icon" src="./assets/1566741.svg" alt="dragon">';
    }

    if (currentGame.gameboard[property] === 'player2'){
      squareToMark.innerHTML = '<img class="player2 icon" src="./assets/2023216.svg" alt="unicorn">';
    }
  }
}












//
