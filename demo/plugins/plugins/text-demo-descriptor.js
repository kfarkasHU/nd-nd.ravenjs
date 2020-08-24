const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "text binding";
const htmlText = `<div id="text-demo">
    <span raven-text="text1">szöveg 1</span><br />
    <span raven-text="text2">szöveg 2</span>
</div>`;
const scriptText = `const textModel = {
    text1: "alma",
    text2: "béka"
};

Raven.plugins.binding.fly("text-demo", textModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
