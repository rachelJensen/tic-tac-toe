//global variables
var dragon = new Player('player1', 'dragon1');
var unicorn = new Player('player2', 'unicorn2');
var currentGame = new Game(dragon,  unicorn);

var board = document.getElementById('gameboard');
var dragonsTurn = document.getElementById('dragonImg');
var unicornsTurn = document.getElementById('unicornImg');
var its = document.getElementById('its');
var turnOrWin = document.getElementById('turnOrWin');

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
    currentGame[winner].saveWinsToStorage();
    declareWinner();
    //display winnings (from storage)
    updateScoreDisplay(currentGame[winner]); //displays from data model
    window.setTimeout(startNewGame, 3000);
    return;
  }
  
  declareWhosTurn();

  if (currentGame.checkForDraw()) {
    //display draw message
    window.setTimeout(startNewGame, 5000);
  }
}

function declareWhosTurn() { //HAS BUGS
  if (currentGame.whosTurn === 'player2') {
    dragonImg.hidden = false;
    unicornImg.hidden = true;
  } else {
    dragonImg.hidden = true;
    unicornImg.hidden = false;
  }
}

function declareWinner() {
  its.hidden = true;
  turnOrWin.innerText = 'won';
}

function updateScoreDisplay(winnerInfo) {
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


function displayWinner() {

}

function startNewGame() {
  currentGame.resetBoard(dragon, unicorn);
  displayBoard();
  dragonImg.hidden = false; //fixes bug in declareWhosTurn
  unicornImg.hidden = true; //fixes bug in declareWhosTurn
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
