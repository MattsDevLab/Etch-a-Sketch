const grid = document.querySelector("#grid-container");

for(let i = 1; i <=256; i++){
   let gridItem = document.createElement("div");
   grid.appendChild(gridItem);
}

let gridItem = document.querySelectorAll("div");

gridItem.forEach((item) =>{
    item.addEventListener('mouseover', () =>{
        item.classList.add("grid-item--active");
    });
})


console.log("Hellow");