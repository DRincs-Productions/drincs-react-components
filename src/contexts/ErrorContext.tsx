import { createContext } from "react"

export class ErrorContextModel {
    constructor(errorFields: string[]) {
        this._fields = errorFields
    }
    private _fields: string[] = []
    private get endOfFields(): string[] {
        return this._fields.map((field) => {
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    fieldIsError = (fieldName: string): boolean => {
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const ErrorContext = createContext<ErrorContextModel>(new ErrorContextModel([]))
export default ErrorContext
