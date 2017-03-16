var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var fs = require('fs');

marked.setOptions({
    // Define custom renderer 
    renderer: new TerminalRenderer()
});

module.exports = {
	problemContent: marked(fs.readFileSync(__dirname + '/problem.md', 'utf-8')),
	solutionContent: marked(fs.readFileSync(__dirname + '/solution.md', 'utf-8')),
	adviceContent: marked(fs.readFileSync(__dirname + '/advice.md', 'utf-8'))
}