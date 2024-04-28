import { Checkbox as CheckboxJoy } from "@mui/joy";
import { FocusEventHandler } from "react";
import { CheckboxProps } from "../interfaces/components";
import ErrorComponent from "./ErrorComponent";

export default function Checkbox(props: CheckboxProps) {
    const {
        onChangeGeneric,
        disabled,
        ...rest
    } = props;

    const checkboxOnChange: FocusEventHandler<HTMLInputElement> = (event) => {
        onChangeGeneric( event.target.checked)
    }

    try {
        return (
            <CheckboxJoy
                {...rest}
                onChange={checkboxOnChange}
                disabled={disabled}
            />
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Checkbox"} />
    }
}
