import { CheckboxProps as CheckboxPropsJoy, CheckboxTypeMap } from "@mui/joy";
import { OnChangeGenericType } from "../../types";

export default interface CheckBoxProps extends CheckboxPropsJoy<CheckboxTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    onChangeGeneric: OnChangeGenericType<boolean>;
}
