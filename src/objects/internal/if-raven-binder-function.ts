import { RavenFunction } from "./if-raven-function";
import { RavenBindingContext } from "./raven-binding-context";

export interface RavenBinderFunction extends RavenFunction {
    (element: HTMLElement, attribute: string, context: RavenBindingContext): boolean;
}