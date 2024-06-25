import { createContext } from "react"

export class ErrorContextModel<T = any> {
    constructor(errorFields: (keyof T)[]) {
        this._fields = errorFields
    }
    private _fields: (keyof T)[] = []
    private get endOfFields() {
        return this._fields.map((field) => {
            if (typeof field !== "string") return field
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    fieldIsError = (fieldName: (keyof T)): boolean => {
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const ErrorContext = createContext<ErrorContextModel>(new ErrorContextModel([]))
export default ErrorContext
