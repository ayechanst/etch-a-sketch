"use strict";

const divContainer = document.getElementById('container');
const button = document.getElementById('btn');

//helper functions

function deleteGrid() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.remove()
    })                                 
}

function makeGrid(gridLength) {
    deleteGrid();
    const container = document.getElementById('container');
    let numOfSquares = gridLength * gridLength;
    for (let i = 0; i < numOfSquares; i ++) {                 
        let newDiv = document.createElement('div');
        newDiv.classList.add('tile');
        let newContent = document.createTextNode('');      
        newDiv.appendChild(newContent);
        divContainer.appendChild(newDiv);
    }
    const tiles = document.querySelectorAll('.tile');
    addListenerToTiles(tiles);   
    container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;
}
makeGrid(16);

//end helper functions


button.addEventListener('click', function() {        
    let gridLength = prompt('How many squares long should the square grid be?');
    console.log('hello?');
    if (gridLength > 100) {
        return makeGrid(100);
    }
    else {
        return makeGrid(gridLength);
    }
})

function addListenerToTiles(tiles) {
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", function(e) {
            tile.style.background = 'blue';
            console.log(e);
        })
    })
}

//``