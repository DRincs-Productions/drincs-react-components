import { FieldPath } from 'react-hook-form';
import { isObject } from './ObjectFunctions';

/**
 * Find an item in a lookup by a property
 * @param lookup The lookup to search
 * @param fieldName The field name to search
 * @param value The value to search
 * @returns The item found or null if not found
 */
export function findSimilarItemFromLookupByProperty<T extends object>(lookup: T[] | readonly T[], fieldName: FieldPath<T>, value: any): T | null | undefined {
    if (value === null) {
        return null;
    }
    if (lookup === null) {
        console.error("findItemFromLookupByProperty lookup is null. idFieldName:" + fieldName)
        return null;
    }
    if (!Array.isArray(lookup)) {
        console.error("findItemFromLookupByProperty lookup not is array")
        return null;
    }
    if (lookup.length > 0 && !lookup[0]?.hasOwnProperty(fieldName)) {
        console.error("findItemFromLookupByProperty lookup not have a property:" + fieldName)
        return null;
    }

    var o = lookup ? lookup.find((item: any) => { return item[fieldName].toString() === value.toString() }) : null;
    return o;
}

/**
 * Convert an object list to a values list
 * @param list The list to convert
 * @param revert If true, the function will convert the object list to a value list and then revert the result 
 * @returns A matrix with the values of the object list
 * @example
 * ```ts
 * let data = convertObjectListToKeyValueList([{name: "Mario", surname: "Rossi"}, {name: "Luca", surname: "Bianchi"}])
 * // data = [["Mario", "Luca"], ["Rossi", "Bianchi"]]
 * ```
 */
export function convertObjectListToValuesList(list: any[][] | object[] = [], revert = false): any[][] {
    let data: any[][] = list.map((item: any) => {
        if (Array.isArray(item)) {
            return item
        }
        else if (isObject(item)) {
            return Object.values(item)
        }
        else {
            return []
        }
    })
    if (!revert) {
        return data
    }

    let maxLengt = 0
    data.forEach(element => {
        if (maxLengt < element.length) {
            maxLengt = element.length
        }

    });
    let result: any[][] = [[]]
    for (let index = 0; index < maxLengt; index++) {
        result.push([])
    }
    data.forEach((element) => {
        for (let forIndex = 0; forIndex < element.length && forIndex < maxLengt; forIndex++) {
            result[forIndex].push(element[forIndex])
        }
    });
    return result
}
