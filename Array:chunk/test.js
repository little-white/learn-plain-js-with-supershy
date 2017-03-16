var assert = require('assert');
var lodashLike = require(process.cwd() +'/'+ process.argv[3]);

describe('Array', function() {
    describe('应该返回一个包含拆分块数组的新数组（相当于一个二维数组）', function() {
        it("chunk(['a', 'b', 'c', 'd'], 2)应该返回[['a', 'b'], ['c', 'd']]", function() {
        	assert.deepEqual(lodashLike.chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
        });
        it("chunk(['a', 'b', 'c', 'd'], 3)应该返回[['a', 'b', 'c'], ['d']]", function() {
        	assert.deepEqual(lodashLike.chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
        });
    });
});
