import { IRavenEventDescriptor, IRavenEventDescriptorFactory } from "./if-raven-descriptor";
import { RavenEventDescriptor } from "./raven-evt-descriptor";
import { RavenDescriptorFactory } from "./raven-descriptor-factory";

export class RavenEventDescriptorFactory
    extends RavenDescriptorFactory<IRavenEventDescriptor>
    implements IRavenEventDescriptorFactory
{
    private static _instance: IRavenEventDescriptorFactory;

    private constructor() {
        super();
    };

    public static getInstance(): IRavenEventDescriptorFactory {
        if(!this._instance)
            this._instance = new RavenEventDescriptorFactory();

        return this._instance;
    }

    protected createDescriptorInternal(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor {
        return new RavenEventDescriptor(selector, eventSelector, onEvent);
    } 
}
