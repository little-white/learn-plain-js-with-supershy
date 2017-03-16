module.exports.chunk = (array, size) => {
    var newArr = [];
    for (var i = 0; i < parseInt((array.length) / size); i++) {
        newArr.push(array.slice(i * size, (i + 1) * size));
    }
    
    if (array.length % size !== 0) {
        newArr.push(array.slice(array.length - parseInt((array.length) / size)));
    }
    return newArr;
}
