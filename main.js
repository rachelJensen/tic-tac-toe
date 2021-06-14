//global variables
var currentGame = new Game();

var board = document.getElementById('gameboard');
var header = document.getElementById('title');

//event listeners
window.addEventListener('load', function() {
  updateScoreDisplay(currentGame.player1);
  updateScoreDisplay(currentGame.player2);
});

board.addEventListener('click', play);

//functions
function play(event) {
  setWhosTurn();
  selectSquare(event.target.id);
  displayBoard();
  checkWinner();
  checkDraw();

  if (!currentGame.hasWinner && !currentGame.checkForDraw()) {
    declareWhosTurn();
  }
};

function checkWinner() {
  var winner = currentGame.checkForWin();
  if (winner) {
    board.removeEventListener('click', play);
    var wins = currentGame[winner].retrieveWinsFromStorage();
    currentGame[winner].wins = wins + 1;
    currentGame[winner].saveWinsToStorage();
    currentGame.hasWinner = true;
    displayWinner();
    updateScoreDisplay(currentGame[winner]);
    window.setTimeout(startNewGame, 3000);
  }
};

function checkDraw() {
  if (currentGame.checkForDraw()) {
    header.innerHTML = `<h1>It's a draw</h1>`;
    window.setTimeout(startNewGame, 5000);
  }
}

function declareWhosTurn() {
  if (currentGame.whosTurn === 'player2') {
    header.innerHTML = `
      <h1 id="its">It's</h1>
      <img class="winner" id="dragonImg" src="./assets/1566741.svg" alt="dragon">
      <h1 id="turnOrWin">'s Turn</h1>`
  } else {
    header.innerHTML = `
      <h1 id="its">It's</h1>
      <img class="winner" id="unicornImg" src="./assets/2023216.svg" alt="unicorn">
      <h1 id="turnOrWin">'s Turn</h1>`
  }
};

function displayWinner() {
  if (currentGame.whosTurn === 'player1') {
    header.innerHTML = `
      <img class="winner" id="dragonImg" src="./assets/1566741.svg" alt="dragon">
      <h1 id="turnOrWin"> is the Winner!</h1>`
  } else {
    header.innerHTML = `
      <img class="winner" id="unicornImg" src="./assets/2023216.svg" alt="unicorn">
      <h1 id="turnOrWin">is the Winner!</h1>`
  }
};

function updateScoreDisplay(winnerInfo) {
  var scoreToUpdate = document.getElementById(winnerInfo.token);
  scoreToUpdate.innerText = currentGame[winnerInfo.id].wins;
};

function setWhosTurn() {
  if (currentGame.playCount % 2 === 0) {
    currentGame.whosTurn = currentGame.player1.id;
  } else {
    currentGame.whosTurn = currentGame.player2.id;
  }
};

function selectSquare(squareId) {
  var mark = currentGame.whosTurn;
  if (typeof currentGame.gameboard[squareId] === 'number') {
    currentGame.gameboard[squareId] = mark;
    currentGame.playCount++;
  }
};

function startNewGame() {
  currentGame.resetBoard();
  displayBoard();
  header.innerHTML = `
    <h1 id="its">It's</h1>
    <img class="winner" id="dragonImg" src="./assets/1566741.svg" alt="dragon">
    <h1 id="turnOrWin">'s Turn</h1>`
};

function displayBoard() {
  for (var property in currentGame.gameboard) {
    var squareToMark = document.getElementById(property);

    if (currentGame.gameboard[property] === 'player1') {
      squareToMark.innerHTML =
        '<img class="icon" src="./assets/1566741.svg" alt="dragon">';
    } else if (currentGame.gameboard[property] === 'player2'){
      squareToMark.innerHTML =
        '<img class="player2 icon" src="./assets/2023216.svg" alt="unicorn">';
    } else {
      squareToMark.innerHTML = '';
    }
  }
};












//
