const container = document.querySelector('.container');

createGrid(64);


function createGrid(gridCount) {

    for (let i = 0; i < gridCount; i++) {

        rows = document.createElement('div');
    
        rows.classList.add(`rows`);
        container.appendChild(rows);
        
        for (let j = 0; j < gridCount; j++) {
    
            columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
            columns.textContent = j + 1;
            columns = document.querySelector('.columns');
            //document.columns.style.backgroundColor = 'black';
            //columns.addEventListener('mouseover', () => {document.columns.style.background = 'red';});
        }
        
    }
}

