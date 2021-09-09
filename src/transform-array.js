import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    console.log(arr);

    const result = [];
    let s = false;

    for (let i = 0; i < arr.length; i++) {
        if (s) {
            s = false;
            continue;
        }
        if (arr[i + 1] && arr[i] == '--double-next') result.push(arr[i + 1]);
        else if (arr[i - 1] && arr[i] == '--double-prev' && arr[i - 2] != '--discard-next') result.push(arr[i - 1]);
        else if (arr[i + 1] && arr[i] == '--discard-next') s = true;
        else if (arr[i - 1] && arr[i] == '--discard-prev' && arr[i - 2] != '--discard-next') result.pop();
        else if (!['--double-next', '--double-prev', '--discard-next', '--discard-prev'].includes(arr[i])) result.push(arr[i]);
    }
    return result;
}