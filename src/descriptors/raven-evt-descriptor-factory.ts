import { IRavenDescriptorFactory, IRavenEventDescriptor } from "./if-raven-descriptor";
import { RavenEventDescriptor } from "./raven-evt-descriptor";
import { RavenCommonHelper } from "../helper/raven-common-helper";

export class RavenEventDescriptorFactory implements IRavenDescriptorFactory<IRavenEventDescriptor>
{
    private static _registeredDescriptors: Array<IRavenEventDescriptor> = [];
    private static _instance: IRavenDescriptorFactory<IRavenEventDescriptor>;

    private constructor(){};

    public static getInstance(): IRavenDescriptorFactory<IRavenEventDescriptor> {
        if(!this._instance)
            this._instance = new RavenEventDescriptorFactory();

        return this._instance;
    }

    public createAndRegisterDescriptor(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor {
        const descriptor = this.createDescriptorInternal(selector, eventSelector, onEvent);

        this.registerDescriptorInternal(descriptor);

        return descriptor;
    }

    public createDescriptor(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor {
        return this.createDescriptorInternal(selector, eventSelector, onEvent);
    }

    public getAllDescriptor(): Array<IRavenEventDescriptor> {
        return RavenCommonHelper.deepClone(RavenEventDescriptorFactory._registeredDescriptors);
    }

    public registerDescriptor(descriptor: IRavenEventDescriptor): void {
        this.registerDescriptorInternal(descriptor);
    }

    private registerDescriptorInternal(descriptor: IRavenEventDescriptor) {
        if(RavenEventDescriptorFactory._registeredDescriptors.indexOf(descriptor))
            return;
        
        RavenEventDescriptorFactory._registeredDescriptors.push(descriptor);
    }

    private createDescriptorInternal(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor {
        return new RavenEventDescriptor(selector, eventSelector, onEvent);
    } 
}
