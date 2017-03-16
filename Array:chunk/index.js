var fs = require('fs');
var common = require(__dirname + '/common');
var test = require(__dirname + '/test-config');


module.exports.problem = function() {
    return common.problemContent;
}

module.exports.solution = function() {
    return common.solutionContent;
}

module.exports.verify = (args, cb) => {
    test(__dirname + '/test.js', common.adviceContent, cb);
};
