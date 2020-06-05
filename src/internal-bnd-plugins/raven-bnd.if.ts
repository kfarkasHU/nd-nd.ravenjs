import { create } from "./raven-bnd";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenBindingContext } from "../objects/internal/raven-binding-context";

const ifBinderFn: RavenBinderFunction = function(element: HTMLElement, expression: string, ctx: RavenBindingContext): boolean {
    const isValid = function():boolean { return eval(expression); }.call(ctx);

    const display = isValid
        ? "block"
        : "none";

    element.style.display = display;

    return true;
}

create("raven-if", ifBinderFn);
