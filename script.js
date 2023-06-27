let container = document.querySelector('.container');

for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    container.appendChild(square);
}

container.addEventListener('mouseover', (e) => {
    if(e.target !== container){
        e.target.classList.add('color-active');
    }
})

