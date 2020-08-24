const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "click binding";
const htmlText = `<div id="click-demo">
    <span raven-click="onClick(ravenEvent)" style="cursor: pointer">Katt rám!</span>
</div>`;
const scriptText = `const clickModel = {
    onClick: function(e) {
        console.log("event", e);
        alert("katt!");
    }
};

Raven.plugins.binding.fly("click-demo", clickModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
