# 挑战

> 来自lodash中文官网的[chunk](http://lodashjs.com/docs/#_chunkarray-size1)

将 `array` 拆分成多个 `size` 长度的块，把这些块组成一个新数组。 如果 `array` 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。

#### 参数

1. `array` *(Array)*: 需要被处理的数组。
2. `[size=1]` *(number)*: 每个块的长度。

#### 返回值

*(Array)*: 返回一个包含拆分块数组的新数组（相当于一个二维数组）。

#### 例子

```javascript
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### 完善下面代码并保存到chunk.js中

```javascript
module.exports.chunk = (array, size) => {
  //代码实现
  
  return ;//返回结果
}
```

### 完成后请执行以下命令来验证：

```learn-plain-js-with-supershy verify chunk.js```

