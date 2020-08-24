import { RavenCore } from "../rjs6-core-src/raven-main";

export class RavenPluginFactory {
    private static readonly loadedPlugins = [];

    private static ravenContext = RavenCore.getInstance();

    public static loadGlobalPlugin(
        pluginName: string,
        globalName: string,
        functions: { [key: string]: (...args: any[]) => void }
    ): void {
        const plugin = RavenPluginFactory
            .ravenContext
            .ext
            .createGlobalPlugin(pluginName, globalName, functions)
        ;

        RavenPluginFactory.loadedPlugins.push(plugin);
    }

    public static loadBindingPlugin(
        pluginName: string,
        pluginSelector: string,
        onEvaluateFn: (element: HTMLElement, expression: string, context: any) => void,
        opensNewContext = false
    ): void {
        const plugin = RavenPluginFactory
            .ravenContext
            .ext
            .createBindingPlugin(pluginName, pluginSelector, onEvaluateFn, opensNewContext)
        ;

        RavenPluginFactory.loadedPlugins.push(plugin);
    }

    public static appendAllLoaded(): void {
        const ravenCore = RavenCore.getInstance();
        ravenCore.born();

        RavenPluginFactory.loadedPlugins.forEach(plugin => {
            ravenCore.registerPlugin(plugin)
        });
    }
}