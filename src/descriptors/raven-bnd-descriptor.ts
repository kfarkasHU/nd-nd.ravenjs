import { RavenDescriptor } from "./raven-descriptor";
import { IRavenBindingDescriptor } from "./if-raven-descriptor";

export class RavenBindingDescriptor extends RavenDescriptor implements IRavenBindingDescriptor
{
    constructor
    (
        _selector: string,
        private readonly _onEvaluate: Function
    )
    {
        super(_selector);
    }

    public get onEvaluate(): Function {
        return this._onEvaluate;
    }
}
