let color = 'black';

document.addEventListener("DOMContentLoaded", function(){
    //declare variables
    userInput = 0;
    const submitButton = document.querySelector('#submitButton'); 
    createSketchpad(16);

    submitButton.addEventListener('click', function(){
        userInput = document.querySelector('#inputField').value;
        console.log(userInput);
        userInputValidation(userInput);
    });            


});

function userInputValidation(userInput){
    if (userInput >= 2 && userInput <= 100){
        createSketchpad(userInput);
    } return 0;
}


function createSketchpad(int){

    let sketchpad = document.querySelector(".sketchpad");
    let areaOfSketchpad = (int ** 2);

    sketchpad.style.gridTemplateColumns = `repeat(${int},1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${int},1fr)`;
    
    for (let i=0; i<areaOfSketchpad; i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover', colorDiv);
        sketchpad.insertAdjacentElement("beforeend", div );
    }   
}

function setColor(colorChoice){
    color = colorChoice;
}

function colorDiv(){
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else 
    {this.style.backgroundColor = 'black'; }  
}

function clearSketchpad(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
    color = 'black';
}