const calculatorContent = document.querySelector("#calculator-content");
const mainInput = document.querySelector("#main-input");
const point = document.querySelector("#point");
const helpInput = document.querySelector("#help-input");
const resultBtn = document.querySelector("#result");
const clear = document.querySelector("#clear");
const clearLast = document.querySelector("#clear__last");
const deleteLastSymbol = document.querySelector("#delete");
let isOn = true;
const evalFunc = () => {
  mainInput.value = eval(mainInput.value)
  if (mainInput.value.indexOf('.') !== -1) {
    mainInput.value = eval(mainInput.value).toFixed(5)
      while (mainInput.value[mainInput.value.length - 1] === '0') {
        mainInput.value = mainInput.value.slice(0, -1);
      }
  }
}

const inputKey = (key) => {
  mainInput.value = mainInput.value + key;
  if (
    mainInput.value === "*" ||
    mainInput.value === "/" ||
    mainInput.value === "+"
  ) {
    mainInput.value = "";
  } else if (mainInput.value === "--") {
    mainInput.value = "";
  } else if (key === "+" || key === "/" || key === "*") {
    helpInput.value += mainInput.value;
    mainInput.value = "";
  } else if (mainInput.value === ".") {
    mainInput.value = "0.";
    point.value = "";
  } else if (mainInput.value === "00") {
    mainInput.value = "0";
  } else if (mainInput.value.includes(".")) {
    point.value = "";
  } else {
    point.value = ".";
  }
  for (let i = 1; i < mainInput.value.length; i++) {
    if (mainInput.value[i] === "-") {
      helpInput.value += mainInput.value;
      mainInput.value = "";
    }
  }
};

calculatorContent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && isOn === true) {
    inputKey(event.target.value);
  }
});

const result = () => {
  let exp = helpInput.value + mainInput.value;
  if (exp) {
    exp = exp.replace("--", "+");
    mainInput.value = eval(exp);
    evalFunc();
  }
  helpInput.value = "";
};
resultBtn.addEventListener("click", result);


clear.addEventListener("click", () => {
  mainInput.value = "";
  helpInput.value = "";
  point.value = ".";
});

clearLast.addEventListener("click", () => {
  mainInput.value = "";
});


document.addEventListener("keydown", (event) => {
  console.log(event)
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "/",
    "+",
    "-",
    ".",
  ];
  if (isOn) {
     if (values.includes(event.key) && isOn === true) {
      inputKey(event.key);
    }
    if (event.key === 'Enter') {
      result();
    }
    if (event.key === "Backspace") {
      mainInput.value = "";
      helpInput.value = "";
      point.value = ".";
    }
    if (event.key === "Escape") {
      mainInput.value = "";
    }
  }
});