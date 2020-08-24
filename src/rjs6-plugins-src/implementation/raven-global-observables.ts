import { RavenPluginFactory } from "../raven-plugin-factory";

const eggFunction = function(initialValue: any) {
    eggImpl.value = initialValue;

    function eggImpl() {
        if(arguments.length > 0) {
            eggImpl.value = arguments[0];

            return this;
        } else {
            return eggImpl.value;
        }
    }

    return eggImpl;
}

const eggsFunction = function(initialValue) {
    eggsImpl.value = initialValue;

    eggsImpl.push = eggsImpl.value.push;
    eggsImpl.pop = eggsImpl.value.pop;
    eggsImpl.indexOf = eggsImpl.value.indexOf;

    function eggsImpl() {
        if(arguments.length > 0) {
            eggsImpl.value = arguments[0];

            return this;
        } else {
            return eggsImpl.value;
        }
    }

    return eggsImpl;
}


RavenPluginFactory.loadGlobalPlugin(
    "raven-observables",
    "observables",
    {
        "egg": eggFunction,
        "eggs": eggsFunction
    }
);