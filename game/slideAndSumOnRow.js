const configuration = require("./gameConfiguration");
const size = configuration.boardSize;

exports.slideAndSumOnRow = (arrayRow) => {
    arrayRow = slide(arrayRow);
    arrayRow= sum(arrayRow);
    arrayRow= slide(arrayRow);
    return arrayRow;
}

// take a row and slides all the elements towards left
const slide = (rowArray) => {
    let arrayOfNonZeroes = rowArray.filter(value => value);
    let numberOfZeroes = size - arrayOfNonZeroes.length;
    let arrayOfZeroes = new Array(numberOfZeroes).fill(0);
    let newArray = arrayOfZeroes.concat(arrayOfNonZeroes);
    return newArray;
}

// take a row and sum all the elements towards left
const sum = (rowArray) => {
    for (let i=size; i>=1; i--){
        let element1 = rowArray[i];
        let element2 = rowArray[i-1];
        if(element1 == element2){
            rowArray[i] = element1 + element2;
            rowArray[i-1] = 0;
        } 
    }
    return rowArray;
}
