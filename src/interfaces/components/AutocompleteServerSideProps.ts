import AutocompleteProps from "./AutocompleteProps"

export default interface AutocompleteServerSideProps<T extends object, TOid> extends AutocompleteProps<T> {
    /**
     * will be used as the default value
     */
    options: T[]
    /**
     * The minimum number of characters to start searching
     * @default 3
     */
    startToSerachAfter?: number
    onSearch: (search: string) => Promise<T[]>
    getObjectByID: (id: TOid) => Promise<T | undefined>
    /**
     * The time to wait before starting the search
     * @default 500
     */
    debouncingTime?: number
    /**
     * The text to show when there are no options
     * @default "No options"
     */
    noOptionsText?: string
    /**
     * The text to show when the user has not written anything
     * @default "Start to write"
     */
    startToWriteText?: string
    /**
     * The text to show when the search is loading
     * @default "Loading..."
     */
    loadingText?: string
}
