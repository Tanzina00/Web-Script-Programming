console.log("I am working");
document.write("Anything");
let abc;
abc = "chocolate";
ab = 10;
console.log(abc);
document.write("<br>");
document.write(abc);
let myarray = ["abc", 10, "dfc"];
document.write("The second index is: " + myarray[1]);
document.querySelector("h1").textContent = "This is the heading";

sum = 10 + 20;
if (
  localStorage.getItem("userselection") != null ||
  localStorage.getItem("userselection") != " "
) {
  document.write(
    "Last session user selected this: " + localStorage.getItem("userselection")
  );
}

let userselection = prompt("What do want? Rock Paper or scissor?");
console.log("User selected " + userselection);
let computerselection = Math.random();
console.log("Computer selected " + computerselection);
if (computerselection >= 0 && computerselection <= 0.34) {
  console.log("Paper");
} else if (computerselection >= 0.35 && computerselection <= 0.67) {
  console.log("Scissor");
} else {
  console.log("Rock");
}
//alert("This is an alert");
document.getElementById("changeimg").addEventListener("click", function () {
  document
    .getElementById("changeimg")
    .setAttribute("src", "image/download.svg");
  document.getElementById("secondheading").innerHTML =
    "This is the second heading";
});

document.getElementById("toggleimg").addEventListener("click", function () {
  document.getElementById("changeimg").style.display = "none";
  document.getElementById("secondheading").innerHTML =
    "This heading will have blue color";
  document.getElementById("secondheading").style.background = "blue";
});

function calculator(num1, num2) {
  let result = num1 / num2;
  return result;
}
let store = calculator(60, 70);
document.write("<br> the output of store variable: " + store);
document.write("<br> the output: " + calculator(40, 10));
localStorage.setItem("userselection", userselection);
