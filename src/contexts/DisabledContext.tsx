import { createContext } from "react"

export class DisabledContextModel {
    constructor(disabled: boolean | string[]) {
        if (typeof disabled === "boolean") {
            this.disabledAll = disabled
        } else {
            this._fields = disabled
        }
    }
    private _fields: string[] = []
    private get endOfFields(): string[] {
        return this._fields.map((field) => {
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    private disabledAll: boolean = false
    fieldIsDisabled = (fieldName: string): boolean => {
        if (this.disabledAll) {
            return true
        }
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const DisabledContext = createContext<DisabledContextModel>(new DisabledContextModel([]))
export default DisabledContext
