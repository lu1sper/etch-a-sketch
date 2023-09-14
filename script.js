let colorCode = "black";
let colorMode = true;
let eraserMode = false;
let rainbowMode = false;
let previousColorCode = "black";
let gridValue = 10;


// simple function to create square grid
function createGrid(dimension){
    const container = document.querySelector('#container');
    let newLength = 650 / dimension;
    clearGrid();
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        const contentRow = document.createElement('div');
        contentRow.style.height = newLength + "px";
        contentRow.style.width = newLength + "px";
        contentRow.classList.add('row');
        for (let columnIndex = 0; columnIndex < dimension; columnIndex++) {
            const contentColumn = document.createElement('div');
            contentColumn.style.height = newLength + "px";
            contentColumn.style.width = newLength + "px";
            contentColumn.classList.add('column');
            contentRow.appendChild(contentColumn);
        }
        container.appendChild(contentRow);
    }
}

function clearGrid(){
    const container = document.querySelector('#container');
    const gridItems = container.querySelectorAll('.row');
    // Tüm ızgara öğelerini kaldır
    gridItems.forEach(item => {
        container.removeChild(item);
    });
}

function changeColour(e, color){
    const rowElement = e.target;
    if (colorMode || rainbowMode || eraserMode){
    rowElement.style.backgroundColor = color;
    }
}


createGrid(gridValue);

// slider
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".valueOfSlider");
slider.oninput = function(){
    sliderValue.textContent = this.value + "x" + this.value;
    gridValue = this.value;
    updateGrid();
}

// sketch section
function updateGrid(){
    clearGrid();
    createGrid(gridValue);
    colorMode = false;
    rainbowMode = false;
    eraserMode = false;
    colorCode = "#AC9FBB"
    addGridEventListeners();
    
}

function addGridEventListeners() {
    const rowElements = document.querySelectorAll(".row");
    rowElements.forEach((rowElement) => {
        rowElement.addEventListener('mouseover', function(e) {
            changeColour(e, colorCode);
            if(rainbowMode){
                colorCode = "#" + Math.floor(Math.random()*16777215).toString(16);
                changeColour(e, colorCode);
            };
        });
      });
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
          button.addEventListener('click', handleClick);
      });   
    const input = document.querySelector(".color-selector");
    input.oninput = () => {
    colorCode = input.value;
    previousColorCode = colorCode;
}  
}

function handleClick(e){
    const button = e.target;
    if (button.className === "color-mode"){
        enableColorMode();
    }else if(button.className === "rainbow-mode"){
        enableRainbowMode();
    }else if(button.className === "eraser"){
        enableEraserMode();
    }else if(button.className === "clear"){
        updateGrid();
    }
}

function enableColorMode(){
    colorMode = true;
    colorCode = previousColorCode;
    rainbowMode = false;
}

function enableRainbowMode(){
    rainbowMode = true;
    addGridEventListeners();
}


function enableEraserMode(){
    eraserMode = true;
    rainbowMode = false;
    colorCode = "#AC9FBB";
}

// color picker section






addGridEventListeners();