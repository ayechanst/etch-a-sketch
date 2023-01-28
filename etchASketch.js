"use strict";

document.body.onload = makeDivs;

const divContainer = document.getElementById('wrapper');
const tile = document.querySelector('.tile');


function makeDivs() {
    for (let i = 0; i < 256; i ++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('tile');
        let newContent = document.createTextNode("");
        newDiv.appendChild(newContent);
        divContainer.appendChild(newDiv);
    }
}

tile.addEventListener("mouseover", function() {
    tile.className = 'activated';
})