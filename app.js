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
  clear() {}
  appendNumber() {}
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {}
}
