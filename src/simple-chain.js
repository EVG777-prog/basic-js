import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],
    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.chain.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (value === undefined) {
            this.chain.push(`( )`);
        } else {
            this.chain.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this.chain[position - 1] == undefined) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.chain.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let result = this.chain.join('~~');
        // console.log(result);
        this.chain = [];
        return result;
    }
};