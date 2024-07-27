import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Square from "./Square";

export default function Turn({ xTurn }) {
  const value = xTurn ? "X" : "O";

  return <p>Sekarang Giliran {value}</p>;
}
