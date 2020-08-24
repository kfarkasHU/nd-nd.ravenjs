export class RavenEvaluator {
    public static evaluate(expression: string, context: any): any {
        const evaluator = Function.apply(null, [...Object.keys(context), "expression", "return eval(expression)"]);
        return evaluator.apply(null, [...Object.values(context), expression]);
    }
}
