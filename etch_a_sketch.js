const canvas = document.querySelector(".canvas");


function addPixelElements(numOfCols){
    const numOfElements = numOfCols * numOfCols;
    // const pixelWidthHeight = Math.round(canvas.clientWidth/numOfCols) - 1;
    const pixelPercentage = 100/numOfCols;
    
    let pixelElement = document.createElement("div");
    // pixelElement.style.width = `${pixelWidthHeight}px`;
    // pixelElement.style.height = `${pixelWidthHeight}px`;
    pixelElement.style.width = `${pixelPercentage}%`;
    pixelElement.style.height = `${pixelPercentage}%`;
    pixelElement.classList = "pixel";
    // pixelElement.addEventListener("mouseover",changeBackgroundColor);

    for(let i = 0; i < numOfElements; i++){
        const clone = pixelElement.cloneNode(true);
        clone.addEventListener("mouseover",changeBackgroundColor);
        canvas.appendChild(clone);
    }
}

function randomColor(){
    const r = Math.floor(Math.random() * 255.99);
    const g = Math.floor(Math.random() * 255.99);
    const b = Math.floor(Math.random() * 255.99);
    return `rgb(${r},${g},${b})`
}

function changeBackgroundColor(){
    console.log(this.style.backgroundColor);
    this.style.backgroundColor = randomColor();
}

function refreshCanvas(){
    console.log("refresh");
    canvas.innerHTML = "";
    let fieldSize = parseInt(prompt("Enter the size of field (10-100)"));
    fieldSize = Math.min(fieldSize, 100);
    fieldSize = Math.max(fieldSize, 10);
    addPixelElements(fieldSize);
}

addPixelElements(16);
console.log(canvas.clientWidth/16);


console.log("Hello world")