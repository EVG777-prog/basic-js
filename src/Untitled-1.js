const arr = ['Matt', 'Ann', 'Dmitry', 'Max'];

const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));
console.log('nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');

function repeater(str, options) {
    // console.log(str);
    // console.log(options);

    let result = '';
    let addStr = '';
    if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
    if (options.repeatTimes == undefined) options.repeatTimes = 1;
    // if (!options.additionRepeatTimes) {
    // console.log(+options.additionRepeatTimes);
    for (let x = 1; x <= options.additionRepeatTimes; x++) {
        addStr += `${String(options.addition)}${x == (options.additionRepeatTimes ? options.additionRepeatTimes : 0) ? '' : options.additionSeparator ? options.additionSeparator : '|'}`;
        console.log(`addStr = ${addStr}`);
    }
    // }
    for (let i = 1; i <= options.repeatTimes; i++) {

        result += `${String(str)}${addStr}${i == options.repeatTimes ? '' : options.separator ? options.separator : '+'}`;
    }
    // console.log(`Результат = ${result}`);
    return result;
}

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 2, additionSeparator: '00' }));