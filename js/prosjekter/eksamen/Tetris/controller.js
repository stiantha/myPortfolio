function init() {
  blank();
  updateView();
}
function blank() {
  board.fill("");
}
function addShape(shape, color) {
  blank();
  shape.map((index) => {
    board[index] = color;
  });
  updateView();
}

function rotate() {
  const rotatedBoard = new Array(16);
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      rotatedBoard[r * 4 + c] = board[c * 4 + (3 - r)];
    }
  }
  board = rotatedBoard;
  updateView();
}
