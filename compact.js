module.exports.compact = (array) => {
    return array.filter((elem) => {
        if (elem) {
            return elem;
        }
    })
}