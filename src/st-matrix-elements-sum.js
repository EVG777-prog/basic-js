import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    let counter = 0;
    return matrix.reduce((a, b, x) => {
        console.log(`Добавляем ${x} строчку`);
        let lineSum = b.reduce((c, d, y) => {
            console.log(`Проверяем ${d} элемент`);
            console.log(`Аккумулятор С = ${c}`);
            if (x == 0 || matrix[x - 1][y] > 0) {
                console.log(`Добавляем ${d}`)
                return c + d;
            }
            return c;
        }, 0);
        console.log(lineSum)
        return a + lineSum;

    }, 0)

}