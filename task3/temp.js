const operators = document.querySelectorAll(".cal-operator div p");
const digits = document.querySelectorAll(".cal-digit-val p");
const operatorsDiv = document.querySelectorAll(".cal-operator div");
const digitsDiv = document.querySelectorAll(".cal-digit-val");
const calInput = document.querySelector("#cal-input");

const equalDiv = document.querySelector(".cal-equal");
const equal = document.querySelector(".cal-equal-val");

let ans = null;
let number = null;
let op = null;
let isEqualPress = false;

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

// adding on press event
operatorsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    let child = operator.firstElementChild;
    child = child.getAttribute("id");
    isEqualPress = false;
    if (number || number === 0) {
      if (child === "add") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "+";
          op = "+";
        }

        console.log(ans);
      } else if (child === "sub") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "-";
          op = "-";
        }

        console.log(ans);
      } else if (child === "mul") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "*";
          op = "*";
        }

        console.log(ans);
      } else if (child === "div") {
        if (!checkLastCharIsOp(String(calInput.value))) {
          calInput.value = String(calInput.value) + "/";
          op = "/";
        }

        console.log(ans);
      }
    }
    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

let dotPress = false;
digitsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    let child = operator.firstElementChild;
    let other = child.getAttribute("id");
    let num = Number(child.getAttribute("id"));
    let tempNum = "";
    if (other === "C") {
      isEqualPress = false;
      calInput.value = "";
      ans = null;
      location.reload();
      return;
    }
    if (!isEqualPress) {
      if (!ans) {
        ans = num;
      }
      number = num;
      if (other !== "dot") {
        dotPress = false;
        calInput.value = String(calInput.value) + String(num);
      }
      if (
        other === "dot" &&
        calInput.value?.length > 0 &&
        calInput.value !== "."
      ) {
        calInput.value = String(calInput.value) + ".";
        tempNum = num * 10;
        dotPress = true;
      }
      if (dotPress) {
        num = tempNum + num;
      }
      console.log(num);

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
    }

    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

equalDiv.onclick = (event) => {
  console.log(ans);
  op = null;
  // calInput.value = String(ans);
  isEqualPress = true;
  equalDiv.style.boxShadow = "none";
  setTimeout(() => {
    equalDiv.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  }, 100);
};