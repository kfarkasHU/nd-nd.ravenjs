import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";
import { RavenCore } from "../../rjs6-core-src/raven-main";

const ravenContext = RavenCore.getInstance();

const forEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    const results = RavenEvaluator.evaluate(expression, context);
    const cloned = element.cloneNode(true) as HTMLElement;

    for(let i = 0; i < results.length; i++) {
        const currentChild = cloned.cloneNode(true) as HTMLElement;
        ravenContext
            .pluginScope
            ["binding"]
            ["fly"](currentChild, { element: results[i] })
        ;

        element.parentElement.appendChild(currentChild);// (childInnerElements[i].cloneNode(true) as HTMLElement));
    }

    element.parentElement.removeChild(element);
}

RavenPluginFactory.loadBindingPlugin(
    "raven-for",
    "raven-for",
    forEvaluateFn,
    true
)