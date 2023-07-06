let container = document.querySelector('.container');
let newGrid = document.querySelector('.newGrid');

let createGrid = function(squares){

    squareSize = 480 / squares; // Calculate the size of each square based on the number input

    for (let i = 0; i < squares * squares; i++){
        let square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
        square.style.width = `${squareSize}px`; // Set the width of each square
        square.style.height = `${squareSize}px`; // Set the height of each square
    }
}

createGrid(60);

container.addEventListener('mouseover', (e) => {
    if(e.target !== container){
        e.target.classList.add('color-active');
    }
})

newGrid.addEventListener('click', () => {
     let gridSize = prompt('What grid size would you like?');
         if(gridSize >= 100){
             alert('please choose a smaller grid size');
             return;
         }

    //gets elements of same class names
    let elements = container.getElementsByClassName('square');
    let squareArray = Array.from(elements);

    squareArray.forEach((square) => {
        square.remove();
    });

    createGrid(gridSize);

});


