console.log("TEST");
let player_board = document.querySelector(".player_board");

for(i = 0; i <= 89; i++){
    const cell = document.createElement('div');
    cell.setAttribute("id", i);
    cell.setAttribute("class", "cells");
    player_board.appendChild(cell);

}
