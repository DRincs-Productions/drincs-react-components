import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { TextFieldControlledProps } from '../interfaces';
import { DefaultTextFieldValueType } from '../types/DefaultTextFieldValueType';
import ErrorComponent from './ErrorComponent';
import TextField from './TextField';

export default function TextFieldControlled<
    T extends DefaultTextFieldValueType,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: TextFieldControlledProps<T, TFieldValues, TName>) {
    const {
        controllerProps,
        onChange,
        onBlur,
        required,
        ...rest
    } = props;
    const {
        rules,
        ...controllerRest
    } = controllerProps;

    try {
        return (
            <Controller
                rules={{
                    required: required,
                    ...rules
                }}
                {...controllerRest}
                render={({ field: { onChange: controllerOnChange, onBlur: controllerOnBlur, ref, ...field } }) => (
                    <TextField
                        id={controllerProps.name}
                        onChange={e => {
                            let value = e.target.value as T;
                            if (e.target.type === "number") {
                                value = (e.target as any).valueAsNumber as T;
                            }
                            if (onChange) {
                                onChange(e, value, controllerOnChange);
                            } else {
                                controllerOnChange(e);
                            }
                        }}
                        onBlur={() => {
                            if (onBlur) {
                                onBlur(controllerOnBlur);
                            } else {
                                controllerOnBlur();
                            }
                        }}
                        required={required}
                        {...field}
                        {...rest}
                    />
                )}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Text Field Controlled"} />
    }
}
