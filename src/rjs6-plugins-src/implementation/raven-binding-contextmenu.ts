import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const contextmenuEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("oncontextmenu", function() {
        const _ = RavenEvaluator.evaluate(expression, context);

        return false;
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-contextmenu",
    "raven-contextmenu",
    contextmenuEvaluateFn
);
