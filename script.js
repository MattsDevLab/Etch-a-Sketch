let grid = document.querySelector("#grid-container");
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;
const gridBtn = document.querySelector("#set-grid-btn");

function buildGrid(size){
    let gridSize = size * size;

    for(let i = 1; i <= gridSize ; i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        grid.appendChild(gridItem);
    }
}

buildGrid(DEFAULT_SIZE);

function userGrid(){
    let USER_SIZE = Number(prompt("How big would you like your grid to be?"));
   
    if(Number.isInteger(USER_SIZE) && USER_SIZE < MAX_SIZE ){
        grid.innerHTML = "";
        grid.style.setProperty("--side", USER_SIZE);
        buildGrid( USER_SIZE );
    }

    return  USER_SIZE;
}

function randomColorGenerator(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

grid.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")){
        e.target.classList.add("grid-item--active");
    }

    e.target.style.backgroundColor = randomColorGenerator();
})

gridBtn.addEventListener('click', userGrid);

console.log("Never Give up");