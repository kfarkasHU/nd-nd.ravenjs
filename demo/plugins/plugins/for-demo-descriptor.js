const DemoDescriptorFactory = require("../descriptor-factory");
const DemoDescriptorStash = require("../descriptor-stash");

const name = "for binding";
const htmlText = `<div id="for-demo">
    <table class="table">
        <thead>
            <tr>
                <td scope="col">#</td>
                <td scope="col">ugyanaz szöveggel</td>
            </tr>
        </thead>
        <tbody>
            <tr raven-for="objects" class="table-primary">
                <th scope="row">
                    <span raven-text="element.id"></span>
                </th>
                <td>
                    <span raven-text="element.text"></span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`;
const scriptText = `const forModel = {
    objects: [
        { id: 1, text: "egy" },
        { id: 2, text: "kettő" },
        { id: 3, text: "három" },
        { id: 4, text: "négy" },
        { id: 5, text: "öt" },
        { id: 6, text: "hat" },
    ]
};

Raven.plugins.binding.fly("for-demo", forModel);`;

const descriptor = DemoDescriptorFactory.createDescriptor(name, htmlText, scriptText);
DemoDescriptorStash.addDescriptor(descriptor);
