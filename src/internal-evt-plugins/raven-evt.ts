import { RavenEventDescriptorFactory } from "../descriptors/raven-evt-descriptor-factory";

export function create(selector: string, eventSelector: string) {
    RavenEventDescriptorFactory
        .getInstance()
        .createAndRegisterDescriptor(selector, eventSelector, function(element: HTMLElement) {
            const attr = element.getAttribute(selector);
            if(attr && this[attr]) {
                this[attr]();
            }
        });
}
