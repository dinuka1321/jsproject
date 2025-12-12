let dogs = [];

for (let i = 0; i < 6; i++) {
    let name = prompt("Enter dog name " + (i + 1) + ":");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let list = document.getElementById("dogList");

for (let i = 0; i < dogs.length; i++) {
    let item = document.createElement("li");
    item.textContent = dogs[i];
    list.appendChild(item);
}