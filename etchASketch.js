"use strict";

const divContainer = document.getElementById('container');
const button = document.getElementById('btn');
const delGrid = document.getElementById('clear')
const blueBtn = document.querySelector('.blue');
const redBtn = document.querySelector('.red');
const whiteBtn = document.querySelector('.white');

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

let currentGridLength = 16;
button.addEventListener('click', function() {                                       //request new grid function
    let gridLength = prompt('How many squares long should the square grid be?');
    currentGridLength = gridLength;
    if (gridLength > 100) {
        return makeGrid(100);
    }
    else {
        return makeGrid(gridLength);
    }
})

delGrid.addEventListener('click', () => {                                      //clears grid
    deleteGrid();
    makeGrid(currentGridLength);
})


let paintBrushColor = 'lightBlue';                                   //color changing logic
blueBtn.addEventListener('click', () => {
    console.log('click');
    paintBrushColor = 'lightBlue';
})

redBtn.addEventListener('click', () => {
    console.log('click');
    paintBrushColor = 'paleVioletRed';
})

whiteBtn.addEventListener('click', () => {
    console.log('click');
    paintBrushColor = 'whiteSmoke';
})

function addListenerToTiles(tiles) {
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", function() {
            tile.style.background = `${paintBrushColor}`;         
        })
    })
}



//``