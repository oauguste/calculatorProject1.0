const screen = document.querySelector(".display-text");
const fncBtns = document.querySelectorAll(
  ".function-button"
);
const numbBtns = document.querySelectorAll(
  ".numbers-button"
);
const onClearBtn = document.querySelector(
  ".on-clear-button"
);
const operationBtn = document.querySelectorAll(
  ".operation-button"
);
const equalBtn = document.querySelector(".equal-button");

//calculator Class
class Calculator {
  constructor(currentTextElement) {
    this.currentTextElement = currentTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = undefined;
  }

  appendNumber(number) {
    if (
      number === "." &&
      this.currentOperand.includes(".")
    ) {
      return;
    }
    this.currentOperand =
      this.currentOperand.toString() + number.toString();
    this.currentTextElement.innerText = this.currentOperand;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operator = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.currentTextElement.innerText = this.operator;
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "&#xf7":
        result = prev / curr;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operator = undefined;
    this.previousOperand = "";
    this.currentTextElement.innerText = result;
  }

  updateDisplay() {
    {
      this.currentTextElement.innerText =
        this.currentOperand;
    }
  }
}
const calculator = new Calculator(screen);

numbBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.appendNumber(btn.value);
    // calculator.updateDisplay();
  });
});

operationBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.chooseOperation(btn.value);
    // calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
});

onClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
