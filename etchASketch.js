"use strict";

const divContainer = document.getElementById('wrapper');
const button = document.getElementById('btn');

//helper functions

// function deleteGrid() {
//     tiles.forEach((tile) => {
//         tile.remove();
//     })                                 
// }

function makeGrid(gridLength) {
    // let newDiv = document.createElement('div');
    // newDiv.classList.add('tile');
    // for (let i = 0; i < gridLength; i++) {
    // }
    

    let gridSize = gridLength ** 2;
    for (let i = 0; i < gridSize; i ++) {                 //convert to square
        let newDiv = document.createElement('div');
        newDiv.classList.add('tile');
        let newContent = document.createTextNode('');
        newDiv.appendChild(newContent);
        divContainer.appendChild(newDiv);
        console.log()
    }
}
const tiles = document.querySelectorAll('.tile');           //figure out why the node list is empty, this will help solve
                                                        //filling the grid in and also resetting the grid

//end helper functions

console.log(tiles);
makeGrid(16);



button.addEventListener('click', function askGrid() {        //function that asks grid size and deletes old
    //deleteGrid();
    let gridLength = prompt('How many squares long should the square grid be?');
    if (gridLength > 100) {
        gridLength = 100;
        return makeGrid(gridLength);
    }
    else {
        return makeGrid(gridLength);
    }
})


tiles.forEach((tile) => {
    tile.addEventListener("mouseover", function(e) {
        tile.style.background = 'red';
        console.log(e);
    })
})


//make grid area stay the same size
//make grid retain color
//makes grid delete itself when making a new grid