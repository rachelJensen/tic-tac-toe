//global variables
var dragon = new Player('player1', 'dragon1');
var unicorn = new Player('player2', 'unicorn2');
var currentGame = new Game(dragon,  unicorn);

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

  var winner = currentGame.checkForWin();
  if (winner) {
    //disable eventListener
    currentGame[winner].wins += 1;;
    //save win (to storage)
    currentGame[winner].saveWinsToStorage();
    //display winnings (from storage)
    updateScore(currentGame[winner]);
    //reset board via timer
    window.setTimeout(startNewGame, 3000);
  }

  if (currentGame.checkForDraw()) {
    //display draw message
    window.setTimeout(startNewGame, 5000);
  }

}

function declareWinner() {

}

function updateScore(winnerInfo) {
  var scoreToUpdate = document.getElementById(winnerInfo.token);
  scoreToUpdate.innerText = winnerInfo.wins;
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
  currentGame.resetBoard(dragon, unicorn);
  displayBoard();
}

function displayBoard() {
  for (var property in currentGame.gameboard) {
    var squareToMark = document.getElementById(property);

    if (currentGame.gameboard[property] === 'player1') {
      squareToMark.innerHTML = '<img class="icon" src="./assets/1566741.svg" alt="dragon">';
    } else if (currentGame.gameboard[property] === 'player2'){
      squareToMark.innerHTML = '<img class="player2 icon" src="./assets/2023216.svg" alt="unicorn">';
    } else {
      squareToMark.innerHTML = '';
    }
  }
}












//
