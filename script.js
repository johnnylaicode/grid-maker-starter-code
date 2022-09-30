// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById('grid'); // table reference
    var row = table.insertRow(0); // insert a row into the html
    numRows++; // add 1 to the global variable numRows
    if(numCols == 0){ // if Column is zero then add a new cell at 0 and add 1 to the global variable numCols
        var cell = row.insertCell(0);
        cell.innerHTML = " ";
        numCols++;
    }else{
        for(var i = 0; i <numCols; i++){ // for however many column in the table
            var cell = row.insertCell(i); // add as many column we have in the table
            cell.innerHTML= " ";
        }
    }
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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