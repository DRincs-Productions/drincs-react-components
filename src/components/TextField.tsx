import { Input, InputTypeMap } from '@mui/joy';
import { ElementType, FocusEventHandler, useContext } from 'react';
import { ErrorContext, LoadingContext, VisibilityContext } from '../contexts';
import DisabledContext from '../contexts/DisabledContext';
import { DefaultTextFieldValueType } from '../types/DefaultTextFieldValueType';
import TextFieldProps from '../types/components/TextFieldProps';
import ErrorComponent from './ErrorComponent';
import TextFormControlBase from './TextFormControlBase';
import { TextFieldSkeleton } from './skeleton/TextFieldSkeleton';

export default function TextField<
    T extends DefaultTextFieldValueType,
    D extends ElementType = InputTypeMap['defaultComponent'],
    P = { component?: ElementType }
>(props: TextFieldProps<T, D, P>) {
    const errorContext = useContext(ErrorContext)
    const loadingContext = useContext(LoadingContext)
    const visibilityContext = useContext(VisibilityContext)
    const disabledContext = useContext(DisabledContext)

    const {
        id,
        label,
        helperText,
        helperErrorText,
        defaultValue,
        onBlur,
        onChange,
        onChangeGeneric,
        type = "text",
        fullWidth = true,
        required,
        onBlurGeneric,
        addHelperMarginIfIsHidden,
        loading = id ? loadingContext.fieldIsLoading(id) : undefined,
        disabled = id ? disabledContext.fieldIsDisabled(id) : undefined,
        error: tempError,
        maxLength = 100,
        slotProps,
        ...rest
    } = props;
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }
    const error = tempError || (id ? errorContext.fieldIsError(id) : undefined)

    const textFieldOnChange: FocusEventHandler<HTMLInputElement> | undefined = onChangeGeneric ? (event) => {
        onChangeGeneric(event.target.value as T)
    } : undefined
    const textFieldOnBlur: FocusEventHandler<HTMLInputElement> | undefined = onBlurGeneric ? (event) => {
        onBlurGeneric(event.target.value as T)
    } : undefined

    try {
        return (
            <TextFormControlBase
                id={id}
                label={label}
                helperText={helperText}
                helperErrorText={helperErrorText}
                required={required}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loading}
            >
                <Input
                    {...rest}
                    id={id}
                    onBlur={onBlur || textFieldOnBlur}
                    onChange={onChange || textFieldOnChange}
                    defaultValue={defaultValue}
                    type={type}
                    fullWidth={fullWidth}
                    error={error}
                    disabled={loading || disabled}
                    slotProps={{
                        input: {
                            maxLength: maxLength,
                        },
                        ...slotProps
                    }}
                />
                {loading &&
                    <TextFieldSkeleton />
                }
            </TextFormControlBase>
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Text Field"} />
    }
}
