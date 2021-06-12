[Link to organizational doc](https://gist.github.com/rachelJensen/935124f1e5874025ae757bb21a5a908a)

When the page loads, a new game should be ready to be played.

Each click will...
  - check who's turn it is (game.is1sTurn)
  - mark the gameboard square(game.gameboard.sqr#) that was clicked with the player who's turn it is
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
