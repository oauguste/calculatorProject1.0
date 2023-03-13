const functionButton = document.querySelectorAll(
  ".function-button"
);
const numbersButton = document.querySelectorAll(
  ".numbers-button"
);
const onClearButton = document.querySelector(
  ".on-clear-button"
);
const operationsButton = document.querySelectorAll(
  ".operation-button"
);

const equalsButton =
  document.querySelector(".equal-button");
const firstDisplay =
  document.querySelector(".display-text");
const secondDisplay = document.querySelector(
  ".display-second-text"
);
class Calculator {
  constructor(firstDisplay, secondDisplay) {
    this.firstDisplay = firstDisplay;
    this.secondDisplay = secondDisplay;
    this.clear();
  }
  flushOperator(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.operations();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  operations() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "&#xf7;":
        computation = prev / current;
        break;
    }
    this.currentOperand = computation;
    this.previousOperand = "";
    this.operation = undefined;
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = null;
  }

  turnOn() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes("."))
      return;

    if (this.currentOperand.length === 16) {
      return;
    }

    this.currentOperand =
      this.currentOperand.toString() + number.toString();
  }
  updateDisplay() {
    this.firstDisplay.innerText = this.currentOperand;
    if (this.operation !== null) {
      this.secondDisplay.innerText = `${this.previousOperand} ${this.operation}`;
    }
    // this.firstDisplay.textContent = this.text
  }
}

numbersButton.forEach(function (number) {
  number.addEventListener("click", function () {
    // firstDisplay.textContent = number.value;
    calculator.appendNumber(number.value);
    //calculator.updateDiplay()
    calculator.updateDisplay();
  });
});

operationsButton.forEach(function (operation) {
  operation.addEventListener("click", function () {
    calculator.flushOperator(operation.innerText);
    calculator.updateDisplay();
  });
});

const calculator = new Calculator(
  firstDisplay,
  secondDisplay
);

onClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
