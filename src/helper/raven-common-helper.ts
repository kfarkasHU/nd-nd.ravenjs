export class RavenCommonHelper {
    public static deepClone<T>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}
