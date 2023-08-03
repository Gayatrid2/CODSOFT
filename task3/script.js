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

digitsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    console.log(ans);
    const child = operator.firstElementChild;
    const other = child.getAttribute("id");
    const num = Number(child.getAttribute("id"));
    if (other === "C") {
      calInput.value = "";
      ans = null;
      return;
    }
    number = num;
    if (!ans && other !== ".") {
      ans = num;
    }
    if (
      calInput?.value[calInput.value?.length - 1] !== "." &&
      calInput.value[calInput.value?.length - 1] !== "."
    ) {
      ans = ans / 10;
    }
    if (op === "+") {
      ans = ans + num;
    } else if (op === "-") {
      ans = ans - num;
    } else if (op === "*") {
      ans = ans * num;
    } else if (op === "/" && num !== 0) {
      ans = ans / num;
    }
    if (
      (other === "dot" &&
        ans &&
        calInput.value[calInput.value?.length - 1] !== ".") ||
      ans === 0
    ) {
      calInput.value = calInput.value + ".";
    } else if (other !== "dot" && (ans || ans === 0)) {
      calInput.value = calInput.value + String(num);
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
  equalDiv.style.boxShadow = "none";
  setTimeout(() => {
    equalDiv.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  }, 100);
};