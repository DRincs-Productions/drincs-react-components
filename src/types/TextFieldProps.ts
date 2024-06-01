import { InputProps, InputTypeMap } from "@mui/joy";
import { ElementType } from "react";
import TextFormControlBaseProps from "../interfaces/components/TextFormControlBaseProps";
import { DefaultTextFieldValueType } from "./DefaultTextFieldValueType";
import { OnChangeGenericType } from "./OnChangeGenericType";

type TextFieldProps<
    T extends DefaultTextFieldValueType,
    D extends ElementType = InputTypeMap['defaultComponent'],
    P = { component?: ElementType }
> = {
    onChangeGeneric?: OnChangeGenericType<T>
    onBlurGeneric?: OnChangeGenericType<T>
    loading?: boolean
    maxLength?: number
} & InputProps<D, P> & Omit<TextFormControlBaseProps, "children">
export default TextFieldProps
