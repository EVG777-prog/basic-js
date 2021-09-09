function getSeason(date) {
    if (date == undefined) throw new Error('Unable to determine the time of year!');
    if (typeof date != 'object' || Object.keys(date).length > 0) throw new Error('Invalid date!');
    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    const month = date.getMonth();
    return seasons[month];

}


const date = new Date(1900, 0, 22, 23, 45, 11, 500);

console.log(Object.keys(date).length);
console.log(getSeason())