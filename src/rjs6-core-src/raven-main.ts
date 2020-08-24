import { RavenPluginDescriptor } from "./plugin/descriptor/raven-plugin-descriptor";
import { RavenPluginHub } from "./plugin/hub/raven-plugin-hub";
import { RavenExt } from "./raven-ext";

export class RavenCore {
    public readonly pluginScope = {};
    private static instance: RavenCore;

    public static getInstance(): RavenCore {
        if(!RavenCore.instance) {
            RavenCore.instance = new RavenCore();
        }

        return RavenCore.instance;
    }

    public get ext(): RavenExt {
        return RavenExt.getInstance();
    }

    public born(): void {
        RavenPluginHub.init(this);
    }

    public getAllSelector(): string[] {
        return RavenPluginHub.getAllSelector();
    }

    public findBindingPluginBySelector(selector: string): RavenPluginDescriptor {
        return RavenPluginHub.findBindingPluginBySelector(selector);
    }

    public registerPlugin(plugin: RavenPluginDescriptor): void {
        RavenPluginHub.registerPlugin(plugin);
    }

    public getRegisteredPlugins(): RavenPluginDescriptor[] {
        return RavenPluginHub.getAllRegisteredPlugin();
    }
}
