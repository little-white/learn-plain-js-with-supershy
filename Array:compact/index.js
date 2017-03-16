var fs = require('fs');
var common = require(__dirname + '/../common/common');
var test = require(__dirname + '/../common/test-config');


module.exports.problem = function() {
    return common('Array:compact').problemContent;
}

module.exports.solution = function() {
    return common('Array:compact').solutionContent;
}

module.exports.verify = (args, cb) => {
    test(__dirname + '/../common/test.js', common.adviceContent, cb);
};
