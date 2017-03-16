# supershy的方案

```javascript
/**
	思路：[1,2,3,4].slice(0,2)返回[1,2]，使用slice来进行分块
*/
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
```

