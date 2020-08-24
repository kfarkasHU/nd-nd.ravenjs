import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const mouseoutEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("mouseout", function() {
        const _ = RavenEvaluator.evaluate(expression, context);
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-mouseout",
    "raven-mouseout",
    mouseoutEvaluateFn
);
