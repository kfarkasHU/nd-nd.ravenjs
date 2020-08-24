import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const rightclickEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("contextmenu", function(event) {
        const _ = RavenEvaluator.evaluate(expression, { ...context, ravenEvent: event });

        return false;
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-rightclick",
    "raven-rightclick",
    rightclickEvaluateFn
);
