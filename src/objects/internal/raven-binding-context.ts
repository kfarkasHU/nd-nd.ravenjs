import { RavenObject } from "../raven-object";
import { RavenCommonHelper } from "../../helper/raven-common-helper";

export class RavenBindingContext extends RavenObject {
    constructor(private readonly _data: any) {
        super();
    }

    public getData(): any {
        return RavenCommonHelper.deepClone(this._data);
    }
}
