import { Controller, FieldPath, FieldValues } from "react-hook-form";
import CheckboxWithFormControlledProps from "../interfaces/components/CheckboxWithFormControlledProps";
import CheckboxWithForm from "./CheckboxWithForm";
import ErrorComponent from "./ErrorComponent";

export default function CheckboxWithFormControlled<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: CheckboxWithFormControlledProps<TFieldValues, TName>) {
    const {
        controllerProps,
        ...rest
    } = props;

    try {
        return (
            <Controller
                {...controllerProps}
                render={({ field }) => <CheckboxWithForm
                    {...field}
                    {...rest}
                />}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"TCheckbox Controlled"} />
    }
}
