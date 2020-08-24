const DemoDescriptor = require("./descriptor");

// class DemoDescriptorFactory {}
class DemoDescriptorFactory {
    static createDescriptor = function(
        name,
        htmlText,
        scriptText
    ) {
        return new DemoDescriptor(name, htmlText, scriptText);
    }
}

module.exports = DemoDescriptorFactory;
