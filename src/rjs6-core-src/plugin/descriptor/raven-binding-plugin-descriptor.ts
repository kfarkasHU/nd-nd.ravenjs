import { RavenPluginDescriptor } from "./raven-plugin-descriptor";

export class RavenBindingPluginDescriptor extends RavenPluginDescriptor {
    constructor(
        pluginName: string,
        public readonly pluginSelector: string,
        public readonly onEvaluate: (element: HTMLElement, expression: string, context: any) => void,
        public readonly opensNewContext = false
    ) {
        super(pluginName);
    }
}