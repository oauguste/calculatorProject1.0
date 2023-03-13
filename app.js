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

const text = document.querySelector(".display-text");
const secondText = document.querySelector(
  ".display-second-text"
);
class Calculator {
  constructor(text, secondText) {
    this.text = text;
    this.secondText = secondText;
  }

  operations(text, secondText, operation) {
    switch (operation) {
      case "+":
        return this.text + this.secondText;
        break;
      case "-":
        return this.text - this.secondText;
        break;
      case "*":
        return this.text * this.secondText;
        break;
      case "&#xf7;":
        return this.text / this.secondText;
        break;
    }
  }
  clear() {
    this.text = " ";
    this.secondText = "";
    this.operand = undefined;
  }
  turnOn() {}
  appendNumber(number) {
    if (
      number === "." &&
      this.text.textContent.includes(".")
    )
      return;
    if (number != "") {
      this.text.textContent += number;
    }
  }
  updateDisplay() {
    this.text.textContent = "";
  }

  calculate(operand) {}
}

numbersButton.forEach(function (number) {
  number.addEventListener("click", function () {
    // text.textContent = number.value;
    calculator.appendNumber(number.value);
    //calculator.updateDiplay()
    console.log(number.value);
  });
});

operationsButton.forEach(function (operation) {
  operation.addEventListener("click", function () {
    text.textContent = operation.value;
    console.log(operation.value);
  });
});

const calculator = new Calculator(text, secondText);

// onClearButton.addEventListener("click", () => {
//   calculator.clear();
// });
