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
    const grid = document.getElementById('grid')
    if(numRows == 1){
        grid.innerHTML = ''
        numCols = 0
        numRows= 0
    }
    else{
    grid.deleteRow(1)
    numRows -= 1
    }
}

// Remove a column
function removeC() {
    if(numCols == 1){
        grid.innerHTML = ''
        numCols = 0
        numRows= 0
    }else{
    const grid = document.getElementById("grid");
    for(let i = 0;i<numRows;i++){
        grid.rows[i].deleteCell(1)
    }
    numCols-=1
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
    const grid = document.getElementById('grid')
    grid.addEventListener("click",function(event){
        const cell = event.target;
        cell.style.backgroundColor = colorSelected
    })
}

// Fill all uncolored cells
function fillU(){

    colorSelected = document.getElementById("selectedColorId").value;
    const grid = document.getElementById('grid')
    for(let i = 0;i<numRows;i++){
        for(let j = 0;j<numCols;j++){
            if(grid.rows[i].cells[j].style.backgroundColor == ''){
                grid.rows[i].cells[j].style.backgroundColor = colorSelected 
            }
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}