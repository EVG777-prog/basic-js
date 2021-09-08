import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {


    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!Array.isArray(arr)) return 0;

        // console.log(`Текущий массив:`);
        // console.log(arr);
        let result = 0;
        result++;
        // console.log(`Результат = ${result}`);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // console.log(`Arr[i] - это массив!`);
                // console.log(arr[i]);
                // console.log(`Выравниваем!`);
                arr = arr.flat();
                result += this.calculateDepth(arr);
                break;
            }
        }

        return result;
    }
}