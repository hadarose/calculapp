import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [value, setValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isPendingOperand, setIsPendingOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);

  const clearContent = () => {
    setDisplayNumber("0");
    setValue(null);
    setOperator(null);
    setIsPendingOperand(false);
  };

  const handleKey = (key) => {
    console.log("what key was pressed? ", key, typeof key);
    if (isNaN(key)) {
      if (
        key === "=" ||
        key === "Enter" ||
        key === "/" ||
        key === "*" ||
        key === "-" ||
        key === "+"
      ) {
        handleOperator(key);
        return;
      } else if (key === "Backspace") {
        clearContent();
        return;
      } else {
        return;
      }
    }

    setLastOperand(key);

    if (isPendingOperand) {
      setDisplayNumber(key);
      setIsPendingOperand(false);
    } else {
      setDisplayNumber(displayNumber === "0" ? key : displayNumber + key);
    }
  };

  const handleOperator = (inputOperator) => {
    const operand = Number(displayNumber);
    console.log("what is operand? ", operand);
    console.log("wat is lastoperand? ", lastOperand);

    setOperator(inputOperator);
    setIsPendingOperand(true);

    if (!value) {
      setValue(operand);
    } else if (operator) {
      setValue(calculate(value, operand));
      setDisplayNumber(String(calculate(value, operand)));
    }
  };

  const calculate = (previousValue, currentValue) => {
    console.log(previousValue, currentValue, typeof currentValue);
    let result = previousValue;

    switch (operator) {
      case "+":
        result += currentValue;
        break;
      case "-":
        result -= currentValue;
        break;
      case "/":
        result /= currentValue;
        break;
      case "*":
        result *= currentValue;
        break;
      case "=":
      case "Enter":

        result = currentValue + lastOperand;
        break;
      default:
        break;
    }

    return result;
  };

  return (
    <div
      className="container vh-100 vw-100"
      style={{ outline: 0 }}
      tabIndex="1"
      onKeyDown={(event) => handleKey(event.key)}
    >
      what is value? {value} <br />
      what is operator? {operator} <br />
      what is isPendingOperand? {isPendingOperand && "true"} <br />
      <div className="row d-flex justify-content-center">
        <div className="col-4 py-3 border border-dark d-flex justify-content-end bg-dark text-light">
          <Display display={displayNumber} />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          onClick={clearContent}
          className="col-1 py-2 border border-dark bg-light text-dark"
        >
          AC
        </button>
        <div className="col-1 py-2 border border-dark bg-light text-dark" />
        <div className="col-1 py-2 border border-dark bg-light text-dark" />
        <button
          className="col-1 py-2 btn border border-dark btn-warning rounded-0"
          data-toggle="button"
          aria-pressed="false"
          onClick={() => handleOperator("/")}
        >
          &#247;
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          onClick={() => handleKey("7")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          7
        </button>
        <button
          onClick={() => handleKey("8")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          8
        </button>
        <button
          onClick={() => handleKey("9")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          9
        </button>
        <button
          className="col-1 py-2 btn border border-dark btn-warning rounded-0"
          data-toggle="button"
          aria-pressed="false"
          onClick={() => handleOperator("*")}
        >
          &#215;
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          onClick={() => handleKey("4")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          4
        </button>
        <button
          onClick={() => handleKey("5")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          5
        </button>
        <button
          onClick={() => handleKey("6")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          6
        </button>
        <button
          className="col-1 py-2 btn border border-dark btn-warning rounded-0"
          data-toggle="button"
          aria-pressed="false"
          onClick={() => handleOperator("-")}
        >
          -
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          onClick={() => handleKey("1")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          1
        </button>
        <button
          onClick={() => handleKey("2")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          2
        </button>
        <button
          onClick={() => handleKey("3")}
          className="col-1 py-2 border border-dark bg-secondary text-white"
        >
          3
        </button>
        <button
          className="col-1 py-2 btn border border-dark btn-warning rounded-0"
          data-toggle="button"
          aria-pressed="false"
          onClick={() => handleOperator("+")}
        >
          +
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          className="col-3 py-2 border border-dark bg-secondary text-white"
          onClick={() => handleKey("0")}
        >
          0
        </button>
        <button
          className="col-1 py-2 border border-dark bg-warning"
          onClick={() => handleOperator("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
