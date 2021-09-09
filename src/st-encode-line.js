import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    let num = 0;
    let char = '';
    let result = '';
    for (let i of str) {
        // console.log(`Смортим букву ${i}`)
        if (i !== char && num) {
            result += (num == 1 ? '' : String(num)) + char;
            char = i;
            num = 1;
        } else {
            char = i;
            num++;
        }
    }
    num = num == 0 ? 1 : num;
    result += (num == 1 ? '' : String(num)) + char;
    return result;

}