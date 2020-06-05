import { IRavenDescriptorFactory } from "./if-raven-descriptor";
import { RavenHashSet } from "../objects/internal/raven-hashset";

export abstract class RavenDescriptorFactory<T>
    extends RavenHashSet<T>
    implements IRavenDescriptorFactory<T> {

    protected abstract createDescriptorInternal(...args: any[]): T;

    public getAllDescriptor(): Array<T> {
        return this.items;
    }

    public registerDescriptor(descriptor: T): void {
        super.addIfNotExists(descriptor);
    }
    
    public createAndRegisterDescriptor(...args: any[]): T {
        const descriptor = this.createDescriptorInternal(args);
        super.addIfNotExists(descriptor);

        return descriptor;
    }

    public createDescriptor(...args: any[]): T {
        return this.createDescriptorInternal(args);
    }
}
