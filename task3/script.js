const operators = document.querySelectorAll(".cal-operator div p");
const digits = document.querySelectorAll(".cal-digit-val p");
const operatorsDiv = document.querySelectorAll(".cal-operator div");
const digitsDiv = document.querySelectorAll(".cal-digit-val");

const ans = null;

// adding on press event shadow null event to each btn
operatorsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

digitsDiv?.forEach((operator, index) => {
  operator.onclick = (event) => {
    operator.style.boxShadow = "none";
    setTimeout(() => {
      operator.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }, 100);
  };
});

operators?.forEach((operator, index) => {
  operator.onclick = (event) => {
    console.log(operator);
  };
});

digits?.forEach((digit, index) => {
  digit.onclick = (event) => {
    console.log(digit);
  };
});