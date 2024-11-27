let currentVariable = 'x';
let selectedValues = {x: null, y: null, z: null}; // dictionary to hold values for variables

let status = document.getElementById('status');
let showX = document.getElementById('showX');
let showY = document.getElementById('showY');
let showZ = document.getElementById('showZ');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');


status.innerText = 'Select a variable for x, y, then z.';

function selectImage(img) {
    // check if variable is selected
    if (selectedValues[currentVariable] === null) {
        // assign image's number to current variable
        selectedValues[currentVariable] = img.alt;
        // show selected value for variable
        status.innerText = `You selected ${img.alt} for ${currentVariable}`;

        // highlight the clicked image
        clickedImage(img);

        // move to next variable
        if (currentVariable === 'x') {
            currentVariable = 'y';
            showX.innerText = 'X: ' + selectedValues.x;
        } else if (currentVariable === 'y') {
            currentVariable = 'z';
            showY.innerText = 'Y: ' + selectedValues.y;
        } else {
            currentVariable = null; // end process
            showZ.innerText = 'Z: ' + selectedValues.z;
            // alert('Selection complete');
            console.log('Selected Values: ' + selectedValues);
        }
    }
}

// add only clicked image to 'selected' for clicked affect
function clickedImage(imgElement) {
    let images = document.querySelectorAll('#imgTable td img');
    images.forEach(function(image) {
        image.classList.remove('selected');
    });

    imgElement.classList.add('selected');
}

function clearSelection() {
    selectedValues = {x: null, y: null, z: null};

    // reset UI
    showX.innerText = 'X: ';
    showY.innerText = 'Y: ';
    showZ.innerText = 'Z: ';

    status.innerText = 'Select a variable for x, y, then z.';

    result1.innerText = '';
    result2.innerText = '';
    result3.innerText = '';

    currentVariable = 'x';
    
    clickedImage(null); // remove clicked effect
}

// the puzzles equations are predetermined, only the variables are unique for each player, so when we recieve the players variables we can use the preset equations every time
function solveEq1(x) {
    console.log('Solving Equation 1 with variable x = ' + x);
    return (2 * x) + 11;
}

function solveEq2(y, z) {
    console.log('Solving Equation 2 with variable y = ' + y + ', variable z = ' + z);
    return ((2 * z) + y) - 5;
}

function solveEq3(x, y, z) {
    console.log('Solving Equation 3 with variable x = ' + x + ', variable y = ' + y + ', variable z = ' + z);
    return Math.abs((y + z) - x);
}

function submitSelection() {
    xVal = parseInt(selectedValues.x);
    yVal = parseInt(selectedValues.y);
    zVal = parseInt(selectedValues.z);
    
    console.log('xVal: ' + xVal + ' yVal: ' + yVal + ' zVal: ' + zVal);

    result1.innerText = solveEq1(xVal);
    result2.innerText = solveEq2(yVal, zVal);
    result3.innerText = solveEq3(xVal, yVal, zVal);
    
    clickedImage(null);
}