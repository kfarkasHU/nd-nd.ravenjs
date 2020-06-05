import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenBindingDescriptorFactory } from "../descriptors/raven-bnd-descriptor-factory";

export function create(selector: string, binderFn: RavenBinderFunction): void {
    RavenBindingDescriptorFactory
        .getInstance()
        .createAndRegisterDescriptor(selector, binderFn);
}
