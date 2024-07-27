import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

function OperationButton({ operator, className, setCount, toggle }) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    reset: () => 0,
  };
  const handleClick = () => {
    if (toggle && operator === "reset") {
      setCount(operations[operator]());
    } else if (operator !== "reset" && !toggle) {
      //akses kepada object operations menggunakan bracket notation karena properti yang dituju merupakan sebuah variabel dari luar objek
      setCount((count) => operations[operator](count, 1));
    }
  };

  const toggleStyleButton = () => {
    return (operator === "reset" && toggle) || (operator !== "reset" && !toggle)
      ? "bg-blue-600"
      : "bg-blue-100";
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 ${toggleStyleButton()}  bg-opacity-80 text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ${className}`}
    >
      {operator}
    </button>
  );
}

function Operand({ value, toggle }) {
  const displayValue = toggle ? "Done" : value;
  return <p>{displayValue}</p>;
}

function HomePage(params) {
  const [count, setCount] = useState(0);
  const toggle = count >= 10 || count < 0;
  return (
    <>
      <div>
        <div className="flex items-center space-x-2">
          <OperationButton operator="+" toggle={toggle} setCount={setCount} />
          <Operand value={count} toggle={toggle} />
          <OperationButton operator="-" toggle={toggle} setCount={setCount} />
        </div>
        <div>
          <OperationButton
            toggle={toggle}
            operator="reset"
            className="mt-6 ml-5"
            setCount={setCount}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
