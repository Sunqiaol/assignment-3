// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById('grid');

    const newRow = document.createElement('tr');
    const newCells = []

    if(numCols == 0){
        numCols +=1
    }

    for(let i = 0;i<numCols;i++){
        const newCell = document.createElement("td");
        newCells.push(newCell);
        newRow.appendChild(newCells[i]);
    }
    numRows +=1
    grid.appendChild(newRow);
}

// Add a column
function addC() {
    const grid = document.getElementById('grid');
    if(numRows ==0){
        const newRow = document.createElement('tr');
        numRows+=1
        const newCell = document.createElement("td");
        newRow.appendChild(newCell);
        grid.appendChild(newRow)
    }
    else{
        for(let i = 0;i < numRows;i++){
            grid.rows[i].insertCell(-1);  
        }
    }
    numCols+=1
}

// Remove a row
function removeR() {
 
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