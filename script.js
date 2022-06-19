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
        let child = document.createElement("td");
        child.setAttribute("onclick", "changeColor(this)"); 
        child.setAttribute("style", "background-color:White;"); 
        row.appendChild(child); 
    }
    document.getElementById('grid').appendChild(row); // add the row to the table
    numRows += 1; // update number of rows
}

// Add a column
function addC() {
    rowsAll = document.querySelectorAll("tr"); // get list of all rows
    for (let i = 0; i < numRows; i++) {
        let child = document.createElement("td");
        child.setAttribute("onclick", "changeColor(this)");
        child.setAttribute("style", "background-color:White;"); 
        rowsAll[i].appendChild(child); // add column to each row
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
}

// Fill all uncolored cells
function fillU(){
    cellsAll = document.querySelectorAll("td");
    for (let i = 0; i < cellsAll.length; i++) {
        if (cellsAll[i].style.backgroundColor == "white") {
            cellsAll[i].style.backgroundColor = colorSelected;   
        } 
    }
}

// Fill all cells
function fillAll(){
    cellsAll = document.querySelectorAll("td");
    for (let i = 0; i < cellsAll.length; i++) {
        cellsAll[i].style.backgroundColor = colorSelected;   
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

// Changes the color of the cell when it is clicked
function changeColor(cell) {
    cell.style.backgroundColor = colorSelected;
}