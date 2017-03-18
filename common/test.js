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
});
