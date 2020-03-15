const inquirer = require("inquirer");

const askMove = [
  {
    type: "input",
    name: "move",
    message: "Input your move : ",
    validate: function(value) {
      const validMoves = ["1", "2", "3", "4"];
      if(value === "help"){
        return ("Enter number between 1 and 4"+
        "\n 1 => left"+
        "\n 2 => right"+
        "\n 3 => up"+
        "\n 4 => down")
      }else{
          if (validMoves.includes(value)) {
            return true;
          }
          return "Backspace & Please enter numbers between 1 & 4";
      }
    }
  }
];

//take User Move
exports.move = () => {
    return inquirer.prompt(askMove).then(answers => {
        return answers["move"];
    });
};