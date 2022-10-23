// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    numCols === 0? numCols++ : numCols;
    numRows++;
    let row = document.createElement("tr");

    for(let i = 0; i < numCols; ++i){
        let ele = document.createElement("td");
        ele.setAttribute("onclick", "colorCell(this)");
        row.append(ele)
    }
    table.appendChild(row);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    numCols++;
    if(numRows === 0){
        ++numRows;
        let row = document.createElement("tr");
        table.appendChild(row);
    }

    for(let i = 0; i < numRows; ++i){
        let ele = document.createElement("td");
        ele.setAttribute("onclick", "colorCell(this)");
        table.children[i].appendChild(ele);
    }


}

// Remove a row
function removeR() {
    numRows > 0 ? numRows-- : numCols = 0;
    document.getElementById('grid').lastElementChild.remove();

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

function colorCell(cell){
    cell.style.backgroundColor = colorSelected;
}