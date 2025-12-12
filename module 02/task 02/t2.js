let count = Number(prompt("Enter number of participants:"));
let participants = [];

for (let i = 0; i < count; i++) {
    let name = prompt("Enter name of participant " + (i + 1) + ":");
    participants.push(name);
}

participants.sort();

let list = document.getElementById("list");

for (let i = 0; i < participants.length; i++) {
    let item = document.createElement("li");
    item.textContent = participants[i];
    list.appendChild(item);
}