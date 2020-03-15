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
    if(userKey == 2){
        for (let i=0; i<size; i++){
            myGameBox[i] = operationOnRow.slideAndSumOnRow(myGameBox[i])
        }
        //console.table(myGameBox)
        playGame(myGameBox); 
    }else if(userKey == 1){
        for (let i=0; i<size; i++){
            let reverseArrayForLeftAllign = myGameBox[i].slice().reverse();
            let tempBox = [];
            myGameBox[i] = operationOnRow.slideAndSumOnRow(reverseArrayForLeftAllign).slice().reverse();
        }
        //console.table(myGameBox)
        playGame(myGameBox);
    }else if(userKey == 3){
        let tempMatrixForRotate90clockwise = myGameBox;
        tempMatrixForRotate90clockwise = rotation.rotateClockWise90(tempMatrixForRotate90clockwise)
        for (let i=0; i<size; i++){
            tempMatrixForRotate90clockwise[i] = operationOnRow.slideAndSumOnRow(tempMatrixForRotate90clockwise[i])
        }
        tempMatrixForRotate90clockwise = rotation.rotateAntiClockWise90(tempMatrixForRotate90clockwise)
        myGameBox = tempMatrixForRotate90clockwise;
        //console.table(myGameBox)
        playGame(myGameBox);
    }else if (userKey == 4){
        let tempMatrixForRotate90AntiClockwise = myGameBox;
        tempMatrixForRotate90AntiClockwise = rotation.rotateAntiClockWise90(tempMatrixForRotate90AntiClockwise)
        for (let i=0; i<size; i++){
            tempMatrixForRotate90AntiClockwise[i] = operationOnRow.slideAndSumOnRow(tempMatrixForRotate90AntiClockwise[i])
        }
        tempMatrixForRotate90AntiClockwise = rotation.rotateClockWise90(tempMatrixForRotate90AntiClockwise)
        myGameBox = tempMatrixForRotate90AntiClockwise;
        //console.table(myGameBox)
        playGame(myGameBox);
    }
}

startGameAndInitializeBoard();