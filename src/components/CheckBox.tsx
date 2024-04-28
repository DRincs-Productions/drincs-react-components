import { Checkbox as CheckboxJoy } from "@mui/joy";
import { FocusEventHandler } from "react";
import { CheckBoxProps } from "../interfaces/components";
import ErrorComponent from "./ErrorComponent";

export default function CheckBox(props: CheckBoxProps) {
    const {
        onChangeGeneric,
        disabled,
        ...rest
    } = props;

    const checkBoxOnChange: FocusEventHandler<HTMLInputElement> = (event) => {
        onChangeGeneric( event.target.checked)
    }

    try {
        return (
            <CheckboxJoy
                {...rest}
                onChange={checkBoxOnChange}
                disabled={disabled}
            />
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Check Box"} />
    }
}
