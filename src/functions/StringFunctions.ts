export function isEmptyOrSpaces(str?: string) {
    if (!str) {
        return true;
    }
    return str.match(/^ *$/) !== null;
}
