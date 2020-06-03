import { RavenObjectHelper } from "../helper/raven-object-helper";

export abstract class RavenObject
{
    private readonly _identifier: string;

    constructor()
    {
        this._identifier = RavenObjectHelper.nextId;
    }

    public get identifier(): string {
        return this._identifier;
    }
}