const container = document.querySelector('.container');

createGrid(128);

function createGrid(gridCount) {

    for (let i = 0; i < gridCount; i++) {

        rows = document.createElement('div');
    
        rows.classList.add(`rows`);
        container.appendChild(rows);
        //container.style.backgroundColor = 'purple';
        
        for (let j = 0; j < gridCount; j++) {

            let columns = [];
            columns[j] = document.createElement('div');
            columns[j].classList.add(`columns`);
            rows.appendChild(columns[j]);
            columns[j].textContent = j + 1;
            columns[j] = document.querySelector('.columns');
            
        }       
    }
    
    document.querySelectorAll('.columns').forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.background = 'red';
        });
    });
}

