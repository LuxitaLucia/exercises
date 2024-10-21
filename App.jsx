

export default () => {
  const [gameOver, setGameOver] = React.useState(true);
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState("x");

  const handleClick = (cellIndex) => () => {
    const newBoard = board.map((cell, i) =>
      i == cellIndex ? currentPlayer : cell
    );
  };

  return (
    <div>
      <h1 class="text-center font-bold cursor-pointer mt-6">Tick Tac Toe</h1>

      <div class="w-72 h-72 grid grid-rows-3  grid-cols-3 gap-2 bg-white m-auto mt-6">
        {board.map((cell, cellIndex) => (
          <div
            onClick={handleClick(cellIndex)}
            key={cellIndex}
            class="bg-black cursor-pointer"
          >
            {cellIndex}
          </div>
        ))}
      </div>

      {gameOver && (
        <div class="flex inset-0 fixed flex-col justify-center items-center bg-[rgba(0,0,0,0.9)]">
         
          <h2>GAME OVER</h2> 
          <br />
          <h3 className="text-center">
            It's a draw <br />
            <br />
            Refresh to play again
          </h3>
        </div>
      )}
    </div>
  );
};
