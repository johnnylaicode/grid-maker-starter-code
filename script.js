// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() { 
    let row = document.createElement("tr"); // create a new row
    if (numCols == 0) {
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
    let table = document.getElementById("grid");
    // initial increase of row number if user adds column first
    if (numRows == 0) {
        numRows += 1; 
        table.appendChild(document.createElement("tr")); 
    }
    for (let i = 0; i < numRows; i++) {
        let child = document.createElement("td");
        child.setAttribute("onclick", "changeColor(this)");
        child.setAttribute("style", "background-color:White;"); 
        table.children[i].appendChild(child); // add column to each row
    }
    numCols += 1; // update number of columns
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid"); // select the table
    table.removeChild(table.lastElementChild); // delete the last row
    numRows -= 1; 
    // set the number of columns to 0 after all rows were removed
    if (numRows == 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid"); 
    for (let i = 0; i < numRows; i++) {
        // remove last column of each row
        table.children[i].removeChild(table.children[i].lastElementChild); 
    }
    numCols -= 1; 
    // clean up the table from leftover rows
    if (numCols == 0) { 
        let table = document.getElementById("grid"); 
        for (let i = 0; i < numRows; i++) {
            table.removeChild(table.lastElementChild); 
        }
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    let cellsAll = document.querySelectorAll("td");
    for (let i = 0; i < cellsAll.length; i++) {
        if (cellsAll[i].style.backgroundColor == "white") {
            cellsAll[i].style.backgroundColor = colorSelected;   
        } 
    }
}

// Fill all cells
function fillAll(){
    let cellsAll = document.querySelectorAll("td");
    for (let i = 0; i < cellsAll.length; i++) {
        cellsAll[i].style.backgroundColor = colorSelected;   
    }
}

// Clear all cells
function clearAll(){
    let cellsAll = document.querySelectorAll("td");
    for (let i = 0; i < cellsAll.length; i++) {
        cellsAll[i].style.backgroundColor = "white";   
    }
}

// Changes the color of the cell when it is clicked
function changeColor(cell) {
    cell.style.backgroundColor = colorSelected;
}