let wantToCalculate = confirm("Should I calculate the square root?");
let output = "";

if (wantToCalculate) {
    let number = Number(prompt("Enter a number:"));
    if (number < 0) {
        output = "The square root of a negative number is not defined.";
    } else {
        let sqrtValue = Math.sqrt(number);
        output = "The square root is " + sqrtValue + ".";
    }
} else {
    output = "The square root is not calculated.";
}

document.getElementById("result").innerHTML = output;