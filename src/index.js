
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];

    if (arguments.length == 0) {
        return arr;
    }
    
    for (let n = 0; n < matrix.length; n++) {
        if (n % 2 !== 0) {
            matrix[n] = matrix[n].sort((a, b) => b - a);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        arr = arr.concat(matrix[i]);
    }

    return arr;
}
