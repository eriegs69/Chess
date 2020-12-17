$(function() {
    console.log("Hello chess user");

    var config = {
        pieceTheme: 'images/chesspieces/wikipedia/{piece}.png',
        position: 'start'
      }
      var board = Chessboard('board1', config)
});
