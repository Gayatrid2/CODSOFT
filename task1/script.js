const hambergBtn = document.querySelector(".hamberg-btn");
const seeMore = document.querySelector("#seeMore");
window.scroll({ behavior: "smooth" });
console.log(hambergBtn);
console.log(seeMore);

hambergBtn.addEventListener("click", () => {
  if (seeMore.style.display === "none") {
    seeMore.style.display = "block";
  } else {
    seeMore.style.display = "none";
  }
});