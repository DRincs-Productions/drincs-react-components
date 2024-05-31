import { Typography } from "@mui/joy";
import { useContext } from "react";
import { ErrorContext, LoadingContext, VisibilityContext } from "../contexts";
import DisabledContext from "../contexts/DisabledContext";
import { CheckboxWithFormProps } from "../interfaces/components";
import Checkbox from "./Checkbox";
import CheckboxFormControlBase from "./CheckboxFormControlBase";
import ErrorComponent from "./ErrorComponent";

export default function CheckboxWithForm(props: CheckboxWithFormProps) {
    const errorContext = useContext(ErrorContext)
    const loadingContext = useContext(LoadingContext)
    const visibilityContext = useContext(VisibilityContext)
    const disabledContext = useContext(DisabledContext)
    const {
        id,
        helperText,
        helperErrorText,
        addHelperMarginIfIsHidden,
        loading = id ? loadingContext.fieldIsLoading(id) : undefined,
        error: tempError,
        label,
        disabled = id ? disabledContext.fieldIsDisabled(id) : undefined,
        size = "lg",
        defaultChecked,
        ...rest
    } = props;
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }
    const error = tempError || (id ? errorContext.fieldIsError(id) : undefined)

    try {
        return (
            <CheckboxFormControlBase
                id={id}
                helperText={helperText}
                helperErrorText={helperErrorText}
                error={error}
                addHelperMarginIfIsHidden={addHelperMarginIfIsHidden}
                loading={loading}
                label={label}
            >
                <Checkbox
                    {...rest}
                    id={id}
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
