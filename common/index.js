var fs = require('fs');
var common = require(__dirname + '/common');
var test = require(__dirname + '/test-config');


module.exports.problem = function(folder) {
    return common(folder).problemContent;
}

module.exports.solution = function(folder) {
    return common(folder).solutionContent;
}

module.exports.verify = (args, cb) => {
    test(__dirname + '/test.js', common.adviceContent, cb);
};
