import { Controller } from "react-hook-form";
import CheckboxWithFormControlledProps from "../interfaces/components/CheckboxWithFormControlledProps";
import CheckboxWithForm from "./CheckboxWithForm";
import ErrorComponent from "./ErrorComponent";

export default function CheckboxWithFormControlled(props: CheckboxWithFormControlledProps) {
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
