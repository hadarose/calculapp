import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [value, setValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isPendingOperand, setIsPendingOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);

  const clearContent = () => {
    setDisplayValue("0");
    setValue(null);
    setOperator(null);
    setIsPendingOperand(false);
  };

  const handleKey = (key) => {
    setLastOperand(Number(key));

    if (isPendingOperand) {
      setDisplayValue(key);
      setIsPendingOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? key : displayValue + key);
    }
  };

  const handleOperator = (inputOperator) => {
    const operand = Number(displayValue);

    if (!value) {
      setValue(operand);
    } else if (operator && !isPendingOperand) {
      setValue(calculate(value, operand));
      setDisplayValue(String(calculate(value, operand)));
    } else if (operator && isPendingOperand && inputOperator === "=") {
      setValue(calculate(value, value));
      setDisplayValue(String(calculate(value, value)));
    }

    setOperator(inputOperator);
    setIsPendingOperand(true);
  };

  const calculate = (previousValue, operand) => {
    let result = previousValue;
    switch (operator) {
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
        if (lastOperand) {
          result = operand + lastOperand;
        } else {
          result = operand;
        }
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
            <Display display={displayValue} />
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
