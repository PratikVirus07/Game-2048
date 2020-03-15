const configuration = require("./gameConfiguration");
const size = configuration.boardSize;

// rotate the matrix by clockwise 90
exports.rotateClockWise90 = (tempMatrix) => {
    for (let i=0; i<size/2; i++) {
        for (let j=i; j<size-i-1; j++) {
            let tmp=tempMatrix[i][j];
            tempMatrix[i][j]=tempMatrix[size-j-1][i];
            tempMatrix[size-j-1][i]=tempMatrix[size-i-1][size-j-1];
            tempMatrix[size-i-1][size-j-1]=tempMatrix[j][size-i-1];
            tempMatrix[j][size-i-1]=tmp;
        }
    }
    return tempMatrix;
}

// rotate the matrix by anticlockwise 90
exports.rotateAntiClockWise90 = (tempMatrix) => {
    for (let i=0; i<size/2; i++) {
        for (let j=i; j<size-i-1; j++) {
            let tmp=tempMatrix[i][j];
            tempMatrix[i][j]=tempMatrix[j][size-i-1];
            tempMatrix[j][size-i-1]=tempMatrix[size-i-1][size-j-1];
            tempMatrix[size-i-1][size-j-1]=tempMatrix[size-j-1][i];
            tempMatrix[size-j-1][i]=tmp;
        }
    }
    return tempMatrix;
}
