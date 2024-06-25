import { createContext } from "react"

export class VisibilityContextModel<T = any> {
    constructor(hideFields: (keyof T)[]) {
        this._fields = hideFields
    }
    private _fields: (keyof T)[] = []
    private get endOfFields() {
        return this._fields.map((field) => {
            if (typeof field !== "string") return field
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    fieldIsHidden = (fieldName: (keyof T)): boolean => {
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const VisibilityContext = createContext<VisibilityContextModel>(new VisibilityContextModel([]))
export default VisibilityContext
