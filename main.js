document.addEventListener("DOMContentLoaded", function(){
    let grid = document.querySelector(".grid");

    grid.style.gridTemplateColumns = "repeat (16, 1fr)";
    grid.style.gridTemplateRows = "repeat (16, 1fr)";
    console.log("Hi");
});