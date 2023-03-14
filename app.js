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
    } else if (
      this.currentTextElement.innerText === this.operator
    ) {
      this.currentOperand = "";
      this.currentTextElement.innerText =
        this.currentOperand;
      this.currentOperand =
        this.currentOperand.toString() + number.toString();
      this.currentTextElement.innerText =
        this.currentOperand;
    } else {
      this.currentOperand =
        this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    this.operator = operation;
    if (this.currentOperand === this.operator) return;
    this.currentOperand = this.operator;
    this.previousOperand = this.currentOperand;
    if (this.currentOperand != undefined) {
      this.compute();
    }
    // this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = prev + curr;
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
  }

  updateDisplay() {
    if (
      this.currentTextElement.innerText !== this.operator
    ) {
      this.currentTextElement.innerText =
        this.currentOperand;
    } else {
      return;
    }
  }
}
const calculator = new Calculator(screen);

numbBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.appendNumber(btn.value);
    calculator.updateDisplay();
  });
});

operationBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.chooseOperation(btn.value);
    calculator.updateDisplay();
  });
});
