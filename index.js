const random = require("./game/randomSpot");
const input = require("./game/input");
const configuration = require("./game/gameConfiguration");
const termination = require("./game/gameTermination");
const rotation = require ("./game/rotation");
const operationOnRow = require("./game/slideAndSumOnRow")
const size = configuration.boardSize;

let gameBox;


// start the Game and initilize the board as 0
const startGameAndInitializeBoard = () => {
    gameBox = fillZeros([size, size]);
    playGame(gameBox);
}

// fill the board with 0s
const fillZeros = (size) => {
    var array = [];
    for (var i = 0; i < size[0]; ++i) {
        array.push(size.length == 1 ? 0 : fillZeros(size.slice(1)));
    }
    return array;
}

// loop through the game untill condition met
 const playGame = async (myGameBox) => { //changed
  let gameOverResult = termination.isGameOver(myGameBox);
  let gameWon = termination.isGameWon(myGameBox);
  if(gameOverResult == false && gameWon== false ){
    console.log("Game not over, Continue Playing");
    //console.table(myGameBox);
    gameBox = random.randomNumber(myGameBox);
    console.table(myGameBox);
    const userKey = await input.move();
    keyPressed(userKey, myGameBox)
  }else if(gameOverResult == true){
    console.log("No Tiles Remaning! Game Over!")
  }else if(gameWon == true){
    console.log("Congratulations! You Won");
  }
}

// user presses a key for movement
const keyPressed = (userKey, myGameBox) => {
    
    if(userKey == 2){  // for right direction
        for (let i=0; i<size; i++){
            myGameBox[i] = operationOnRow.slideAndSumOnRow(myGameBox[i])
        }
        //console.table(myGameBox)
        playGame(myGameBox); 
    }else if(userKey == 1){   // for left direction
        for (let i=0; i<size; i++){
            let reverseArrayForLeftAllign = myGameBox[i].slice().reverse();
            let tempBox = [];
            myGameBox[i] = operationOnRow.slideAndSumOnRow(reverseArrayForLeftAllign).slice().reverse();
        }
        //console.table(myGameBox)
        playGame(myGameBox);
    }else if(userKey == 3){  // for up direction
        let rotatedMatrix = myGameBox;
        rotatedMatrix = rotation.rotateClockWise90(rotatedMatrix)
        for (let i=0; i<size; i++){
            rotatedMatrix[i] = operationOnRow.slideAndSumOnRow(rotatedMatrix[i])
        }
        rotatedMatrix = rotation.rotateAntiClockWise90(rotatedMatrix)
        myGameBox = rotatedMatrix;
        //console.table(myGameBox)
        playGame(myGameBox);
    }else if (userKey == 4){  // for down direction
        let rotatedMatrix = myGameBox;
        rotatedMatrix = rotation.rotateAntiClockWise90(rotatedMatrix)
        for (let i=0; i<size; i++){
            rotatedMatrix[i] = operationOnRow.slideAndSumOnRow(rotatedMatrix[i])
        }
        rotatedMatrix = rotation.rotateClockWise90(rotatedMatrix)
        myGameBox = rotatedMatrix;
        //console.table(myGameBox)
        playGame(myGameBox);
    }
}

startGameAndInitializeBoard();