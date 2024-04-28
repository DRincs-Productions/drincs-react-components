import { CheckboxProps as CheckboxPropsJoy, CheckboxTypeMap } from "@mui/joy";
import { OnChangeGenericType } from "../../types";

export default interface CheckboxProps extends CheckboxPropsJoy<CheckboxTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    onChangeGeneric: OnChangeGenericType<boolean>;
}
