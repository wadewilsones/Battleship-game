let player_board = document.querySelector(".player_board");
let lincor = document.querySelector("#lincor");
let admiral = document.querySelector("#admiral");
let officer = document.querySelector("#officer");
let private = document.querySelector("#private");

//const user = new Player("Vlada", 4, shipPlacement, 0);


function buildField(){
   
    const shipPlacement = [0,1,2,3,7,8,9,56,57,78,79,61];

    for(i = 0; i <= 89; i++){
        const cell = document.createElement('div');
        cell.setAttribute("id", i);
        cell.setAttribute("class", "cells");
        player_board.appendChild(cell);
    
    }
}


//Handle drag and drop
function drop(e){
    e.preventDefault();
    console.log("TEST")
    const data = e.dataTransfer.getData("text");
    const ship = document.getElementById(data);
    e.target.appendChild(ship);
}

function makeDraggable(e){
    console.log(e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
}

const startGame = () => {
    buildField();
}

// Append ship to the board
player_board.addEventListener('drop', drop);
player_board.addEventListener('dragover', function(e) {
    e.preventDefault(); // Allow drop
});

//Allow dragging of ships
lincor.addEventListener('dragstart',makeDraggable);
admiral.addEventListener('dragstart',makeDraggable);
officer.addEventListener('dragstart',makeDraggable);
private.addEventListener('dragstart',makeDraggable);
document.addEventListener('DOMContentLoaded', startGame);






