export class RavenPluginHelper {
    private static currentId = 1000;

    public static get nextId(): string {
        return `raven_plugin_${RavenPluginHelper.currentId++}`;
    }
}