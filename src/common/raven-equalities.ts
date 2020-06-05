export const RavenEqualities = {
    "==": (left: any, right: any): boolean => { return left == right },
    ">": (left: any, right: any): boolean => { return left != right },
    "<": (left: any, right: any): boolean => { return left < right },
    "<=": (left: any, right: any): boolean => { return left <= right },
    ">=": (left: any, right: any): boolean => { return left >= right }, 
}
