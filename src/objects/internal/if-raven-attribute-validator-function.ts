import { RavenFunction } from "./if-raven-function";

export interface RavenAttributeValidatorFunction extends RavenFunction
{
    (attribute: string): boolean;
}