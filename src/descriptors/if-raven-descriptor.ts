export interface IRavenDescriptor {    
    identifier: string,
    selector: string
}

export interface IRavenEventDescriptor extends IRavenDescriptor {
    eventSelector: string,
    onEvent: Function
}

export interface IRavenBindingDescriptor extends IRavenDescriptor {
    onEvaluate: Function
}

export interface IRavenDescriptorFactory<T> {
    getAllDescriptor(): Array<T>,
    registerDescriptor(descriptor: T): void
}

export interface IRavenEventDescriptorFactory extends IRavenDescriptorFactory<IRavenEventDescriptor>
{
    createAndRegisterDescriptor(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor,
    createDescriptor(selector: string, eventSelector: string, onEvent: Function): IRavenEventDescriptor,
}

export interface IRavenBindingDescriptionFactory extends IRavenDescriptorFactory<IRavenBindingDescriptor>
{
    createAndRegisterDescriptor(selector: string, onEvaluate: Function): IRavenBindingDescriptor,
    createDescriptor(selector: string, onEvaluate: Function): IRavenBindingDescriptor,
}
