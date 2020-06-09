// Confirm loading of library
console.log(`teekn.js | ${Date()}`);

offsetX = 0;
offsetY = 0;

function tErr(cnt){
    throw new Error(cnt)
}

function setCanvas(canv){
    try {
        canvas = document.querySelector(canv).getContext("2d");
    } catch(e){
        tErr(`Failed to find a canvas with selector "${canv}" | (${e})`)
    }
}

function offsetCanvas(x,y){
    offsetX = x;
    offsetY = y;
}

function dot(x,y,t){
    if (!t){
        canvas.fillRect(x+offsetX,y+offsetY,1,1);
    } else {
        canvas.beginPath();
        canvas.lineWidth = t;
        canvas.rect(x+offsetX, y+offsetY, 1, 1);  
        canvas.stroke();
    }
}

prevPathX = 0+offsetX;
prevPathY = 0+offsetY;
function pathStart(x,y){
    prevPathX = x+offsetX;
    prevPathY = y+offsetY;
}

function pathTo(x1,y1, x2,y2){
    canvas.fillRect(x1,y1, x2,y2);
}

function clearCanvas(){
    // Store the current transformation matrix
canvas.save();

// Use the identity matrix while clearing the canvas
canvas.setTransform(1, 0, 0, 1, 0, 0);
canvas.clearRect(0, 0, 500, 500);

// Restore the transform
canvas.restore();
}

/*
opencanvas
    dot 
line 
fill
outline 
path 
    offset 
circle
*/