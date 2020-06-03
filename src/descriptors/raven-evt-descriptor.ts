import { RavenObject } from "../objects/raven-object";

export class RavenEventDescriptor extends RavenObject
{
    constructor
    (
        private _selector: string,
        private _eventSelector: string,
        private _onEvent: Function
    )
    {
        super();
    }

    public get selector(): string {
        return this._selector;
    }

    public get eventSelector(): string {
        return this._eventSelector;
    }

    public get onEvent(): Function {
        return this._onEvent;
    }
}
