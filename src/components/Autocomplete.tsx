import { AutocompleteChangeDetails, AutocompleteChangeReason, Autocomplete as AutocompleteJoy, createFilterOptions } from '@mui/joy';
import { AutocompleteValue } from '@mui/material';
import { FieldPath } from 'react-hook-form';
import AutocompleteProps from '../interfaces/components/AutocompleteProps';
import ErrorComponent from './ErrorComponent';
import TextFormControlBase from './TextFormControlBase';
import { TextFieldSkeleton } from './skeleton/TextFieldSkeleton';

function findSimilarItemFromLookupByProperty<T extends object>(lookup: T[] | readonly T[], fieldName: FieldPath<T>, value: any): T | null | undefined {
    if (value === null) {
        return null;
    }
    if (lookup === null) {
        console.error("findItemFromLookupByProperty lookup is null. idFieldName:" + fieldName)
        return null;
    }
    if (!Array.isArray(lookup)) {
        console.error("findItemFromLookupByProperty lookup not is array")
        return null;
    }
    if (lookup.length > 0 && !lookup[0]?.hasOwnProperty(fieldName)) {
        console.error("findItemFromLookupByProperty lookup not have a property:" + fieldName)
        return null;
    }

    var o = lookup ? lookup.find((item: any) => { return item[fieldName].toString() === value.toString() }) : null;
    return o;
}

function getDescription<T extends object>(option: T | undefined, descriptionFieldName: FieldPath<T>): string {
    if (!option) {
        return ""
    }
    if ((option as any)[descriptionFieldName] !== null && (option as any)[descriptionFieldName] !== undefined) {
        return (option as any)[descriptionFieldName]
    }
    return ""
}

function getDisabled<T extends object>(option: T | undefined, disabledFieldName: FieldPath<T>): boolean {
    if (!option) {
        return false
    }
    if ((option as any)[disabledFieldName] !== null && (option as any)[disabledFieldName] !== undefined) {
        return (option as any)[disabledFieldName] as boolean
    }
    return false
}

export default function Autocomplete<T extends object>(props: AutocompleteProps<T>) {
    const {
        id,
        label,
        helperText,
        onChangeGeneric,
        required,
        options,
        descriptionFieldName,
        oidFieldName,
        disableFildName,
        addHelperMarginIfIsHidden,
        loadingForm,
        error,
        disabled,
        ...rest
    } = props;

    const autocompleteOnChange = (
        event: React.SyntheticEvent,
        value: AutocompleteValue<T, any, any, any>,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<T>) => {
        onChangeGeneric && onChangeGeneric(value as T)
    }

    const getOptionLabel = (option: string | T): string => {
        if (typeof option === "string") {
            // passa di qui quando gli viene passato un default value
            let res = findSimilarItemFromLookupByProperty(options, oidFieldName, option)
            if (res) {
                return getDescription(res, descriptionFieldName)
            }
            return option
        }
        return getDescription(option, descriptionFieldName)
    }
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option: T) => {
            return getDescription(option, descriptionFieldName)
        },
    });
    const isOptionEqualToValue = (option: T, value: T | string | undefined) => {
        if (typeof value === "string") {
            // passa di qui quando gli viene passato un default value
            return getDescription(option, oidFieldName).toString() === value
        }
        if (option && option.hasOwnProperty(oidFieldName)) {
            return getDescription(option, oidFieldName) === getDescription(value, oidFieldName)
        }
        console.warn("warn isOptionEqualToValue oidFieldName is invalid, id: " + id, option, value)
        return getDescription(option, descriptionFieldName) === getDescription(value, descriptionFieldName)
    }

    try {
        return (
            <TextFormControlBase
                label={label}
                helperText={helperText}
                required={required}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loadingForm}
            >
                <AutocompleteJoy
                    {...rest}
                    options={options}
                    getOptionLabel={getOptionLabel}
                    filterOptions={filterOptions}
                    onChange={autocompleteOnChange}
                    error={error}
                    isOptionEqualToValue={isOptionEqualToValue}
                    disabled={loadingForm || disabled}
                    getOptionDisabled={disableFildName ? (option) => getDisabled(option, disableFildName) : undefined}
                />
                {loadingForm &&
                    <TextFieldSkeleton />
                }
            </TextFormControlBase>
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Autocomplete"} />
    }
}
