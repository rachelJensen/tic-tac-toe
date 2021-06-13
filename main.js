//global variables
var currentGame = new Game();

var board = document.getElementById('gameboard');
var header = document.getElementById('title');

//event listeners
// board.addEventListener('click', function(event) {
//   play(event);
// });

board.addEventListener('click', play);

//functions
function play(event) {
  setWhosTurn();
  selectSquare(event.target.id);
  displayBoard();
  checkWinner();
  checkDraw();

  if (!currentGame.checkForWin() && !currentGame.checkForDraw()) {
    declareWhosTurn();
  }
};

function checkWinner() {
  var winner = currentGame.checkForWin();
  if (winner) {
    //disable event listener
    board.removeEventListener('click', play);

    currentGame[winner].wins += 1;;
    currentGame[winner].saveWinsToStorage();
    declareWinner();
    updateScoreDisplay(currentGame[winner]); //FIX from Storage
    window.setTimeout(startNewGame, 3000);
    return;
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
    console.log('should display dragon\'s turn')
    header.innerHTML = `<h1 id="its">It's</h1>
    <img class="winner" id="dragonImg" src="./assets/1566741.svg" alt="dragon">
    <h1 id="turnOrWin">'s Turn</h1>`
  } else {
    console.log('should display unicorn turn')
    header.innerHTML = `<h1 id="its">It's</h1>
    <img class="winner" id="unicornImg" src="./assets/2023216.svg" alt="unicorn">
    <h1 id="turnOrWin">'s Turn</h1>`
  }
};

function declareWinner() {
  if (currentGame.whosTurn === 'player1') {
    console.log('dragon won')
    header.innerHTML = `
    <img class="winner" id="dragonImg" src="./assets/1566741.svg" alt="dragon">
    <h1 id="turnOrWin"> is the Winner!</h1>`
  } else {
    console.log('unicorn won')
    header.innerHTML = `
    <img class="winner" id="unicornImg" src="./assets/2023216.svg" alt="unicorn">
    <h1 id="turnOrWin">is the Winner!</h1>`
  }
};

function updateScoreDisplay(winnerInfo) {
  var scoreToUpdate = document.getElementById(winnerInfo.token);
  scoreToUpdate.innerText = winnerInfo.wins;
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
