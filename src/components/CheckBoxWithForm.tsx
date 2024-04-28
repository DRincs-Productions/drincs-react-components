import { Typography } from "@mui/joy";
import { CheckBoxWithFormProps } from "../interfaces/components";
import CheckBox from "./CheckBox";
import CheckBoxFormControlBase from "./CheckBoxFormControlBase";
import ErrorComponent from "./ErrorComponent";

export default function CheckBoxWithForm(props: CheckBoxWithFormProps) {
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
            <CheckBoxFormControlBase
                helperText={helperText}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loading}
                label={label}
            >
                <CheckBox
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
            </CheckBoxFormControlBase>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Check Box With Form"} />
    }
}
