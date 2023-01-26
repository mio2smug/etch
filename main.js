document.addEventListener("DOMContentLoaded", function(){
    createSketchpad(16);
    console.log("Hi");
});


function createSketchpad(int){

    let sketchpad = document.querySelector(".sketchpad");
    let areaOfSketchpad = (int ** 2);

    sketchpad.style.gridTemplateColumns = `repeat(${int},1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${int},1fr)`;
    
    for (let i=0; i<areaOfSketchpad; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        sketchpad.insertAdjacentElement("beforeend", div );
    }
    console.log(areaOfSketchpad);    
}   