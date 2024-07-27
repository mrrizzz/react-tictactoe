import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";

export default function Square({ squares, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="boardSquare">
      {squares}
    </button>
  );
}
