

// simple function to create square grid
function createGrid(dimension){
    const container = document.querySelector('#container');
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        const contentRow = document.createElement('div');
        contentRow.classList.add('row');
        for (let columnIndex = 0; columnIndex < dimension; columnIndex++) {
            const contentColumn = document.createElement('div');
            contentColumn.classList.add('column');
            contentRow.appendChild(contentColumn);
        }
        container.appendChild(contentRow);
    }
}
function changeColour(e){
    console.log(e.target);
    const rowElement = e.target;
    rowElement.style.cssText = 'background: red';
}

createGrid(16);

const rowElements = document.querySelectorAll(".row");

rowElements.forEach((rowElement) => {
    rowElement.addEventListener('mouseover', changeColour);
  });