let numbers = [];
let input;
let duplicateFound = false;

while (!duplicateFound) {
    input = Number(prompt("Enter a number:"));
    if (numbers.includes(input)) {
        alert("The number has already been given. Stopping the program.");
        duplicateFound = true;
    } else {
        numbers.push(input);
    }
}

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}