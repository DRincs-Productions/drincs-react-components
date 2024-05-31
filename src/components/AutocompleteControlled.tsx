import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import AutocompleteControlledProps from '../interfaces/components/AutocompleteControlledProps';
import Autocomplete from './Autocomplete';
import ErrorComponent from './ErrorComponent';

export default function AutocompleteControlled<
    T extends object,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: AutocompleteControlledProps<T, TFieldValues, TName>) {
    const {
        controllerProps,
        onChange,
        onBlur,
        required,
        oidFieldName,
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
                    <Autocomplete
                        id={controllerProps.name}
                        onChange={(e, value) => {
                            let myvalue: null | any = null;
                            if (value) {
                                try {
                                    myvalue = (value as any)[oidFieldName] as any;
                                } catch (e) {
                                    myvalue = null;
                                }
                            }
                            let myEv = {
                                ...e,
                                target: {
                                    ...e.target,
                                    value: myvalue,
                                },
                            };
                            if (onChange) {
                                onChange(myEv, value as T, controllerOnChange);
                            } else {
                                controllerOnChange(myEv);
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
                        oidFieldName={oidFieldName}
                        {...field}
                        {...rest}
                    />
                )}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Autocomplete Controlled"} />
    }
}
