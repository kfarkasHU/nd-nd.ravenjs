import { RavenEventDescriptorFactory } from "../descriptors/raven-evt-descriptor-factory";

export class RavenEventDescriptorCore {
    public static create(selector: string, eventSelector: string) {
        RavenEventDescriptorFactory
        .getInstance()
        .createAndRegisterDescriptor(selector, "onclick", function(element: HTMLElement) {
            const attr = element.getAttribute(selector);
            if(attr && this[attr]) {
                this[attr]();
            }
        });
    }
}
