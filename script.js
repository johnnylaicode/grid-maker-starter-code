// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    numCols = numCols === 0? 1 : numCols;
    numRows++;
    //create row
    let row = document.createElement("tr");

    //add appropriate num of cols
    for(let i = 0; i < numCols; ++i){
        let ele = document.createElement("td");
        ele.setAttribute("onclick", "colorCell(this)");
        ele.style.backgroundColor = "white";
        row.append(ele)
    }
    //add to table
    table.appendChild(row);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    numCols++;
    //if table is empty, create a row
    if(numRows === 0){
        ++numRows;
        let row = document.createElement("tr");
        table.appendChild(row);
    }

    //loop through all rows and add a new cell at the end
    for(let i = 0; i < numRows; ++i){
        let ele = document.createElement("td");
        ele.setAttribute("onclick", "colorCell(this)");
        ele.style.backgroundColor = "white";
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
    let rows = document.getElementById("grid").children;
    // rows[0].lastElementChild.remove();
    // console.log(rows[0]);

    // for(row in rows){
    //     console.log(row);
    //     row.lastElementChild.remove();
    // }
    //remove cell at the end of each row
    for(let i = 0; i < rows.length;++i){
        rows[i].lastElementChild.remove();
    }

    //remove extraneous rows if empty
    if(numCols == 1){
        let grid = document.getElementById("grid");
        for(let i = 0; i < numRows; i++){
            grid.lastElementChild.remove();
        }
    }
    else{
        numCols--;
    }

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let rows = document.getElementById("grid").children;
    //loop through all cells and fill if color is currently white
    for(let i = 0; i < rows.length; ++i){
        let elems = rows[i].children;
        for(let j = 0; j < elems.length; ++j){
            if(elems[j].style.backgroundColor == "white"){
                colorCell(elems[j]);
            }
            else{
                console.log(elems[j].style.backgroundColor);
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let rows = document.getElementById("grid").children;

    for(let i = 0; i < rows.length; ++i){
        let elems = rows[i].children;
        for(let j = 0; j < elems.length; ++j){
            colorCell(elems[j]);
        }
    }
}

// Clear all cells
function clearAll(){
    let rows = document.getElementById("grid").children;

    for(let i = 0; i < rows.length; ++i){
        let elems = rows[i].children;
        for(let j = 0; j < elems.length; ++j){
            elems[j].style.backgroundColor = "white";
        }
    }
}

function colorCell(cell){
    // console.log("hello");
    cell.style.backgroundColor = colorSelected;
}