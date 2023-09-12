let isMousePressed;

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
function changeColour(e, color){
    const rowElement = e.target;
    if (isMousePressed){
    rowElement.style.backgroundColor = color;
    }
    
}

createGrid(16);

function setMousePressed(){
    isMousePressed = true;
}

function setMouseNotPresesd(){
    isMousePressed = false;
}



const rowElements = document.querySelectorAll(".row");
rowElements.forEach((rowElement) => {
    rowElement.addEventListener('mousedown', setMousePressed);
    rowElement.addEventListener('mouseup', setMouseNotPresesd);
    rowElement.addEventListener('mouseover', function(e) {
        changeColour(e, "blue");
    });
    rowElement.addEventListener('mousedown', function (e) {
    setMousePressed();
    changeColour(e, "blue"); // İlk tıklamada işaretleme yapmak için
  });
  });