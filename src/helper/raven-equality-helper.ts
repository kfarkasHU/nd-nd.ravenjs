import { RavenEqualities } from "../common/raven-equalities";

export class RavenEqualityHelper {
    public static checkEquality(left: any, right: any, operator: string): boolean {
        return RavenEqualities[operator](left, right);
    }
}
