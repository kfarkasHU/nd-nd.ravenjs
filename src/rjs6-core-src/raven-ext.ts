import { RavenBindingPluginDescriptor } from "./plugin/descriptor/raven-binding-plugin-descriptor";
import { RavenGlobalPluginDescriptor } from "./plugin/descriptor/raven-global-plugin-descriptor";

export class RavenExt {

    private static instance: RavenExt;

    public static getInstance(): RavenExt {
        if(!RavenExt.instance) {
            RavenExt.instance = new RavenExt();
        }

        return RavenExt.instance;
    }

    public createBindingPlugin(
        pluginName: string,
        pluginSelector: string,
        onEvaluate: (element: HTMLElement, expression: string, context: any) => void,
        opensNewContext = false
    ): RavenBindingPluginDescriptor {
        return new RavenBindingPluginDescriptor(
            pluginName,
            pluginSelector,
            onEvaluate,
            opensNewContext
        );
    }

    public createGlobalPlugin(
        pluginName: string,
        globalName: string,
        functions: { [key: string]: (...args: any[]) => void }
    ): RavenGlobalPluginDescriptor {
        return new RavenGlobalPluginDescriptor(
            pluginName,
            globalName,
            functions
        );
    }
}
