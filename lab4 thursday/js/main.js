console.log("this is console");
//const myHeading = document.querySelector("h1");
document.querySelector("h1").textContent = "Hello world!";
document.querySelector("p").textContent = "Hello world!";
//alert("This is an alert");
//prompt("enter your age");

/* comment */

let abc;
abc = "chocolate";
if (abc != "chocolate") {
  alert("abc do not have the value chocolate");
} else {
  console.log("its true");
}

let number = 10;
let myarray = ["a", 4, "b"];
document.write(myarray[0]);
document.write("<br>");
let num1 = 5;
let num2 = 7;
let num3 = num1 * num2;
document.write("the result of multiplication " + num3);
document.write("<br>");
document.write(num1 + num2);
document.write("<br>");
document.write(myfunction(30, 20));
document.write("<br>");
let output = myfunction(50, 10);
console.log(output);

function myfunction(num1, num2) {
  let num3 = num1 / num2;
  return num3;
}
document.querySelector("button").addEventListener("click", function () {
  alert("You clicked me");
});

const myName = prompt("Please enter your age.");
localStorage.setItem("myname", myName);

document.querySelector("p").textContent = myName;
document.write(
  "This data is stored on session " + localStorage.getItem("myname")
);
document.getElementById("newh1").innerHTML = "this is new html h1 tag";

document.querySelector("img").addEventListener("click", function () {
  document.querySelector("img").setAttribute("src", "image/download.svg");
  document.querySelector("h1").textContent = "This displayed the second image";
  document.getElementById("newh1").style.display = "none";
});
