const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "if binding";
const htmlText = `<div id="if-demo">
    <span raven-if="alwaysTrue">itt igaz</span> <br />
    <span raven-if="alwaysFalse">itt hamis</span>
</div>`;
const scriptText = `const ifModel = {
    alwaysTrue: true,
    alwaysFalse: false
};

Raven.plugins.binding.fly("if-demo", ifModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
