module.exports.difference = (array, arrayFilter) => {
    let newArr = array.slice();
    let inArray = (array, value) => {
        return array.indexOf(value) !== -1;
    }
    return newArr.filter((elem) => {
        return !inArray(arrayFilter, elem);
    })
}
