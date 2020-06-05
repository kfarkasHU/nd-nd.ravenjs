import { RavenEqualities } from "../common/raven-equalities";
import { RavenEqualityHelper } from "./raven-equality-helper";

export class RavenExpressionHelper {
    public static getProperties(expression: string): Array<string> {
        const p = RavenExpressionHelper.splitExpression(expression);

        if(p.length == 1)
            return p;

        const properties = [];
        properties.push(p[0]);
        properties.push(p[2]);

        return properties;
    }

    public static getOperator(expression: string): string {
        const p = RavenExpressionHelper.splitExpression(expression);

        if(p.length == 1) {
            if(p[0].startsWith('!'))
                return '!';
            
            if(p[0].startsWith('!!'))
                return '!!';
        }
        
        if(p.length == 2) {
            return RavenExpressionHelper.checkOperatorValidity(p[1]);
        }

        return "";
    }

    private static checkOperatorValidity(operator: string): string {
        const equalities = Object.getOwnPropertyNames(RavenEqualities);
        const validOperators = [...equalities, `as`, `in`];

        if(validOperators.indexOf(operator) >= 0) {
            return operator;
        }

        throw `The operator is invalid!\n
        The operator must be one of the following: ${validOperators}\n
        Currently got: '${operator}'`
    }

    private static splitExpression(expression: string): Array<string> {
        let properties = [expression];

        if(expression.indexOf(' ') == -1)
            return properties;

        const p = expression.split(' ');

        if(p.length !== 3)
            throw `The expression is invalid!\n
            The expression must follows the template: '{{property1}} {{operator}} {{property2}}\n
            Currently got: '${expression}'`;

        return p;
    }
}