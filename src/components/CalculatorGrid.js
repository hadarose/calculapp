import Display from "./Display";
import { useState } from "react";

const CalculatorGrid = () => {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [value, setValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isPendingOperand, setIsPendingOperand] = useState(false);

  const clearContent = () => {
    setDisplayNumber("0");
    setValue(null);
    setOperator(null);
    setIsPendingOperand(false);
  };

  const handleKey = (key) => {
    if (isPendingOperand) {
      setDisplayNumber(key);
      setIsPendingOperand(false);
    } else {
      setDisplayNumber(displayNumber === "0" ? key : displayNumber + key);
    }
  };

  const handleOperator = (inputOperator) => {
    const operand = parseInt(displayNumber);

    if (!value) {
      setValue(operand);
    } else if (operator) {
      setValue(calculate(value, operand));
      setDisplayNumber(String(calculate(value, operand)));
    }

    setIsPendingOperand(true);
    setOperator(inputOperator);
  };

  const calculate = (previousValue, currentValue) => {
    let result = 0;
    switch (operator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "/":
        result = previousValue / currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "=":
        result = currentValue;
        break;
      default:
        break;
    }

    return result;
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 py-3 border border-dark d-flex justify-content-end bg-dark text-light">
            <Display props={displayNumber} />
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
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="7"
          >
            7
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="8"
          >
            8
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="9"
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
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="4"
          >
            4
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="5"
          >
            5
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="6"
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
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="1"
          >
            1
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="2"
          >
            2
          </button>
          <button
            onClick={(e) => handleKey(e.target.value)}
            className="col-1 py-2 border border-dark bg-secondary text-white"
            value="3"
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
            onClick={(e) => handleKey(e.target.value)}
            value="0"
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

export default CalculatorGrid;
