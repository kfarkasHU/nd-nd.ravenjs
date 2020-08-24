const DemoDescriptStash = require("./descriptor-stash");
const fs = require("fs");
const path = require("path");

String.prototype.replaceAll = function(oldStr, newStr) {
    let s = this;

    while(s.indexOf(oldStr) >= 0) {
        s = s.replace(oldStr, newStr);
    }

    return s;
}

class DemoPluginGenerator {
    static _accordions = [];
    static getIndexFileTemplate() {
        return `
        <html>
            <head>
                <script src="../dist/rjs6-latest-dev.js"></script>
                
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="bootstrap.min.css">
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        
                <title>ravenjs demo</title>
        
            </head>
            <body style="background-color: #f6f6f6">
                <nav class="navbar navbar-dark bg-primary">
                    <a class="navbar-brand" href="#">
                      <img src="./ravenjs_transparent_small.png" alt="" loading="lazy">
                        RavenJS 6.0
                    </a>
                </nav>
        
                <div class="container">
                    <div class="jumbotron jumbotron-fluid bg-primary text-white mt-2 shadow p-3 mb-5 rounded">
                        <div class="container">
                            <h1 class="display-4">RavenJS 6.0</h1>
                            <p class="lead">Just another JS lib</p>
                        </div>
                    </div>
        
                    <div class="page">
                        <div class="row">
                            <div class="col">
                                <div class="accordion shadow mb-5 rounded" id="accordionExample">
                                    _ACCORDIONS_
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>`;
    }
    static getAccordionTemplate() {
        return `<div class="card text-white bg-secondary">
        <div class="card-header" id="headingText">
            <h2 class="mb-0">
                <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#_COLLAPSEID_" aria-expanded="true" aria-controls="_COLLAPSEID_">
                    # _NAME_ <span class="badge badge-pill badge-primary">new</span>
                </button>
            </h2>
        </div>
    
        <div id="_COLLAPSEID_" class="collapse" aria-labelledby="headingText" data-parent="#accordionExample">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h2 class="title border-bottom">
                            Demo
                        </h2>
                    </div>
                </div>
                <div class="row">
                    _DEMO_
                    _CODE_
                </div>
            </div>
        </div>
    </div>`;
    }
    static getDemoTemplate() {
        return `<div class="col">
        <div class="row">
            <div class="col mt-3">
                _HTML_
            </div>
            <div class="col mt-3">
                <button class="btn btn-primary" onclick="_DEMOFUNCTIONNAME_()">Click me</button>
                <script>
                    function _DEMOFUNCTIONNAME_() {
                        _SCRIPT_
                    }
                </script>
            </div>
        </div>
    </div>`;
    }
    static getCodeTemplate() {
        return `<div class="col">
    <div class="row">
        <div class="col">
            <span class="title border-bottom">HTML</span>
<pre>_HTML_</pre>
            <span class="title border-bottom">JS</span>
<pre>_SCRIPT_</pre>
        </div>
    </div>
</div>`;
    }
    static generate = function() {
        console.log("Generatin demo!\nGood luck...");
        const descriptors = DemoDescriptStash.getDescriptors();
        
        for(const descriptor of descriptors) {
            const currentAccordionTemplate = DemoPluginGenerator
                .getAccordionTemplate()
                .replace("_NAME_", descriptor.name)
                .replaceAll("_COLLAPSEID_", `collapse_${DemoPluginGenerator._accordions.length}`)
            ;

            const currentDemoTemplate = DemoPluginGenerator
                .getDemoTemplate()
                .replace("_HTML_", descriptor.htmlText)
                .replace("_SCRIPT_", descriptor.scriptText)
                .replaceAll("_DEMOFUNCTIONNAME_", `function_${DemoPluginGenerator._accordions.length}`)
            ;

            const currentCodeTemplate = DemoPluginGenerator
                .getCodeTemplate()
                .replace("_HTML_", DemoPluginGenerator.toSafeString(descriptor.htmlText))
                .replace("_SCRIPT_", descriptor.scriptText)
            ;

            const finishedAccordion = currentAccordionTemplate
                .replace("_DEMO_", currentDemoTemplate)
                .replace("_CODE_", currentCodeTemplate)
            ;

            DemoPluginGenerator._accordions.push(finishedAccordion);
        }
        DemoPluginGenerator.createIndexFile();
    }
    static toSafeString(str) {
        const safe = str
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
        ;

        return safe;
    }
    static createIndexFile() {
        const accorionsText = DemoPluginGenerator._accordions.join("");
        const filePath = path.resolve(__dirname, "../index.html");
        const fileContent = DemoPluginGenerator
            .getIndexFileTemplate()
            .replace("_ACCORDIONS_", accorionsText)
        ;

        fs.writeFile(filePath, fileContent, function(error) {
            if(error) {
                throw error;
            }
            console.log("Demo generation finished successfully!");
        });
    }
};

module.exports = DemoPluginGenerator;
