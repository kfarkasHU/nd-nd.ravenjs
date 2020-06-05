import { RavenAttributeValidatorFunction } from "../objects/internal/if-raven-attribute-validator-function";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenBindingDescriptorFactory } from "../descriptors/raven-bnd-descriptor-factory";

export function create(selector: string, attributeValidatorFn: RavenAttributeValidatorFunction, binderFn: RavenBinderFunction): void {
    RavenBindingDescriptorFactory
        .getInstance()
        .createAndRegisterDescriptor(selector, attributeValidatorFn, binderFn);
}
