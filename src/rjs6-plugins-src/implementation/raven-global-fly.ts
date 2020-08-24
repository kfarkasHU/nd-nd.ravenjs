import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenCore } from "../../rjs6-core-src/raven-main";
import { RavenBindingPluginDescriptor } from "../../rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor";

const ravenContext = RavenCore.getInstance();

const flyFunction = function(target: string | HTMLElement, context: any) {
    if(typeof target === "string") {
        target = document.getElementById(target);
    }

    if(!target) {
        throw "Cannot find the binding target!";
    }

    const attributes = ravenContext.getAllSelector();

    bindRecursively(toHtmlElementArray(target.children), context, attributes);
}

function bindRecursively(childNodes: HTMLElement[], context: any, attributes: string[]) {
    for(const childNode of childNodes) {
        const ravenAttributes = [];
        let bindChildren = true;

        for(const attribute of attributes) {
            const nodeAttribute = childNode.getAttribute(attribute);

            if(nodeAttribute) {
                ravenAttributes.push({ name: attribute, expression: nodeAttribute });
            }
        }

        if(ravenAttributes.length > 0) {
            if(ravenAttributes.length > 1) {
                throw "More than one attributes detected on element!";
            }

            const ravenAttribute = ravenAttributes[0];
            const plugin = ravenContext.findBindingPluginBySelector(ravenAttribute.name) as RavenBindingPluginDescriptor;

            if(!plugin) {
                throw `Raven binding plugin was not found with selector ${ravenAttribute.name}!`;
            }

            plugin.onEvaluate(childNode, ravenAttribute.expression, context);
            bindChildren = !plugin.opensNewContext;
        }

        if(childNode.children.length > 0 && bindChildren) {
            bindRecursively(toHtmlElementArray(childNode.children), context, attributes);
        }
    }
}

function toHtmlElementArray(collection: HTMLCollection): HTMLElement[] {
    return [].slice.call(collection);
}

RavenPluginFactory.loadGlobalPlugin(
    "raven-fly",
    "binding",
    {
        "fly": flyFunction
    }
);