const container = document.querySelector('.container');

let rows = [];

changeGridSizeButton = document.querySelector('button');

changeGridSizeButton.addEventListener('click', () => {

    if(isGridCreated) deleteGrid();

    gridSize = prompt('Enter grid size');

    if(gridSize < 150) {
        createGrid(gridSize);   
    }
    else {
        alert('Enter value between 1 and 150'); 
    }
});

let isGridCreated = false;

function createGrid(gridCount) {

    for (let i = 0; i < gridCount; i++) {


        rows[i] = document.createElement('div');
    
        rows[i].classList.add(`rows`);
        container.appendChild(rows[i]);
        
        for (let j = 0; j < gridCount; j++) {

            let columns = [];
            columns[j] = document.createElement('div');
            columns[j].classList.add(`columns`);
            rows[i].appendChild(columns[j]);

        }       
    }
    
    document.querySelectorAll('.columns').forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.background = 'red';
        });
    });
    isGridCreated = true;
}

function deleteGrid() {

    for (let i = 0; i < gridSize; i++) {
    
        rows[i].parentNode.removeChild(rows[i]);
    }       
} 

