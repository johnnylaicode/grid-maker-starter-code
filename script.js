// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {
    let addRow = grid.appendChild(document.createElement("tr"));
    let addCell = addRow.appendChild(document.createElement("td"));
    if (numRows === 0){
        numCols = 0;
        addCell.onclick = myOnClick;
        numRows++;
        numCols++;
    }
    else{
        addCell.onclick = myOnClick;
        for (let i = 1; i < numCols; i++) {
            addRow.appendChild(document.createElement("td")).onclick = myOnClick;
        }
        numRows++;
    }
}

// Add a column
function addC() {
    
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function myOnClick(){
    this.style.backgroundColor = colorSelected;
}
