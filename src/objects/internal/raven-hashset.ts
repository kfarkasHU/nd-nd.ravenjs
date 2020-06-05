import { RavenObject } from "../raven-object";
import { RavenCommonHelper } from "../../helper/raven-common-helper";

export abstract class RavenHashSet<T> extends RavenObject 
{
    private _hash: Array<T> = [];

    protected addIfNotExists(item: T): void {
        if(this.indexOfInternal(item) >= 0)
            this._hash.push(item);
    }

    protected clear(): void {
        this._hash = [];
    }

    protected indexOf(item: T): number {
        return this.indexOfInternal(item);
    }

    protected get items(): Array<T> {
        return RavenCommonHelper.deepClone(this._hash);
    }

    private indexOfInternal(item: T): number {
        return this._hash.indexOf(item);
    }
}
