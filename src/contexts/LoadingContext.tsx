import { createContext } from "react"

export class LoadingContextModel {
    constructor(loading: boolean | string[]) {
        if (typeof loading === "boolean") {
            this.loadingAll = loading
        } else {
            this._fields = loading
        }
    }
    private _fields: string[] = []
    private get endOfFields(): string[] {
        return this._fields.map((field) => {
            let a = field.split(".")
            return a[a.length - 1]
        })
    }
    private loadingAll: boolean = false
    fieldIsLoading = (fieldName: string): boolean => {
        if (this.loadingAll) {
            return true
        }
        return this._fields.includes(fieldName) || this.endOfFields.includes(fieldName)
    }
}

const LoadingContext = createContext<LoadingContextModel>(new LoadingContextModel(false))
export default LoadingContext
