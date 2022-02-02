const canvas = document.querySelector(".canvas");
const buttonBW = document.getElementById("black-white");
const buttonRainbow = document.getElementById("rainbow");

const BLACK_WHITE = 1;
const RAINBOW = 2;

buttonBW.addEventListener('click', changeDrawingStyle);
buttonRainbow.addEventListener('click', changeDrawingStyle);

let drawingStyle = BLACK_WHITE;
buttonBW.classList.add("red-button");
let activeButton = buttonBW;

let isLeftMouseButtonPressed = false;
let isRightMouseButtonPressed = false;

function mouseEvents(){
    window.addEventListener('contextmenu', (event) => {
        event.preventDefault(); 
    })
    
    window.addEventListener('mousedown', (eventDown) => {
        eventDown.preventDefault();
        if (eventDown.button == 0){
            isLeftMouseButtonPressed = true;
        }
        if (eventDown.button == 2){
            isRightMouseButtonPressed = true;
        }
    })
    
    window.addEventListener('mouseup', (eventUp) => {
        if (eventUp.button == 0){
            isLeftMouseButtonPressed = false;
        }
        if (eventUp.button == 2){
            isRightMouseButtonPressed = false;
        }
    })
}

function changeBackgroundColor(){
    if (isLeftMouseButtonPressed){
        this.style.backgroundColor = currentColorStyle();
    } else if (isRightMouseButtonPressed){
        this.style.backgroundColor = "rgb(255, 255, 255)";
    }   
}

function changeBackgroundColorClick(mouseEvent){
    if (mouseEvent.button == 0){
        this.style.backgroundColor = currentColorStyle();
    } else if (mouseEvent.button == 2){    
        this.style.backgroundColor = "rgb(255, 255, 255)";
    }  
}

function createGrid(numOfCols){
    const numOfElements = numOfCols * numOfCols;
    const pixelSizePercent = 100/numOfCols;
    
    let pixel = document.createElement("div");
    pixel.style.width = `${pixelSizePercent}%`;
    pixel.style.height = `${pixelSizePercent}%`;
    pixel.classList = "pixel";
    pixel.setAttribute('draggable', false);

    for(let i = 0; i < numOfElements; i++){
        const clone = pixel.cloneNode(true);
        clone.addEventListener("mouseover",changeBackgroundColor);
        clone.addEventListener("mousedown",changeBackgroundColorClick);
        canvas.appendChild(clone);
    }
}

function refreshCanvas(){
    console.log("refresh");
    canvas.innerHTML = "";
    let fieldSize = parseInt(prompt("Enter the size of field (10-100)"));
    fieldSize = Math.min(fieldSize, 100);
    fieldSize = Math.max(fieldSize, 10);
    createGrid(fieldSize);
}

function changeDrawingStyle(){
    activeButton.classList.remove("red-button");
    drawingStyle = parseInt(this.value);
    this.classList.add("red-button");
    activeButton = this;
}

function currentColorStyle(){
    switch (drawingStyle){
        case BLACK_WHITE:
            return "rgb(0,0,0)";
            break;
        case RAINBOW:
            return randomColor();
            break;
        default:
            return "rgb(255,255,255)";
    }
}

function randomColor(){
    const r = Math.floor(Math.random() * 255.99);
    const g = Math.floor(Math.random() * 255.99);
    const b = Math.floor(Math.random() * 255.99);
    return `rgb(${r},${g},${b})`;
}

mouseEvents();
createGrid(16);