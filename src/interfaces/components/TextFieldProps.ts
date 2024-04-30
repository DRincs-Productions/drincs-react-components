import { InputProps, InputTypeMap } from "@mui/joy";
import { ElementType } from "react";
import { OnChangeGenericType } from "../../types";
import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import TextFormControlBaseProps from "./TextFormControlBaseProps";

export default interface TextFieldProps<T extends DefaultTextFieldValueType> extends InputProps<InputTypeMap['defaultComponent'], {
    component?: ElementType;
}>, Omit<TextFormControlBaseProps, "children"> {
    onChangeGeneric?: OnChangeGenericType<T>
    onBlurGeneric?: OnChangeGenericType<T>
    loading?: boolean
    maxLength?: number
}
