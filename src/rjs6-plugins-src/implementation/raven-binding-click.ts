import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const clickEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("click", function() {
        const _ = RavenEvaluator.evaluate(expression, context);
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-click",
    "raven-click",
    clickEvaluateFn
);
