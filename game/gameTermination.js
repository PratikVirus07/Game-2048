const configuration = require("./gameConfiguration");
const size = configuration.boardSize;
const highScore = configuration.highScore;

// check if any tiles are left or any adjacent tiles are same for the game to continue;
exports.isGameOver = myGameBox => {
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            if (myGameBox[i][j] == 0){
                return false;
            }
            if(i!=3 && myGameBox[i][j] === myGameBox[i+1][j]){
                return false;
            }
            if(j!=3 && myGameBox[i][j] === myGameBox[i][j+1]){
                return false;
            }
        }
    }
    return true;
}

// check if high score is achieved
exports.isGameWon = myGameBox => {
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
           if(myGameBox[i][j] == highScore.highScore){
               return true;
           }
        }
    }
    return false;
}