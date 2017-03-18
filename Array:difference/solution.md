# supershy的方案

```javascript
/**
	思路：使用filter，如果array中的元素不在arrayFilter中则return
*/
module.exports.difference = (array, arrayFilter) => {
    let newArr = array.slice();
    let inArray = (array, value) => {
        return array.indexOf(value) !== -1;
    }
    return newArr.filter((elem) => {
        return !inArray(arrayFilter, elem);
    })
}

```

