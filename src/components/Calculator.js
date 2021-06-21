import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [value, setValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isPendingOperand, setIsPendingOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);

  const clearContent = () => {
    setDisplay("0");
    setValue(null);
    setOperator(null);
    setIsPendingOperand(false);
  };

  const handleKey = (key) => {
    if (isPendingOperand) {
      setDisplay(key);
      setIsPendingOperand(false);
    } else {
      setDisplay(display === "0" ? key : display + key);
    }

    setLastOperand(Number(key));
  };

  const handleOperator = (inputOperator) => {
    const operand = Number(display);

    if (value) {
      if (operator && !isPendingOperand) {
        setValue(calculate(value, operator, operand));
        setDisplay(String(calculate(value, operator, operand)));
      } else if (
        operator !== "=" &&
        isPendingOperand &&
        inputOperator === "="
      ) {
        setValue(calculate(value, operator, value));
        setDisplay(String(calculate(value, operator, value)));
      } else if (
        operator === "=" &&
        isPendingOperand &&
        inputOperator === "="
      ) {
        setValue(calculate(value, lastOperator, lastOperand));
        setDisplay(String(calculate(value, lastOperator, lastOperand)));
      }
    } else {
      setValue(operand);
    }

    setOperator(inputOperator);
    if (inputOperator !== "=") {
      setLastOperator(inputOperator);
    }
    setIsPendingOperand(true);
  };

  const calculate = (previousValue, currentOperator, operand) => {
    let result = previousValue;
    switch (currentOperator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "/":
        result /= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "=":
        result = operand;

        break;
      default:
        break;
    }

    return result;
  };

  return (
    <div>
      value: {value} <br />
      operator: {operator} <br />
      isPending: {isPendingOperand && "true"} <br />
      lastOperand: {lastOperand}
      <br />
      lastOperator: {lastOperator}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 py-3 border border-dark d-flex justify-content-end bg-dark text-light">
            <Display display={display} />
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
    </div>
  );
};

export default Calculator;
