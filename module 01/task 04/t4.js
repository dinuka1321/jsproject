let a = parseInt(prompt("Enter the first integer:"));
let b = parseInt(prompt("Enter the second integer:"));
let c = parseInt(prompt("Enter the third integer:"));


let sum = a + b + c;
let product = a * b * c;
let average = sum / 3;


document.getElementById("result").innerHTML =
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average;