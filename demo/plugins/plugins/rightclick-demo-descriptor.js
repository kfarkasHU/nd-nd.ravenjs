const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "rightclick binding";
const htmlText = `<div id="rightclick-demo">
    <span raven-rightclick="onRightClick(ravenEvent)">Katt rám másodlagos gombbal!</span>
</div>`;
const scriptText = `const rightclickModel = {
    onRightClick: function(e) {
        console.log("event", e);
        alert("katt!");
    }
};

Raven.plugins.binding.fly("rightclick-demo", rightclickModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
