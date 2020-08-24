import { RavenPluginHelper } from "../helper/raven-plugin-helper";

export class RavenPluginDescriptor {
    public readonly identifier = RavenPluginHelper.nextId;

    constructor(
        public readonly pluginName: string
    ) {
        
    }
}