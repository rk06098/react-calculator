import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        if (isNaN(evalResult)) {
          setResult("NaN");
        } else if (!isFinite(evalResult)) {
          setResult("Infinity");
        } else {
          setResult(evalResult.toString());
        }
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="input-field" />
      <div className="result">{result}</div>
      <div className="buttons">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;