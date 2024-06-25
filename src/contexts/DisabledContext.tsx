import { createContext } from "react"

export class DisabledContextModel<T = any> {
    constructor(disabled: boolean | (keyof T)[]) {
        if (typeof disabled === "boolean") {
            this.disabledAll = disabled
        } else {
            this._fields = disabled
        }
    }
    private _fields: (keyof T)[] = []
    private get endOfFields() {
        return this._fields.map((field) => {
            if (typeof field !== "string") return field
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    private disabledAll: boolean = false
    fieldIsDisabled = (fieldName: (keyof T)): boolean => {
        if (this.disabledAll) {
            return true
        }
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const DisabledContext = createContext<DisabledContextModel>(new DisabledContextModel([]))
export default DisabledContext
