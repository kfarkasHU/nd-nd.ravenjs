import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const rightclickEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    element.addEventListener("oncontextmenu", function() {
        const _ = RavenEvaluator.evaluate(expression, context);
    });
}

RavenPluginFactory.loadBindingPlugin(
    "raven-rightclick",
    "raven-rightclick",
    rightclickEvaluateFn
);
