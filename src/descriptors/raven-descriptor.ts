import { RavenObject } from "../objects/raven-object";
import { IRavenDescriptor } from "./if-raven-descriptor";

export abstract class RavenDescriptor extends RavenObject implements IRavenDescriptor {
    constructor(private readonly _selector: string) {
        super();
    }

    public get selector(): string {
        return this._selector;
    }
}