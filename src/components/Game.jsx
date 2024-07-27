import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Turn from "./Turn";

export default function Game() {
  const [history, SetHistory] = useState([Array(9).fill(null)]);
  const [initialMove, setInitialMove] = useState(0);
  const currentSquares = history[initialMove];
  const xIsNext = initialMove % 2 === 0;

  function jumpTo(nextMove) {
    setInitialMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const newHistory = [...history.slice(0, initialMove + 1), nextSquares];
    SetHistory(newHistory);
    setInitialMove(newHistory.length - 1);
  }

  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to start game";
    }

    return (
      <li key={move}>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game flex">
      <div className="game-board m-6">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info m-6">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
