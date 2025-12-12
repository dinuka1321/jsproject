function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter the number of sides on the dice:"));
let maxRoll = sides;
let roll;
let list = document.getElementById("diceList");

do {
    roll = rollDice(sides);
    let item = document.createElement("li");
    item.textContent = "Rolled: " + roll;
    list.appendChild(item);
} while (roll !== maxRoll);