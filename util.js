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

module.exports.drop = (array, n) => {
    let { length } = array;
    // let newArr = array.slice();

    if (length >= n) {
        return array.slice(n);
    }

    if (n < 0) {
        return array;
    }

    if (n > length) {
        return [];
    }

    if (typeof n === 'undefined') {
        return array.slice(1);
    }
}

module.exports.dropRight = (array, n) => {
    let { length } = array;
    // let newArr = array.slice();

    if (n <= 0) {
        return array;
    }

    if (length >= n) {
        return array.slice(0, n - 1);
    }

    if (n > length) {
        return [];
    }

    if (typeof n === 'undefined') {
        return array.slice(0, length - 1);
    }
}



