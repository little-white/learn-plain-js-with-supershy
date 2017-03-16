var Mocha = require('mocha');

var mocha = new Mocha();

module.exports = (filePath, adviceContent, cb) => {
    mocha.addFile(filePath);
    mocha.run(function(failures) {
        cb(failures === 0 ? true : false);
        process.on('exit', function() {
            if (failures !== 0) {
                console.log(adviceContent);
            }
            process.exit(failures); // exit with non-zero status if there were failures
        });
    });
}
