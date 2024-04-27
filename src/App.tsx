import React from "react";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }): React.JSX.Element {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4 font-bold">{status}</div>
        <div className="grid grid-cols-3 gap-4 bg-red-600">
          {squares &&
            squares.map((value, index) => (
              <Square
                key={index}
                value={value}
                onSquareClick={() => handleClick(index)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
