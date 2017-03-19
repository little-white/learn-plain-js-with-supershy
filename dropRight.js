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
