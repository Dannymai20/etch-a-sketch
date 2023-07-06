let container = document.querySelector('.container');
let newGrid = document.querySelector('.newGrid');

for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square);
}

container.addEventListener('mouseover', (e) => {
    if(e.target !== container){
        e.target.classList.add('color-active');
    }
})

newGrid.addEventListener('click', () => {
    // let gridSize = prompt('What grid size would you like?');
    //     if(gridSize >= 100){
    //         alert('please choose a smaller grid size');
    //         return;
    //     }

    let element = document.getElementById('square');
    element.remove();


})


