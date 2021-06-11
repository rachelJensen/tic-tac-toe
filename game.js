class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
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
    this.whosTurn = null;
  }

  checkForWin() {
    var square = this.gameboard;
    var winner = '';

    if (square.one === square.two && square.one === square.three) {
      winner = square.one;
      console.log('found a winner', 'row 1')
    }
    if (square.four === square.five && square.four === square.six) {
      winner = square.four;
      console.log('found a winner', 'row 2')
    }
    if (square.seven === square.eight && square.seven === square.nine) {
      winner = square.seven;
      console.log('found a winner', 'row 3')
    }
    if (square.one === square.four && square.one === square.seven) {
      winner = square.one;
      console.log('found a winner', 'column 1')
    }
    if (square.two === square.five && square.two === square.eight) {
      winner = square.two;
      console.log('found a winner', 'column 2')
    }
    if (square.three === square.six && square.three === square.nine) {
      winner = square.three;
      console.log('found a winner', 'column 3')
    }
    if (square.three === square.five && square.three === square.seven) {
      winner = square.three;
      console.log('found a winner', 'diagnol 1')
    }
    if (square.one === square.five && square.one === square.nine) {
      winner = square.one;
      console.log('found a winner', 'diagnol 2')
    }
    return winner;
  };

  checkForDraw() {
    if (this.playCount === 9) {
      return 'draw';
    }
  }

  resetBoard() {
    //reseting the board should just be an
  }
}
