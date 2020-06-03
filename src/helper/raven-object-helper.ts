export class RavenObjectHelper
{
    private static _currentNumber = 1000;

    public static get nextId(): string {
        return `robject_${this._currentNumber++}`;
    }
}
