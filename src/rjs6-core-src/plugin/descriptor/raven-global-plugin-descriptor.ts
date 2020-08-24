import { RavenPluginDescriptor } from "./raven-plugin-descriptor";

export class RavenGlobalPluginDescriptor extends RavenPluginDescriptor {
    constructor(
        pluginName: string,
        public readonly globalName: string,
        public readonly functions: { [key: string]: (...args: any[]) => void }
    ) {
        super(pluginName);
    }
}