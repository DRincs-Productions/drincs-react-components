import { Textarea as TextareaJoy } from '@mui/joy';
import { FocusEventHandler } from 'react';
import TextareaProps from '../interfaces/components/TextareaProps';
import ErrorComponent from './ErrorComponent';
import TextFormControlBase from './TextFormControlBase';

export default function Textarea(props: TextareaProps<string>) {
    const {
        label,
        helperText,
        onChangeGeneric,
        required,
        minRows = 2,
        ...rest
    } = props;
    const textFieldOnChange: FocusEventHandler<HTMLTextAreaElement> = (event) => {
        onChangeGeneric && onChangeGeneric(event.target.value)
    }

    try {
        return (
            <TextFormControlBase
                label={label}
                helperText={helperText}
                required={required}
            >
                <TextareaJoy
                    {...rest}
                    onBlur={textFieldOnChange}
                    minRows={minRows}
                />
            </TextFormControlBase>
        )
    } catch (ex) {
        return <ErrorComponent error={ex} text={"Textarea"} />
    }
}
