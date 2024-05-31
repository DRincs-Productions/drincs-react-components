import { FieldPath } from 'react-hook-form';

export function getDescription<T extends object>(option: T | undefined, descriptionFieldName: FieldPath<T>): string {
    if (!option) {
        return ""
    }
    if ((option as any)[descriptionFieldName] !== null && (option as any)[descriptionFieldName] !== undefined) {
        return (option as any)[descriptionFieldName]
    }
    return ""
}

export function getDisabled<T extends object>(option: T | undefined, disabledFieldName: FieldPath<T>): boolean {
    if (!option) {
        return false
    }
    if ((option as any)[disabledFieldName] !== null && (option as any)[disabledFieldName] !== undefined) {
        return (option as any)[disabledFieldName] as boolean
    }
    return false
}

export function isObject(obj: any) {
    var type = typeof obj;
    return (type === 'object' && !!obj);
}
