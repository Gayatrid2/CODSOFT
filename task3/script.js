const operators = document.querySelectorAll(".cal-operator div p");
const digits = document.querySelectorAll(".cal-digit-val p");
const operatorsDiv = document.querySelectorAll(".cal-operator div");
const digitsDiv = document.querySelectorAll(".cal-digit-val");
const calInput = document.querySelector("#cal-input");

const equalDiv = document.querySelector(".cal-equal");
const equal = document.querySelector(".cal-equal-val");

let ans = null;
let number = null;
let realNum = null;
let op = null;
let isEqualPress = false;
console.log("first");

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
    number = null;

    let child = operator.firstElementChild;
    child = child.getAttribute("id");
    console.log(child);
    isEqualPress = false;
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

const findNumberOfDotsInNumber = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      count++;
    }
  }
  return count;
};
digitsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    let child = operator.firstElementChild;
    let other = child.getAttribute("id");

    if (other === "C") {
      location.reload();
      return;
    }
    if (findNumberOfDotsInNumber(String(number)) <= 1) {
      if (number === null && other !== "dot") {
        number = String(other);
        calInput.value = calInput.value + String(other);
      } else {
        if (other !== "dot" && !dotPress) {
          // dotPress = false;
          number = String(number) + String(other);
          calInput.value = calInput.value + String(other);
        } else if (other !== "dot" && dotPress) {
          calInput.value = calInput.value + String(other);
          number = String(number) + String(other);
        } else if (other === "dot") {
          dotPress = true;
          if (findNumberOfDotsInNumber(String(number)) < 1) {
            number = String(number) + String(".");
            calInput.value = calInput.value + String(".");
          }
        }
      }
    }
    let num = Number(number);
    console.log(num);
    if (ans === null && op !== null) {
      ans = num;
    }
    if (op === "+") {
      ans = ans + num;
      console.log(ans);
    } else if (op === "-") {
      ans = ans - num;
      console.log(ans);
    } else if (op === "*") {
      ans = ans * num;
      console.log(ans);
    } else if (op === "/" && num !== 0) {
      ans = ans / num;
      console.log(ans);
    }
    op = null;

    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

equalDiv.onclick = (event) => {
  if (ans || ans === 0) {
    calInput.value = String(ans);
  } else {
    calInput.value = "error";
  }

  isEqualPress = true;
  equalDiv.style.boxShadow = "none";
  setTimeout(() => {
    equalDiv.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  }, 100);
};