import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const ifEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    const result = RavenEvaluator.evaluate(expression, context);

    if(!result) {
        element.style.display = "none";
    } else {
        element.style.display = "";
    }
}

RavenPluginFactory.loadBindingPlugin(
    "raven-if",
    "raven-if",
    ifEvaluateFn
)