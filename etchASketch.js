"use strict";

const divContainer = document.getElementById('container');
const button = document.getElementById('btn');

//helper functions

function deleteGrid() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.remove();
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
    container.style.gridTemplateColumns = repeat(`${gridLength}`, `${1}px`);
}
makeGrid(6);
const tiles = document.querySelectorAll('.tile');   

//end helper functions

console.log(tiles);



button.addEventListener('click', function askGrid() {        //function that asks grid size and deletes old
    let gridLength = prompt('How many squares long should the square grid be?');
    if (gridLength > 100) {
        return makeGrid(100);
    }
    else {
        return makeGrid(gridLength);
    }
})


tiles.forEach((tile) => {
    tile.addEventListener("mouseover", function(e) {
        tile.style.background = 'blue';
        console.log(e);
    })
})


//make grid area stay the same size
//make grid retain color
//makes grid delete itself when making a new grid





//  IIIII ``