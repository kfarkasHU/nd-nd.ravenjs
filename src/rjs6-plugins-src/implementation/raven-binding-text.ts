import { RavenPluginFactory } from "../raven-plugin-factory";
import { RavenEvaluator } from "../helper/raven-evaluator";

const textEvaluateFn = function(
    element: HTMLElement,
    expression: string,
    context: any
) {
    const result = RavenEvaluator.evaluate(expression, context);

    element.textContent = result;
}

RavenPluginFactory.loadBindingPlugin(
    "raven-text",
    "raven-text",
    textEvaluateFn
)