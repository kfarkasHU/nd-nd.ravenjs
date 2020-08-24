import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const mouseoverEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("mouseover", function() {
        const _ = RavenEvaluator.evaluate(expression, context);
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-mouseover",
    "raven-mouseover",
    mouseoverEvaluateFn
);
