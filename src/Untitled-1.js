function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr = String(n).split('');
    console.log(arr);
    const b = arr.length - 1;
    for (let i = 0; i < b; i++) {
        console.log(`Проверяем по индексу ${i}`);
        if (arr[i] < arr[i + 1]) {
            console.log(`${arr[i]} < ${arr[i + 1]}`);
            arr.splice(i, 1);
            console.log(arr);
            break;
        }
        if (i == arr.length - 2) {
            arr.splice(arr.length - 1, 1);
            break;
        }
    }

    return +arr.join('');
}

console.log(deleteDigit(1001));