const gameContainer = document.querySelector('#game');
const gameField = document.querySelector('.player-field');
const shipsChoice = document.querySelector('.ships-choice');

const shipCollection = [];

//Add click event to all UI Ships

window.onload = () => {
    displayUi();
    const startGame = Gameboard();
};


// Ship function
const Ship = (name, shipLength, x, y) => {
    
    let ships = {
        shipName: name,
        shipLength: shipLength,
        xAxis:x,
        yAxis:y,
        hit(hitCoordinate){
            //marks the coordinate as hit
        },
        isSunk(){
            //calculates is ship sinked based on length and hit marks
        }
    }

    return ships

}

//Gameboard function

const Gameboard = () => {

    //Call Ship function and create ship

    const createShip = (shipName, shipLength, x, y) => {
        const newShip = Ship(shipName, shipLength, x, y); // create a ship
        shipCollection.push(newShip); // push to array
        console.log(shipCollection);
    }

   return {createShip, shipCollection }

}

//Display UI

function displayUi(){

    //Fill player table
    fillField(gameField);
}

//Build the field
const fillField = (whatToFill) => {
    //Create a cell
    for(let i = 0; i < 100; i++){
        whatToFill.appendChild(document.createElement('div'));
    }

    whatToFill.childNodes.forEach(element => {
        element.setAttribute('class', 'cells');
        if(whatToFill.getAttribute('class') == 'player-field'){
            let siblings = [];

            element.addEventListener('mouseover', function highlightShip(){
                let shipSize = 5; // replace with ship Size
                let sibling = element.nextSibling;

                while(shipSize > 1){

                    sibling.style.cssText = 'background-color:#21201f; border:2px solid black;';
                    sibling = sibling.nextSibling;
                    shipSize --;
                }

                element.style.cssText = 'border:2px solid black;';
            })

            element.addEventListener('mouseout', function cancelShip(){
                let shipSize = 5; // replace with ship Size
                let sibling = element.nextSibling;

                while(shipSize > 1){

                    sibling.style.cssText = 'background-color:tranparent;';
                    sibling = sibling.nextSibling;
                    shipSize --;
                }

            })
                
            
        }
    })


}