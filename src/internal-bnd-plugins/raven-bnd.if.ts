import { create } from "./raven-bnd";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenBindingContext } from "../objects/internal/raven-binding-context";
import { RavenAttributeValidatorFunction } from "../objects/internal/if-raven-attribute-validator-function";
import { RavenExpressionHelper } from "../helper/raven-expression-helper";
import { RavenContextHelper } from "../helper/raven-context-helper";
import { RavenEqualityHelper } from "../helper/raven-equality-helper";

const ifValidatorFn: RavenAttributeValidatorFunction = function(expression: string): boolean {
    const properties = RavenExpressionHelper.getProperties(expression);
    const operator = RavenExpressionHelper.getOperator(expression);

    if(properties.length == 1) {
        return true;
    }

    if(operator) {
        return true;
    }

    return false;
}

const ifBinderFn: RavenBinderFunction = function(element: HTMLElement, expression: string, ctx: RavenBindingContext): boolean {
    const properties = RavenExpressionHelper.getProperties(expression);
    const operator = RavenExpressionHelper.getOperator(expression);

    let isValid = true;
    if(properties.length == 1) {
        const propertyValue = RavenContextHelper.getPropertyValue(properties[0], ctx);

        if(operator == "")
            isValid = propertyValue;

        if(operator == "!")
            isValid = !propertyValue;

        if(operator == "!!")
            isValid = !!propertyValue;
    }

    if(properties.length == 2) {
        const leftProperty = RavenContextHelper.getPropertyValue(properties[0], ctx);
        const rightProperty = RavenContextHelper.getPropertyValue(properties[1], ctx);

        isValid = RavenEqualityHelper.checkEquality(leftProperty, rightProperty, operator);
    }

    const display = isValid
        ? "block"
        : "none";

    element.style.display = display;

    return true;
}

create("raven-if", ifValidatorFn, ifBinderFn);
