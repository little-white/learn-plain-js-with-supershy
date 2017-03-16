var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var fs = require('fs');
var path = require('path');

marked.setOptions({
    // Define custom renderer 
    renderer: new TerminalRenderer()
});

module.exports = (folder) => {
	
    return {
        problemContent: marked(fs.readFileSync(path.normalize(__dirname + '/../' + folder + '/problem.md'), 'utf-8')),
        solutionContent: marked(fs.readFileSync(path.normalize(__dirname + '/../' + folder + '/solution.md'), 'utf-8')),
        adviceContent: marked((fs.readFileSync(__dirname + '/advice.md'), 'utf-8'))
    }
}
