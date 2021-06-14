class Game {
  constructor(whoGoesFirst) {
    this.player1 = new Player('player1', 'dragon1');
    this.player2 = new Player('player2', 'unicorn2');
    this.gameboard = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    }
    this.playCount = 0;
    this.whosTurn = whoGoesFirst;
    this.hasWinner = false;
  };

  checkForWin() {
    var square = this.gameboard;
    var winner = '';

    if (square.one === square.two && square.one === square.three) {
      winner = square.one;
    }
    if (square.four === square.five && square.four === square.six) {
      winner = square.four;
    }
    if (square.seven === square.eight && square.seven === square.nine) {
      winner = square.seven;
    }
    if (square.one === square.four && square.one === square.seven) {
      winner = square.one;
    }
    if (square.two === square.five && square.two === square.eight) {
      winner = square.two;
    }
    if (square.three === square.six && square.three === square.nine) {
      winner = square.three;
    }
    if (square.three === square.five && square.three === square.seven) {
      winner = square.three;
    }
    if (square.one === square.five && square.one === square.nine) {
      winner = square.one;
    }
    return winner;
  };

  checkForDraw() {
    if (this.playCount === 9 && !this.hasWinner) {
      return 'draw';
    }
  };

  resetBoard() {
    if (this.whosTurn === 'player1') {
      currentGame = new Game('player2');
    } else {
      currentGame = new Game('player1');
    }
  };
};
