import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (err) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display-screen">
        <input type="text" id="display" value={display} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("+")}>+</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("-")}>-</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("*")}>*</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => appendValue("/")}>/</button>
        <button onClick={clearDisplay} className="clear">C</button>
      </div>
    </div>
  );
}

export default App;
