import { RavenDescriptor } from "./raven-descriptor";
import { IRavenBindingDescriptor } from "./if-raven-descriptor";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";

export class RavenBindingDescriptor extends RavenDescriptor implements IRavenBindingDescriptor
{
    constructor
    (
        _selector: string,
        private readonly _binderFn: RavenBinderFunction
    )
    {
        super(_selector);
    }
    getBinderFn(): RavenBinderFunction {
        return this._binderFn;
    }
    
}
