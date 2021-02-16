
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];

    for (let i = 0; i < matrix.length; i++) {
        arr = arr.concat(matrix[i]);
    }    

    return arr.sort((a, b) => a - b);
}
