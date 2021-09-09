import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
    encrypt(text, word) {
        if (text == undefined || word == undefined) throw new Error('Incorrect arguments!');
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let x = 0;
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (abc.includes(text.toUpperCase()[i])) {
                result += abc[((abc.indexOf(text.toUpperCase()[i]) + abc.indexOf(word.toUpperCase()[x % word.length]) + 26) % 26)];
                x++;
            } else {
                result += text[i];
            }
        }
        return this.direct ? result : result.split('').reverse().join('');

    }
    decrypt(text, word) {
        if (text == undefined || word == undefined) throw new Error('Incorrect arguments!');
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let x = 0;
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (abc.includes(text.toUpperCase()[i])) {
                result += abc[((abc.indexOf(text.toUpperCase()[i]) - abc.indexOf(word.toUpperCase()[x % word.length]) + 26) % 26)];
                x++;
            } else {
                result += text[i];
            }
        }
        return this.direct ? result : result.split('').reverse().join('');
    }
}