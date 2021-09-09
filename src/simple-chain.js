import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {

        if (value === undefined) {
            this.chain.push(`( )`);
        } else {
            this.chain.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {

        if (this.chain[position - 1] == undefined) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {

        this.chain.reverse();
        return this;
    },
    finishChain() {

        let result = this.chain.join('~~');
        // console.log(result);
        this.chain = [];
        return result;
    }

};