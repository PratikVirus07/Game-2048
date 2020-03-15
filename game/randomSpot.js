const configuration = require("./gameConfiguration");
const size = configuration.boardSize;

// generate 2 random spots on the grid from available options (all 0s) and put two numbers only (2 or 4) on the spots  
exports.randomNumber = gameBox => {
  for (let spot = 0; spot < 2; spot++) {
    let availableSpots = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (gameBox[i][j] === 0) {
          availableSpots.push({
            x: i,
            y: j
          });
        }
      }
    }
    if (availableSpots.length > 0) {
      let randomSpot = availableSpots[Math.floor(Math.random() * availableSpots.length)];
      let randomNumber = Math.floor((Math.random() * 10) + 1);
      if (randomNumber%2 == 0){
        gameBox[randomSpot.x][randomSpot.y] = 2;
      }else{
        gameBox[randomSpot.x][randomSpot.y] = 4; 
      }
    }
  }
  return gameBox;
};