import { Input } from '@mui/joy';
import { FocusEventHandler } from 'react';
import TextFieldProps from '../interfaces/components/TextFieldProps';
import { DefaultTextFieldValueType } from '../types/DefaultTextFieldValueType';
import ErrorComponent from './ErrorComponent';
import TextFormControlBase from './TextFormControlBase';
import { TextFieldSkeleton } from './skeleton/TextFieldSkeleton';

export default function TextField<T extends DefaultTextFieldValueType>(props: TextFieldProps<T>) {
    const {
        label,
        helperText,
        defaultValue,
        onChange,
        onChangeGeneric,
        type = "text",
        fullWidth = true,
        required,
        onBlurGeneric,
        addHelperMarginIfIsHidden,
        loading,
        disabled,
        error,
        maxLength = 100,
        slotProps,
        ...rest
    } = props;

    const textFieldOnChange: FocusEventHandler<HTMLInputElement> | undefined = onChangeGeneric ? (event) => {
        onChangeGeneric(event.target.value as T)
    } : undefined
    const textFieldOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
        onBlurGeneric && onBlurGeneric(event.target.value as T)
    }

    try {
        return (
            <TextFormControlBase
                label={label}
                helperText={helperText}
                required={required}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loading}
            >
                <Input
                    {...rest}
                    onBlur={textFieldOnBlur}
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
