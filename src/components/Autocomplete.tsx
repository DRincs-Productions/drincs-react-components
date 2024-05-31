import { AutocompleteChangeDetails, AutocompleteChangeReason, Autocomplete as AutocompleteJoy, createFilterOptions } from '@mui/joy';
import { AutocompleteValue } from '@mui/material';
import { SyntheticEvent, useContext } from 'react';
import { ErrorContext, LoadingContext, VisibilityContext } from '../contexts';
import DisabledContext from '../contexts/DisabledContext';
import { findSimilarItemFromLookupByProperty } from '../functions/ObjectArrayFunctions';
import { getDescription, getDisabled } from '../functions/ObjectFunctions';
import AutocompleteProps from '../interfaces/components/AutocompleteProps';
import ErrorComponent from './ErrorComponent';
import TextFormControlBase from './TextFormControlBase';
import { TextFieldSkeleton } from './skeleton/TextFieldSkeleton';

export default function Autocomplete<T extends object>(props: AutocompleteProps<T>) {
    const errorContext = useContext(ErrorContext)
    const loadingContext = useContext(LoadingContext)
    const visibilityContext = useContext(VisibilityContext)
    const disabledContext = useContext(DisabledContext)
    const {
        id,
        label,
        helperText,
        onChange,
        onChangeGeneric,
        required,
        options,
        descriptionFieldName,
        oidFieldName,
        disableFildName,
        addHelperMarginIfIsHidden,
        loadingForm = id ? loadingContext.fieldIsLoading(id) : undefined,
        error: tempError,
        disabled = id ? disabledContext.fieldIsDisabled(id) : undefined,
        value = "", // if it is undefined it causes problems: at the first startup getOptionLabel is not used and after that it will no longer intercept the value change (I think it is a mui problem)
        ...rest
    } = props;
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }
    const error = tempError || (id ? errorContext.fieldIsError(id) : undefined)

    const autocompleteOnChange = (
        event: SyntheticEvent,
        value: AutocompleteValue<T, any, any, any>,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<T>) => {
        onChangeGeneric && onChangeGeneric(value as T)
        onChange && onChange(event, value, reason, details)
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
                id={id}
                label={label}
                helperText={helperText}
                required={required}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loadingForm}
            >
                <AutocompleteJoy
                    {...rest}
                    id={id}
                    options={options}
                    getOptionLabel={getOptionLabel}
                    filterOptions={filterOptions}
                    onChange={autocompleteOnChange}
                    error={error}
                    isOptionEqualToValue={isOptionEqualToValue}
                    disabled={loadingForm || disabled}
                    getOptionDisabled={disableFildName ? (option) => getDisabled(option, disableFildName) : undefined}
                    value={value}
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
