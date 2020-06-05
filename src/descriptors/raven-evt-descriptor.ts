import { RavenDescriptor } from "./raven-descriptor";
import { IRavenEventDescriptor } from "./if-raven-descriptor";
import { RavenFunction } from "../objects/internal/if-raven-function";

export class RavenEventDescriptor extends RavenDescriptor implements IRavenEventDescriptor
{
    constructor
    (
        _selector: string,
        private readonly _eventSelector: string,
        private readonly _onEvent: RavenFunction
    )
    {
        super(_selector);
    }

    public get eventSelector(): string {
        return this._eventSelector;
    }

    public get onEvent(): RavenFunction {
        return this._onEvent;
    }
}
