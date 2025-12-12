let numbers = [];
let input;

do {
    input = Number(prompt("Enter a number (0 to stop):"));
    if (input !== 0) {
        numbers.push(input);
    }
} while (input !== 0);

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}