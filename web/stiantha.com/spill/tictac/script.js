const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const makeMove = (cellIndex) => {
  const clickedCell = cells[cellIndex];

  if (gameActive && clickedCell.textContent === '') {
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer);

    if (checkWin()) {
      highlightWinningCombination();
      announceResult(`${currentPlayer} wins!`);
      return;
    }

    if (checkDraw()) {
      announceResult("It's a draw!");
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // If it's the computer's turn, make the best move
    if (currentPlayer === 'O') {
      makeComputerMove();
    }
  }
};

const makeComputerMove = () => {
  const bestMove = getBestMove();
  makeMove(bestMove);
};

const getBestMove = () => {
  let bestScore = -Infinity;
  let bestMove;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      cells[i].textContent = 'O';
      const score = minimax(cells, 0, false, -Infinity, Infinity);
      cells[i].textContent = '';

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};

const minimax = (board, depth, isMaximizing, alpha, beta) => {
  if (checkWin()) {
    return isMaximizing ? -1 : 1;
  } else if (checkDraw()) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i].textContent === '') {
        board[i].textContent = 'O';
        const score = minimax(board, depth + 1, false, alpha, beta);
        board[i].textContent = '';
        bestScore = Math.max(score, bestScore);
        alpha = Math.max(alpha, bestScore);

        if (beta <= alpha) {
          break;
        }
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i].textContent === '') {
        board[i].textContent = 'X';
        const score = minimax(board, depth + 1, true, alpha, beta);
        board[i].textContent = '';
        bestScore = Math.min(score, bestScore);
        beta = Math.min(beta, bestScore);

        if (beta <= alpha) {
          break;
        }
      }
    }

    return bestScore;
  }
};

const checkWin = () => {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
};

const checkDraw = () => {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
};

const resetBoard = () => {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O', 'win');
  });

  currentPlayer = 'X';
  gameActive = true;
};

const announceResult = (message) => {
  setTimeout(() => {
    alert(message);
    resetBoard();
  }, 100);
};

const highlightWinningCombination = () => {
  winningCombinations.forEach(combination => {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      cells[a].classList.add('win');
      cells[b].classList.add('win');
      cells[c].classList.add('win');
    }
  });
};
