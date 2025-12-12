function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let list = document.getElementById("diceList");
let roll;

do {
    roll = rollDice();
    let item = document.createElement("li");
    item.textContent = "Rolled: " + roll;
    list.appendChild(item);
} while (roll !== 6);