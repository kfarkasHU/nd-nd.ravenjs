import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const clickEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("click", function(event) {
        const _ = RavenEvaluator.evaluate(expression, { ...context, ravenEvent: event });
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-click",
    "raven-click",
    clickEvaluateFn
);
