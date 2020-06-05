import { RavenFunction } from "../objects/internal/if-raven-function";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenAttributeValidatorFunction } from "../objects/internal/if-raven-attribute-validator-function";

export interface IRavenDescriptor {    
    identifier: string,
    selector: string
}

export interface IRavenEventDescriptor extends IRavenDescriptor {
    eventSelector: string,
    onEvent: RavenFunction
}

export interface IRavenBindingDescriptor extends IRavenDescriptor {
    getAttributeValidatorFn(): RavenAttributeValidatorFunction,
    getBinderFn(): RavenBinderFunction
}

export interface IRavenDescriptorFactory<T> {
    getAllDescriptor(): Array<T>,
    registerDescriptor(descriptor: T): void
}

export interface IRavenEventDescriptorFactory extends IRavenDescriptorFactory<IRavenEventDescriptor>
{
    createAndRegisterDescriptor(selector: string, eventSelector: string, onEvent: RavenFunction): IRavenEventDescriptor,
    createDescriptor(selector: string, eventSelector: string, onEvent: RavenFunction): IRavenEventDescriptor,
}

export interface IRavenBindingDescriptionFactory extends IRavenDescriptorFactory<IRavenBindingDescriptor>
{
    createAndRegisterDescriptor(selector: string, attributeValidatorFn: RavenAttributeValidatorFunction, binderFn: RavenBinderFunction): IRavenBindingDescriptor,
    createDescriptor(selector: string, attributeValidatorFn: RavenAttributeValidatorFunction, binderFn: RavenBinderFunction): IRavenBindingDescriptor,
}
