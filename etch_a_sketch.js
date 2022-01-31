const canvas = document.querySelector(".canvas");
let isLeftMouseButtonPressed = false;
let isRightMouseButtonPressed = false;

function mouseEvents(){
    window.addEventListener('contextmenu', (event) => {
        console.log(event.button);
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
        canvas.appendChild(clone);
    }
}

function randomColor(){
    const r = Math.floor(Math.random() * 255.99);
    const g = Math.floor(Math.random() * 255.99);
    const b = Math.floor(Math.random() * 255.99);
    return `rgb(${r},${g},${b})`;
}

function changeBackgroundColor(){
    if (isLeftMouseButtonPressed){
        this.style.backgroundColor = randomColor();
    } else if (isRightMouseButtonPressed){
        this.style.backgroundColor = "rgb(255, 255, 255)";
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

mouseEvents();
createGrid(16);