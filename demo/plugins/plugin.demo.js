require("./plugins/text-demo-descriptor");
require("./plugins/click-demo-descriptor");
require("./plugins/contextmenu-demo-descriptor");
require("./plugins/if-demo-descriptor");
require("./plugins/for-demo-descriptor");


const DemoPluginGenerator = require("./plugin.generator");
DemoPluginGenerator.generate();
