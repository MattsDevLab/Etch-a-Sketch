const grid = document.querySelector("#grid-container");
let gridItem = document.querySelectorAll("#grid-container div");
let DEFAULT_SIDE = 16;
const gridBtn = document.querySelector("#set-grid-btn");

console.log(gridItem);

// const getUserGrid = () => Number(prompt("How big do you want your grid to be?"));

function buildGrid(){
    let gridSize = DEFAULT_SIDE * DEFAULT_SIDE;

    for(let i = 1; i <= gridSize ; i++){
        let gridItem = document.createElement("div");
        grid.appendChild(gridItem);
    }
}

buildGrid();

gridItem.forEach((item) =>{
    item.addEventListener('mouseover', () =>{
        item.classList.add("grid-item--active");
    });
});

// setGrid.addEventListener('click',() =>{
//     userNumber = getUserGrid();
// });



console.log("Hellow");