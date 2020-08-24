import { RavenPluginDescriptor } from "../descriptor/raven-plugin-descriptor";
import { RavenBindingPluginDescriptor } from "../descriptor/raven-binding-plugin-descriptor";
import { RavenGlobalPluginDescriptor } from "../descriptor/raven-global-plugin-descriptor";

export class RavenPluginHub {
    private static context: any;
    private static readonly registeredPlugins: RavenPluginDescriptor[] = [];

    public static init(ravenContext: any): void {
        if(!RavenPluginHub.context) {
            RavenPluginHub.context = ravenContext;
        }
    }

    public static getAllSelector(): string[] {
        return RavenPluginHub
            .registeredPlugins
            .map(m => (m as RavenBindingPluginDescriptor).pluginSelector)
        ;
    }

    public static findBindingPluginBySelector(selector: string): RavenPluginDescriptor {
        return RavenPluginHub.registeredPlugins.find(m =>
            (m as RavenBindingPluginDescriptor).pluginSelector === selector
        );
    }

    public static registerPlugin(plugin: RavenPluginDescriptor): void {
        RavenPluginHub.checkAvability(plugin);

        (plugin instanceof RavenBindingPluginDescriptor)
            ? RavenPluginHub.registerBindingPlugin(plugin as RavenBindingPluginDescriptor)
            : RavenPluginHub.registerGlobalPlugin(plugin as RavenGlobalPluginDescriptor)
        ;

        RavenPluginHub.registeredPlugins.push(plugin);
    }

    public static getAllRegisteredPlugin(): RavenPluginDescriptor[] {
        return RavenPluginHub.registeredPlugins;
    }

    private static checkAvability(plugin: RavenPluginDescriptor): void {
        const pluginWithSameName = RavenPluginHub.registeredPlugins
            .find(m =>
                m.pluginName === plugin.pluginName
            )
        ;

        if(pluginWithSameName) {
            throw `Plugin with name '${plugin.pluginName}' is already registered!`;
        }
    }

    private static registerBindingPlugin(plugin: RavenBindingPluginDescriptor): void {

    }

    private static registerGlobalPlugin(plugin: RavenGlobalPluginDescriptor): void {
        if(!RavenPluginHub.context) {
            throw "You must call 'Raven.born()' before register any global plugins!";
        }

        if(RavenPluginHub.context.pluginScope[plugin.globalName]) {
            throw `The global name ${plugin.globalName} is already in use!`;
        }

        RavenPluginHub.context.pluginScope[plugin.globalName] = {};

        const functionKeys = Object.keys(plugin.functions);
        for(const functionKey of functionKeys) {
            RavenPluginHub.context.pluginScope[plugin.globalName][functionKey] = plugin.functions[functionKey];
        }
    }
}