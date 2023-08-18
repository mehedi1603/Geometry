function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseString = baseField.value;
    const base = parseFloat(baseString);
    
    const heightField = document.getElementById('triangle-height');
    const heightString = heightField.value;
    const height = parseFloat(heightString);
    
    const area = 0.5 * base * height;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthString = widthField.value;
    const width = parseFloat(widthString);
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthString = lengthField.value;
    const length = parseFloat(lengthString);
    
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

function calculateParallelogramArea(){
    const parallelogramBase = getInputValue('parallelogram-base');
    
    const parallelogramHeight = getInputValue('parallelogram-height');
    

    const area = parallelogramBase * parallelogramHeight;
    
    setElementValue('parallelogram-area', area);
}
// function calculateTriangleArea(){
//     const triangleBase = getInputValue('triangle-base');
//     console.log(triangleBase);
//     const triangleHeight = getInputValue('triangle-height');
//     console.log(triangleHeight);
// }

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    return input;
}
function setElementValue(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


function calculateEllipseArea(){
    const ellipseRadius1 = getInputValue('ellipse-radius1');

    const ellipseRadius2 = getInputValue('ellipse-radius2');

    const area = 3.14 * ellipseRadius1 * ellipseRadius2;
    setElementValue('ellipse-area', area);

}