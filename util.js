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

module.exports.compact = (array) => {
    return array.filter((elem) => {
        if (elem) {
            return elem;
        }
    })
}

module.exports.difference = (array, arrayFilter) => {
    let newArr = array.slice();
    let inArray = (array, value) => {
        return array.indexOf(value) !== -1;
    }
    return newArr.filter((elem) => {
        return !inArray(arrayFilter, elem);
    })
}
