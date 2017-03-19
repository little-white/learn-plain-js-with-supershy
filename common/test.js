var assert = require('assert');
var lodashLike = require(process.cwd() + '/' + process.argv[3]);

// 判断所写的方法，如果存在就测试，否则就忽略
var test = (method, obj) => {
    return obj[method] ? describe : describe.skip;
}

describe('Array', function() {

    test('chunk', lodashLike)('应该返回一个包含拆分块数组的新数组（相当于一个二维数组）', () => {
        it("chunk(['a', 'b', 'c', 'd'], 2)应该返回[['a', 'b'], ['c', 'd']]", () => {
            assert.deepEqual(lodashLike.chunk(['a', 'b', 'c', 'd'], 2), [
                ['a', 'b'],
                ['c', 'd']
            ]);
        });
        it("chunk(['a', 'b', 'c', 'd'], 3)应该返回[['a', 'b', 'c'], ['d']]", () => {
            assert.deepEqual(lodashLike.chunk(['a', 'b', 'c', 'd'], 3), [
                ['a', 'b', 'c'],
                ['d']
            ]);
        });
    });

    test('compact', lodashLike)('应该返回过滤假值后的数组', () => {
        it("compact([0, 1, false, 2, '', 3])应该返回[1, 2, 3]", () => {
            assert.deepEqual(lodashLike.compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
        });
    });

    test('difference', lodashLike)('应该返回过滤后的数组', () => {
        it("difference([1, 2, 3], [4, 2])应该返回[1, 3]", () => {

            assert.deepEqual(lodashLike.difference([1, 2, 3], [4, 2]), [1, 3]);
        });
        it("difference([1, '2', 3], [4, 2])应该返回[1, '2', 3]", () => {
            assert.deepEqual(lodashLike.difference([1, '2', 3], [4, 2]), [1, '2', 3]);
        });
    });

    test('drop', lodashLike)('应该返回 array 的剩余部分。', () => {
        it("drop([1, 2, 3])应该返回[2, 3]", () => {
            assert.deepEqual(lodashLike.drop([1, 2, 3]), [2, 3]);
        });
        it("drop([1, 2, 3], 2)应该返回[3]", () => {
            assert.deepEqual(lodashLike.drop([1, 2, 3], 2), [3]);
        });
        it("drop([1, 2, 3], 5)应该返回[]", () => {
            assert.deepEqual(lodashLike.drop([1, 2, 3], 5), []);
        });
        it("drop([1, 2, 3], 0)应该返回[1, 2, 3]", () => {
            assert.deepEqual(lodashLike.drop([1, 2, 3], 0), [1, 2, 3]);
        });
    });

    test('dropRight', lodashLike)('应该返回 array 的剩余部分。', () => {
        it("dropRight([1, 2, 3])应该返回[1, 2]", () => {
            assert.deepEqual(lodashLike.dropRight([1, 2, 3]), [1, 2]);
        });
        it("dropRight([1, 2, 3], 2)应该返回[1]", () => {
            assert.deepEqual(lodashLike.dropRight([1, 2, 3], 2), [1]);
        });
        it("dropRight([1, 2, 3], 5)应该返回[]", () => {
            assert.deepEqual(lodashLike.dropRight([1, 2, 3], 5), []);
        });
        it("dropRight([1, 2, 3], 0)应该返回[1, 2, 3]", () => {
            assert.deepEqual(lodashLike.dropRight([1, 2, 3], 0), [1, 2, 3]);
        });
    });

});
