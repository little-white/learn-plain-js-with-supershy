# 挑战

> 来自lodash中文官网的[dropRight](http://lodashjs.com/docs/#_droprightarray-n1)

将 `array` 中的前 `n` 个元素去掉，然后返回剩余的部分。

#### 参数

1. `array` *(Array)*: 需要被处理数组。
2. `[n=1]` *(number)*: 去掉的元素个数。

#### 返回值

*(Array)*: 返回 `array` 的剩余部分。

#### 例子

```javascript
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

### 完善下面代码并保存到dropRight中

```javascript
module.exports.dropRight = (array, n) => {
  //代码实现
  
  return ;//返回结果
}
```

### 完成后请执行以下命令来验证：

```learn-plain-js-with-supershy verify dropRight.js```

