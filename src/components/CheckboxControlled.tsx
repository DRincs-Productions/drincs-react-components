import { Controller, FieldPath, FieldValues } from "react-hook-form";
import CheckboxControlledProps from "../interfaces/components/CheckboxControlledProps";
import Checkbox from "./Checkbox";
import ErrorComponent from "./ErrorComponent";

export default function CheckboxControlled<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: CheckboxControlledProps<TFieldValues, TName>) {
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
                render={({ field: { onChange: controllerOnChange, onBlur: controllerOnBlur, value, ref, ...field } }) => (
                    <Checkbox
                        id={controllerProps.name}
                        onChange={e => {
                            let value = e.target.checked
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
                        checked={value}
                        {...field}
                        {...rest}
                    />
                )}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Checkbox Controlled"} />
    }
}
