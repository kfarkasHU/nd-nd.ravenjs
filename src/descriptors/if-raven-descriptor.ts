export interface IRavenDescriptor {    
    identifier: string,
    selector: string
}

export interface IRavenEventDescriptor extends IRavenDescriptor {
    eventSelector: string,
    onEvent: Function
}

export interface IRavenBindingDescriptor extends IRavenDescriptor {

}

export interface IRavenDescriptorFactory<T> {
    createAndRegisterDescriptor(selector: string, eventSelector: string, onEvent: Function): T,
    createDescriptor(selector: string, eventSelector: string, onEvent: Function): T,
    getAllDescriptor(): Array<T>,
    registerDescriptor(descriptor: T): void
}
