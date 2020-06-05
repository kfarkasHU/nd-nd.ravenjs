import { RavenBindingContext } from "../objects/internal/raven-binding-context";

export class RavenContextHelper {
    public static getPropertyValue(propertyName: string, context: RavenBindingContext): any {
        if(RavenContextHelper.checkIfPrimitive(propertyName))
            return RavenContextHelper.getPropertyValueAsPrimitive(propertyName);

        let propertyRoute = [propertyName];
        if(propertyName.indexOf('.') >= 0)
            propertyRoute = propertyName.split('.');

        return RavenContextHelper.getPropertyValueCore(propertyRoute, context.getData());
    }

    private static getPropertyValueAsPrimitive(propertyName: string): any {
        if(propertyName === "true")
            return true;

        if(propertyName === "false")
            return false;

        if(propertyName.startsWith("'") && propertyName.endsWith("'"))
            return propertyName.substring(1, propertyName.length - 1);

        return Number(propertyName);
    }

    private static checkIfPrimitive(propertyName: string): boolean {
        if(propertyName === "true" || propertyName === "false")
            return true;

        if(propertyName.startsWith("'") && propertyName.endsWith("'"))
            return true;

        if(!isNaN(Number(propertyName)))
            return true;

        return false;
    }

    private static getPropertyValueCore(propertyRoute: Array<string>, currentContext: any): any {
        const _propertyName = propertyRoute[0];

        const _currentContext = getFromContext(_propertyName);
        propertyRoute.shift();

        if(propertyRoute.length > 0) {
            if(_currentContext == null)
                throw `Cannot get property '${_propertyName}' from null.`
            
            return RavenContextHelper.getPropertyValueCore(propertyRoute, _currentContext);
        }

        return _currentContext;

        function getFromContext(__propertyName: string): any {
            const p = __propertyName.split('[');

            if(p.length == 1)
                return currentContext[p[0]];
            
            let __currentScope = currentContext;

            for(let i = 1; i < p.length; i++) {
                __currentScope = __currentScope[getIndexFrom(p[i])];
            }

            return __currentScope;

            function getIndexFrom(___part: string): number {
                return Number(___part.split(']')[0]);
            }
        }
    }
}