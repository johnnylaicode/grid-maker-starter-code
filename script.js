// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
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

function colorSingleCell(row, col) {
    //colorSelected === "SELECT" is for if the user switches from a color back to the select option
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        //Cell with the row and col data attributes
        let cell = document.querySelector(`td[row="${row}"][col="${col}"]`);
        cell.style.backgroundColor = colorSelected;
    }
}


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        for (let i=0; i<all_cells.length; i++) {
            let cell = all_cells[i];
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}


// Fill all cells
function fillAll() {
  if (selectedColor === "SELECT") {
    // Provide a gentler message to the user
    displayStatusMessage("Please choose a color first.");
    return; // Exit the function early
  }

  // Optional: Validate that selectedColor is a valid CSS color

  fillCells(selectedColor);
}

function fillCells(color) {
  for (let i = 0; i < gridCells.length; i++) { 
    gridCells[i].style.backgroundColor = color;
  }
}


// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
