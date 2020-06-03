import { RavenDescriptor } from "./raven-descriptor";
import { IRavenEventDescriptor } from "./if-raven-descriptor";

export class RavenEventDescriptor extends RavenDescriptor implements IRavenEventDescriptor
{
    constructor
    (
        _selector: string,
        private readonly _eventSelector: string,
        private readonly _onEvent: Function
    )
    {
        super(_selector);
    }

    public get eventSelector(): string {
        return this._eventSelector;
    }

    public get onEvent(): Function {
        return this._onEvent;
    }
}
