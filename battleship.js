const gameContainer = document.querySelector('#game');
const gameField = document.querySelector('.player-field');
const shipsChoice = document.querySelector('.ships-choice');

const shipCollection = [];

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

   //Add drag and drop function to all UI ships
    const addDrag = () => {   
        for( let i = 0; i < shipsChoice.children.length; i++){
            shipsChoice.children[i].addEventListener('dragstart', drag); // add drag event
        }
    }

    const createShip = (shipName, shipLength, x, y) => {
        const newShip = Ship(shipName, shipLength, x, y); // create a ship
        shipCollection.push(newShip); // push to array
        console.log(shipCollection);
    }

   return {addDrag, createShip, shipCollection }

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
        element.setAttribute('class', 'cells')
        if(whatToFill.getAttribute('class') == 'player-field'){
           //Assign drop zone
           element.setAttribute('ondrop', 'drop(event)');
           element.setAttribute('ondragover', 'ondragoverHandle(event)');
        }
    });
    


}


//drag and drop functionality

const drag = (event) => {

    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.dropEffect = 'move';    
}

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild(document.getElementById(data));

    // Call the shipFunction and assign data
    let futureShip = document.getElementById(data);
    const addShip = Gameboard();
    let shipLength = getLength(futureShip.innerHTML);

    //Get length and size 


    addShip.createShip(futureShip.getAttribute('id'), shipLength, futureShip.getBoundingClientRect().x,  futureShip.getBoundingClientRect().y);

}

const ondragoverHandle = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

const getLength = (shipName) => {

    let shipLength;
    let shipsNumber;

    switch(shipName){
        case 'Carrier':
            shipLength = 5;
            shipsNumber = 1;
            break;
        case 'Battleship':
            shipLength = 4;
            shipsNumber = 1;
            break;
        case 'Cruiser':
            shipLength = 3;
            shipsNumber = 2;
            break;
        case 'Submarine':
            shipLength = 2;
            shipsNumber = 3;
            break;
        case 'Destroyer':
            shipLength = 1;
            shipsNumber = 4;
            break;                            
    }

    return shipLength
}

//Add click event to all UI Ships

window.onload = () => {
    displayUi();
    const startGame = Gameboard();
    startGame.addDrag();
};

