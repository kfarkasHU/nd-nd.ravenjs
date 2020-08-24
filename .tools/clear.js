const fs = require('fs');
const path = require('path');

function clearFolder(directory) {
    fs.readdir(directory, (error, files) => {
        if (error) {
            throw err;
        }
      
        for (const file of files) {
            fs.unlink(path.join(directory, file), error => {
                if (error) {
                    throw err;
                }
            });
        }
    });
}

module.exports = clearFolder;
