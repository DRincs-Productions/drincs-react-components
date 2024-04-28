import { Controller } from 'react-hook-form';
import TextFieldControlledProps from '../interfaces/components/TextFieldControlledProps';
import { DefaultTextFieldValueType } from '../types/DefaultTextFieldValueType';
import ErrorComponent from './ErrorComponent';
import TextField from './TextField';

export default function TextFieldControlled<T extends DefaultTextFieldValueType>(props: TextFieldControlledProps<T>) {
    const {
        controllerProps,
        ...rest
    } = props;

    try {
        return (
            <Controller
                {...controllerProps}
                render={({ field }) => <TextField
                    {...field}
                    {...rest}
                />}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Text Field Controlled"} />
    }
}
