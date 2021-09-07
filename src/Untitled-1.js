const arr = ['Matt', 'Ann', 'Dmitry', 'Max'];


function calculateHanoi(disksNumber, turnsSpeed) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let turns = 2 ** disksNumber - 1;
    let seconds = Math.trunc((2 ** disksNumber - 1) / turnsSpeed * 60 * 60);
    return {
        'turns': turns,
        'seconds': seconds
    }

}


console.log(calculateHanoi(7, 4516));