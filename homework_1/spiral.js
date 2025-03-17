const assert = require('assert');


function spiral(matrix) {
    const rows = matrix.length;
    const cols = rows ? matrix[0].length: 0;
    let flatten = []

    const round = Math.ceil(Math.min(rows, cols) / 2);

    for (let r = 0; r < round; r++) {
        // top row
        for (let col = r; col < cols - r; col++) {
            flatten.push(matrix[r][col]);
        }

        // right column
        for (let row = r + 1; row < rows - r; row++) {
            flatten.push(matrix[row][cols - r - 1]);
        }

        // bottom row
        for (let col = cols - r - 2; col >= r; col--) {
            flatten.push(matrix[rows - r - 1][col]);
        }

        // left column
        for (let row = rows - r - 2; row > r; row--) {
            flatten.push(matrix[row][r]);
        }
    }

    return flatten;
}


assert.deepStrictEqual(spiral([[4, 5], [6, 7]]), [4,5,7,6]);
assert.deepStrictEqual(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 
[1,2,3,6,9,8,7,4,5]);
assert.deepStrictEqual(spiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
    ]), [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]);
