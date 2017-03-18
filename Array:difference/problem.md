# 挑战

> 来自lodash中文官网的[chunk](http://lodashjs.com/docs/#_chunkarray-size1)

Creates an array of unique `array` values not included in the other provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality comparisons.返回一个数组，此数组不包含另外数组中的值。

#### 参数

1. `array` *(Array)*: 需要过滤的数组
2. `[values]` *(...Array)*: 数组需要排除掉的值

#### 返回值

*(Array)*: 返回过滤后的数组

#### 例子

```javascript
_.difference([1, 2, 3], [4, 2]);
// => [1, 3]
_.difference([1, '2', 3], [4, 2]);
// => [1, "2", 3]
```

### 完善下面代码并保存到difference.js中

```javascript
module.exports.difference = (array, arrayFilter) => {
  //代码实现
  
  return ;//返回结果
}
```

### 完成后请执行以下命令来验证：

```learn-plain-js-with-supershy verify difference.js```

