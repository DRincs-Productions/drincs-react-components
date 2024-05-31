import { Checkbox as CheckboxJoy } from "@mui/joy";
import { FocusEventHandler, useContext } from "react";
import { VisibilityContext } from "../contexts";
import DisabledContext from "../contexts/DisabledContext";
import { CheckboxProps } from "../interfaces/components";
import ErrorComponent from "./ErrorComponent";

export default function Checkbox(props: CheckboxProps) {
    const visibilityContext = useContext(VisibilityContext)
    const disabledContext = useContext(DisabledContext)
    const {
        id,
        onChange,
        onChangeGeneric,
        disabled = id ? disabledContext.fieldIsDisabled(id) : undefined,
        ...rest
    } = props;
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }

    const checkboxOnChange: FocusEventHandler<HTMLInputElement> = (event) => {
        onChange && onChange(event)
        onChangeGeneric && onChangeGeneric(event.target.checked)
    }

    try {
        return (
            <CheckboxJoy
                {...rest}
                id={id}
                onChange={checkboxOnChange}
                disabled={disabled}
            />
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Checkbox"} />
    }
}
