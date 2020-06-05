import { IRavenBindingDescriptor, IRavenBindingDescriptionFactory } from "./if-raven-descriptor";
import { RavenBindingDescriptor } from "./raven-bnd-descriptor";
import { RavenDescriptorFactory } from "./raven-descriptor-factory";
import { RavenBinderFunction } from "../objects/internal/if-raven-binder-function";
import { RavenAttributeValidatorFunction } from "../objects/internal/if-raven-attribute-validator-function";

export class RavenBindingDescriptorFactory
    extends RavenDescriptorFactory<IRavenBindingDescriptor>
    implements IRavenBindingDescriptionFactory
{
    private static _instance: IRavenBindingDescriptionFactory;

    private constructor(){
        super()
    };

    public static getInstance(): IRavenBindingDescriptionFactory {
        if(!this._instance)
            this._instance = new RavenBindingDescriptorFactory();

        return this._instance;
    }

    protected createDescriptorInternal(
            selector: string,
            attributeValidatorFn: RavenAttributeValidatorFunction,
            binderFn: RavenBinderFunction
        ): IRavenBindingDescriptor {
        return new RavenBindingDescriptor(selector, attributeValidatorFn, binderFn);
    }
}
