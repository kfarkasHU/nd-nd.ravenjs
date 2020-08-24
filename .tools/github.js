const fs = require("fs");
const path = require('path');

const demoPath = "demo";
const distPath = "dist";
const docsPath = "docs";

function createDemo() {
    copy(demoPath, docsPath);
    copy(distPath, docsPath);

    const indexPath = path.join(docsPath, "index.html");
    fs.readFile(indexPath, 'utf8', function (error, data) {
        if (error) {
          throw error;
        }
        const result = data.replace("../dist/", "");
      
        fs.writeFile(indexPath, result, 'utf8', function (error) {
           if (error) {
               throw error;
           }
        });
    });

    function copy(source, target) {
        fs.readdirSync(source).forEach(file => {
            const filePath = path.join(source, file);
            if(fs.statSync(filePath).isFile()) {
                const targetPath = path.join(target, file)
                fs.copyFileSync(filePath, targetPath);
            }
        });
    }
}

createDemo();
