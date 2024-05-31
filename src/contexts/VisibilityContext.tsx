import { createContext } from "react"

export class VisibilityContextModel {
    constructor(hideFields: string[]) {
        this._fields = hideFields
    }
    private _fields: string[] = []
    private get endOfFields(): string[] {
        return this._fields.map((field) => {
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    fieldIsHidden = (fieldName: string): boolean => {
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const VisibilityContext = createContext<VisibilityContextModel>(new VisibilityContextModel([]))
export default VisibilityContext
