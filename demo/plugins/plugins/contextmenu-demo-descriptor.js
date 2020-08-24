const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "contextmenu binding";
const htmlText = `<div id="contextmenu-demo">
    <span raven-contextmenu="onContextMenu(ravenEvent)">Katt rám másodlagos gombbal!</span>
</div>`;
const scriptText = `const contextmenuModel = {
    onContextMenu: function(e) {
        console.log("event", e);
        alert("katt!");
    }
};

Raven.plugins.binding.fly("contextmenu-demo", contextmenuModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
