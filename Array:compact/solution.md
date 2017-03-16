# supershy的方案

```javascript
/**
	思路：使用filter
*/
module.exports.compact = (array) => {
    return array.filter((elem) => {
        if (elem) {
            return elem;
        }
    })
}
```

