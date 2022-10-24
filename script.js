// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");


// Add a row
function addR() {
    let addRow = grid.appendChild(document.createElement("tr"));
    let addCell = addRow.appendChild(document.createElement("td"));
    if (numRows === 0) {
        numCols = 0;
        addCell.onclick = myOnClick;
        numRows++;
        numCols++;
    } else {
        addCell.onclick = myOnClick;
        for (let i = 1; i < numCols; i++) {
            addRow.appendChild(document.createElement("td")).onclick = myOnClick;
        }
        numRows++;
    }
}

// Add a column
function addC() {
    if (numCols === 0) {
        grid.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).onclick = myOnClick;
        numRows++;
        numCols++;
    } else {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].appendChild(document.createElement("td")).onclick = myOnClick;
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    if (numRows === 0) {
        alert("No deletable rows");
        return 0;
    }
    grid.removeChild(grid.lastElementChild)
    numRows--;
    if (numRows === 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    if (numCols === 0) {
        alert("No deletable Columns");
        return 0;
    }
    for (i = 0; i < numRows; i++) {
        if (grid.rows[i].cells.length > 0) {
            grid.rows[i].deleteCell(-1);
        }
    }
    numCols--;
    if (numCols === 0) {
        for (i = 0; i < numRows; i++) {
            grid.removeChild(grid.lastElementChild);
        }
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor === "" || grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor === "white") {
                grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll() {
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numCols; j++) {
            grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll() {
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numCols; j++) {
            grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor = "white";
        }
    }
}

function myOnClick() {
    this.style.backgroundColor = colorSelected;
}