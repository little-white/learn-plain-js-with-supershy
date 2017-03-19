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
