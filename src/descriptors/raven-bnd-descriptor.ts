import { RavenDescriptor } from "./raven-descriptor";
import { IRavenBindingDescriptor } from "./if-raven-descriptor";
import { RavenAttributeValidatorFunction } from "../objects/internal/if-raven-attribute-validator-function";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";

export class RavenBindingDescriptor extends RavenDescriptor implements IRavenBindingDescriptor
{
    constructor
    (
        _selector: string,
        private readonly _attributeValidatorFn: RavenAttributeValidatorFunction,
        private readonly _binderFn: RavenBinderFunction
    )
    {
        super(_selector);
    }
    getAttributeValidatorFn(): RavenAttributeValidatorFunction {
        return this._attributeValidatorFn;
    }
    getBinderFn(): RavenBinderFunction {
        return this._binderFn;
    }
    
}
