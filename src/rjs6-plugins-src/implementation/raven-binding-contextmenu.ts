import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const contextmenuEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("contextmenu", function(event) {
        const _ = RavenEvaluator.evaluate(expression, { ...context, ravenEvent: event });
        event.preventDefault();
        return false;
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-contextmenu",
    "raven-contextmenu",
    contextmenuEvaluateFn
);
