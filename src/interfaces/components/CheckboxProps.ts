import { CheckboxProps as CheckboxPropsJoy, CheckboxTypeMap } from "@mui/joy";
import { ElementType } from "react";
import { OnChangeGenericType } from "../../types";

export default interface CheckboxProps extends CheckboxPropsJoy<CheckboxTypeMap['defaultComponent'], {
    component?: ElementType;
}> {
    onChangeGeneric?: OnChangeGenericType<boolean>;
}
