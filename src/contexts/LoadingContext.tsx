import { createContext } from "react"

export class LoadingContextModel<T = any> {
    constructor(loading: boolean | (keyof T)[]) {
        if (typeof loading === "boolean") {
            this.loadingAll = loading
        } else {
            this._fields = loading
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
    private loadingAll: boolean = false
    fieldIsLoading = (fieldName: (keyof T)): boolean => {
        if (this.loadingAll) {
            return true
        }
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const LoadingContext = createContext<LoadingContextModel>(new LoadingContextModel(false))
export default LoadingContext
