'use strict';
const names = ['John', 'Paul', 'Jones'];

let target = document.getElementById("target");
target.innerHTML = "";

for (let i = 0; i < names.length; i++) {
    target.innerHTML += `<li>${names[i]}</li>`;
}
