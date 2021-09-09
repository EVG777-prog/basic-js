import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    const result = {};
    let dom = '';

    for (let i of domains) {
        // console.log(i);
        const arr = i.split('.').reverse();
        for (let x = 0; x < arr.length; x++) {
            dom += '.' + arr[x];
            result[dom] = result[dom] ? result[dom] += 1 : 1;
            // console.log(result[dom]);
        }
        dom = '';
    }
    return result;

}