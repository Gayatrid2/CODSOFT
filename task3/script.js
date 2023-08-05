const operators = document.querySelectorAll(".cal-operator div p");
const digits = document.querySelectorAll(".cal-digit-val p");
const operatorsDiv = document.querySelectorAll(".cal-operator div");
const digitsDiv = document.querySelectorAll(".cal-digit-val");
const calInput = document.querySelector("#cal-input");

const equalDiv = document.querySelector(".cal-equal");
const equal = document.querySelector(".cal-equal-val");

let ans = null;
let number = null;
let preNumber = null;
let op = null;

const checkLastCharIsOp = (str) => {
  if (str.length === 0) {
    return true;
  }
  return (
    str[str.length - 1] === "+" ||
    str[str.length - 1] === "-" ||
    str[str.length - 1] === "*" ||
    str[str.length - 1] === "/"
  );
};

let dotPress = false;
// adding on press event
operatorsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    dotPress = false;
    let num = Number(number);
    preNumber = Number(number);
    console.log(preNumber);

    number = null;

    let child = operator.firstElementChild;
    child = child.getAttribute("id");
    if (num || num === 0) {
      if (child === "add") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "+";
          op = "+";
        }
      } else if (child === "sub") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "-";

          op = "-";
        }
      } else if (child === "mul") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "*";

          op = "*";
        }
      } else if (child === "div") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "/";

          op = "/";
        }
      }
    }
    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

digitsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    let child = operator.firstElementChild;
    let other = child.getAttribute("id");

    if (other === "AC") {
      calInput.value = "";
      return;
    }

    if (number === null) {
      number = "" + String(other);
    } else {
      number = number + String(other);
    }

    if (other !== "dot") {
      calInput.value = calInput.value + String(other);
    } else {
      calInput.value = calInput.value + String(".");
    }
    number = Number(number);
    preNumber = number;
    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

function inputValToMathematicalOperation(inputString) {
  // Replace all spaces in the input string
  inputString = inputString.replace(/\s/g, "");
  console.log(inputString);
  try {
    const result = eval(inputString);
    return result;
  } catch (error) {
    return null;
  }
}

equalDiv.onclick = (event) => {
  let str = calInput.value;
  if (str === "1+2/0000000") {
    calInput.value = String("🤝🤟🐼😌");
    return;
  }
  ans = inputValToMathematicalOperation(str);
  if (ans === null) {
    calInput.value = "error";
  } else {
    calInput.value = String(ans);
  }
  equalDiv.style.boxShadow = "none";
  setTimeout(() => {
    equalDiv.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  }, 100);
};