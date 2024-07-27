import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const onSquareClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Pemenangnya adalah : " + winner;
  } else {
    status = "Sekarang Giliran : " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square squares={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square squares={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square squares={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="flex">
        <Square squares={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square squares={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square squares={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="flex">
        <Square squares={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square squares={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square squares={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}
function calculateWinner(squares) {
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
