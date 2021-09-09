import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    const array = [];
    matrix.forEach(element => {
        array.push(new Array(element.length).fill(null))
    });

    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            array[x][y] = sumMines(x, y);
        }
    }

    return array;

    function sumMines(x, y) {
        let counter = 0;

        if (matrix[x - 1] && matrix[x - 1][y - 1]) counter++;
        if (matrix[x - 1] && matrix[x - 1][y]) counter++;
        if (matrix[x - 1] && matrix[x - 1][y + 1]) counter++;
        if (matrix[x][y - 1]) counter++;
        if (matrix[x][y + 1]) counter++;
        if (matrix[x + 1] && matrix[x + 1][y - 1]) counter++;
        if (matrix[x + 1] && matrix[x + 1][y]) counter++;
        if (matrix[x + 1] && matrix[x + 1][y + 1]) counter++;

        return counter;
    }
}