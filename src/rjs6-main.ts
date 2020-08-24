import { RavenCore } from "./rjs6-core-src/raven-main";
import { RavenPluginFactory } from "./rjs6-plugins-src/raven-plugin-loader";

export const core = RavenCore.getInstance();
export const plugins = core.pluginScope;

RavenPluginFactory.appendAllLoaded();
