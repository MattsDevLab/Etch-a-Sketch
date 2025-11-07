const grid = document.querySelector("#grid-container");
let DEFAULT_SIDE = 16;
const gridBtn = document.querySelector("#set-grid-btn");

function buildGrid(){
    let gridSize = DEFAULT_SIDE * DEFAULT_SIDE;

    for(let i = 1; i <= gridSize ; i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        grid.appendChild(gridItem);
    }
}

buildGrid();

grid.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")){
        e.target.classList.add("grid-item--active");
    }
})


console.log("Hellow");