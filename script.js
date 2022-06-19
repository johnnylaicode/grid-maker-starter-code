// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() { 
    let row = document.createElement("tr"); // create a new row
    if (numRows == 0 && numCols == 0) {
        numCols += 1; // initial increase of column number
    }
    for (let i = 0; i < numCols; i++) {
        row.appendChild(document.createElement("td")); // add column(s)
    }
    document.getElementById('grid').appendChild(row); // add the row to the table
    numRows += 1; // update number of rows
}

// Add a column
function addC() {
    rowsAll = document.querySelectorAll("tr"); // get list of all rows
    for (let i = 0; i < numRows; i++) {
        rowsAll[i].appendChild(document.createElement("td")); // add column to each row
    }
    numCols += 1; // update number of columns
}

// Remove a row
function removeR() {
    table = document.getElementById("grid"); // select the table
    rowsAll = document.querySelectorAll("tr"); // get the list of all rows
    table.removeChild(rowsAll[rowsAll.length - 1]); // delete the last row
    numRows -= 1; // update number of rows
}

// Remove a column
function removeC() {
    rowsAll = document.querySelectorAll("tr"); // get the list of all rows
    for (let i = 0; i < numRows; i++) {
        rowsAll[i].removeChild(rowsAll[i].lastElementChild); // remove last column of each row
    }
    numCols -= 1; // update number of columns
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    if (colorSelected == "SELECT") {
        colorSelected = "White";
    }
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