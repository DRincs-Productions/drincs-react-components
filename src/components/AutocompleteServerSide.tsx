import { AutocompleteInputChangeReason, CircularProgress } from "@mui/joy"
import { useEffect, useState } from "react"
import { getDescription } from "../functions/ObjectFunctions"
import { AutocompleteServerSideProps } from "../interfaces/components"
import Autocomplete from "./Autocomplete"
import ErrorComponent from "./ErrorComponent"

export default function AutocompleteServerSide<T extends object, TOid>(props: AutocompleteServerSideProps<T, TOid>) {
    const {
        startToSerachAfter = 3,
        onSearch,
        // getObjectByID,
        value,
        debouncingTime = 500,
        getObjectByID,
        oidFieldName,
        noOptionsText = "No options",
        startToWriteText = "Start to write",
        loadingText = "Loading...",
        ...rest
    } = props;
    const [itemValue, setItemValue] = useState<any>(null);
    const [textToSearch, setTextToSearch] = useState<string>("")
    const [options, setOptions] = useState<readonly T[]>(props.options);
    const [activeGetList, setActiveGetList] = useState<boolean>(false);
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

    useEffect(() => {
        if (!activeGetList) {
            return
        }
        setLoadingSearch(true);
        // Debouncing
        const getData = setTimeout(() => {
            if (textToSearch.length < startToSerachAfter) {
                setOptions([]);
                setLoadingSearch(false);
                return;
            }
            onSearch(textToSearch).then((res) => {
                setOptions(res)
                setLoadingSearch(false);
            }).catch((err) => {
                setLoadingSearch(false);
            })
            setActiveGetList(false);
        }, debouncingTime)

        return () => {
            clearTimeout(getData)
        }
    }, [onSearch, textToSearch, activeGetList, debouncingTime, startToSerachAfter])

    function onInputChange(
        event: React.SyntheticEvent,
        value: string,
        reason: AutocompleteInputChangeReason
    ) {
        if (reason === "clear") {
            setTextToSearch("");
            setOptions([]);
        }
        if (reason === "input") {
            setOptions([]);
            if (!value || value.length < startToSerachAfter) {
                setOptions([]);
            }
            else {
                setActiveGetList(true);
            }
            setTextToSearch(value);
        }
    }

    useEffect(() => {
        if (!value) {
            setItemValue(value);
        } else if (value) {
            if (value !== getDescription(itemValue, oidFieldName)) {
                getObjectByID(value as TOid).then(item => {
                    setItemValue(item);
                });
            }
        }
    }, [value, itemValue, options, getObjectByID, oidFieldName])

    try {
        return (
            <Autocomplete
                {...rest}
                value={itemValue}
                options={options}
                noOptionsText={textToSearch.length < startToSerachAfter ? startToWriteText : noOptionsText}
                loadingText={loadingText}
                onInputChange={onInputChange}
                endDecorator={
                    loadingSearch ? (
                        <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
                    ) : null
                }
                loading={loadingSearch}
                oidFieldName={oidFieldName}
                placeholder={startToWriteText}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Autocomplete Server Side"} />
    }
}
