function isMAC48Address(n) {
    const reg = new RegExp('^([0-9]|[A-F]|-)+$');
    console.log(reg.test(n));
    if (!reg.test(n) || n.length != 17) return false;

    const arr = n.split('-');
    if (arr.length != 6) return false;

    for (let i of arr) {
        if (i.length != 2) return false;
    }

    return true;
}


console.log(isMAC48Address('G0-00-00-00-00-00'))