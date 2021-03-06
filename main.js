//global variables
var currentGame = new Game('player1');

var board = document.getElementById('gameboard');
var header = document.getElementById('title');
var resetBtb = document.getElementById('resetBtn');

//event listeners
window.addEventListener('load', function() {
  updateScoreDisplays(currentGame.player1);
  updateScoreDisplays(currentGame.player2);
});

board.addEventListener('click', play);

resetBtn.addEventListener('click', resetScores);

//functions
function play(event) {
  if (typeof currentGame.gameboard[event.target.id] === 'number') {
    selectSquare(event.target.id);
    displayBoard();
    checkWinner();
    checkDraw();
    if (!currentGame.hasWinner && !currentGame.checkForDraw()) {
      setWhosTurn();
      declareWhosTurn();
    }
  }
};

function selectSquare(squareId) {
  var mark = currentGame.whosTurn;
  if (typeof currentGame.gameboard[squareId] === 'number') {
    currentGame.gameboard[squareId] = mark;
    currentGame.playCount++;
  }
};

function displayBoard() {
  for (var property in currentGame.gameboard) {
    var squareToMark = document.getElementById(property);

    if (currentGame.gameboard[property] === 'player1') {
      squareToMark.innerHTML =
        '<img class="dragon token" src="./assets/1566741.svg" alt="dragon">';
    } else if (currentGame.gameboard[property] === 'player2'){
      squareToMark.innerHTML =
        '<img class="unicorn token" src="./assets/2023216.svg" alt="unicorn">';
    } else {
      squareToMark.innerHTML = '';
    }
  }
};

function checkWinner() {
  var winner = currentGame.checkForWin();
  if (winner) {
    currentGame.hasWinner = true;
    board.removeEventListener('click', play);
    updateScore(winner);
    displayWinner();
    updateScoreDisplays(currentGame[winner]);
    window.setTimeout(startNewGame, 3000);
  }
};

function updateScore(winner) {
  var wins = currentGame[winner].retrieveWinsFromStorage();
  currentGame[winner].wins = wins + 1;
  currentGame[winner].saveWinsToStorage();
};

function displayWinner() {
  if (currentGame.whosTurn === 'player1') {
    header.innerHTML = `
      <div class="winner-display glow-red">
        <img class="winner" src="./assets/1566741.svg" alt="dragon">
        <h1 id="turnOrWin"> is the Winner!</h1>
      </div>`;
  } else {
    header.innerHTML = `
      <div class="winner-display glow-teal">
        <img class="winner" src="./assets/2023216.svg" alt="unicorn">
        <h1 id="turnOrWin">is the Winner!</h1>
      </div>`;
  }
};

function updateScoreDisplays(winnerInfo) {
  var scoreToUpdate = document.getElementById(winnerInfo.token);
  scoreToUpdate.innerText = currentGame[winnerInfo.id].wins;
};

function checkDraw() {
  if (currentGame.checkForDraw()) {
    header.innerHTML = `<h1>It's a draw</h1>`;
    window.setTimeout(startNewGame, 3000);
  }
};

function setWhosTurn() {
  if (currentGame.whosTurn === 'player1') {
    currentGame.whosTurn = 'player2';
  } else {
    currentGame.whosTurn = 'player1';
  }
};

function declareWhosTurn() {
  if (currentGame.whosTurn === 'player1') {
    header.innerHTML = `
      <h1 id="its">It's</h1>
      <img class="winner" src="./assets/1566741.svg" alt="dragon">
      <h1 id="turnOrWin">'s Turn</h1>`;
  } else {
    header.innerHTML = `
      <h1 id="its">It's</h1>
      <img class="winner" src="./assets/2023216.svg" alt="unicorn">
      <h1 id="turnOrWin">'s Turn</h1>`;
  }
};

function startNewGame() {
  currentGame.resetBoard();
  board.addEventListener('click', play);
  displayBoard();
  declareWhosTurn();
};

function resetScores() {
  currentGame.player1.wins = 0;
  currentGame.player2.wins = 0;
  currentGame.player1.saveWinsToStorage();
  currentGame.player2.saveWinsToStorage();

  updateScoreDisplays(currentGame.player1);
  updateScoreDisplays(currentGame.player2);
};
