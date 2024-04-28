import { Typography } from "@mui/joy";
import { CheckboxWithFormProps } from "../interfaces/components";
import Checkbox from "./Checkbox";
import CheckboxFormControlBase from "./CheckboxFormControlBase";
import ErrorComponent from "./ErrorComponent";

export default function CheckboxWithForm(props: CheckboxWithFormProps) {
    const {
        helperText,
        addHelperMarginIfIsHidden,
        loading,
        error,
        label,
        disabled,
        size = "lg",
        defaultChecked,
        ...rest
    } = props;

    try {
        return (
            <CheckboxFormControlBase
                helperText={helperText}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loading}
                label={label}
            >
                <Checkbox
                    {...rest}
                    size={size}
                    defaultChecked={defaultChecked}
                    label={
                        <Typography color={error ? "danger" : undefined}>
                            {defaultChecked?.toString()}
                        </Typography>
                    }
                    disabled={loading || disabled}
                />
            </CheckboxFormControlBase>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Check Box With Form"} />
    }
}
