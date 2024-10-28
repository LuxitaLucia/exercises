export default () => {
  const [gameOver, setGameOver] = React.useState(false);
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState("X");
  const [winningPlayer, setWinningPlayer] = React.useState("It's a draw");
  const winningMooves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const handleClick = (cellIndex) => () => {
    if (board[cellIndex] == null) {
      let isGameOver = false;

      const newBoard = board.map((cell, i) =>
        i == cellIndex ? currentPlayer : cell
      );

      for (const moove of winningMooves) {
        if (
          newBoard[moove[0]] == currentPlayer &&
          newBoard[moove[1]] == currentPlayer &&
          newBoard[moove[2]] == currentPlayer
        ) {
          isGameOver = true;
          setWinningPlayer(`${currentPlayer} wins !`);
          setGameOver(true);
          break;
        }
      }

      if (
        !isGameOver &&
        newBoard.reduce((a, v) => (v !== null ? a + 1 : a), 0) == 9
      )
        setGameOver(true);

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
    }
  };

  return (
    <div>
      <h1 class="text-center font-bold cursor-pointer ">Tick Tac Toe</h1>

      <div class="w-72 h-72 grid grid-rows-3  grid-cols-3 gap-2 bg-white m-auto mt-6">
        {board.map((cell, cellIndex) => (
          <div
            onClick={handleClick(cellIndex)}
            key={cellIndex}
            class="bg-black cursor-pointer"
          >
            {cell == "X" && <div class="text-[70px] items-center">X</div>}
            {cell == "O" && <div class="text-[70px] items-center">O</div>}
          </div>
        ))}
      </div>

      {gameOver && (
        <div class="flex inset-0 fixed flex-col justify-center items-center bg-[rgba(0,0,0,0.9)]">
          <h2>GAME OVER</h2>
          <br />
          <h3 className="text-center">
            {winningPlayer} <br />
            <br />
            Refresh to play again
          </h3>
        </div>
      )}
    </div>
  );
};
