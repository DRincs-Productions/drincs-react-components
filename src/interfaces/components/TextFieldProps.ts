import { InputProps } from "@mui/joy";
import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import { OnChangeGenericType } from "../../types/OnChangeGenericType";
import TextFormControlBaseProps from "./TextFormControlBaseProps";

export default interface TextFieldProps<
    T extends DefaultTextFieldValueType
> extends InputProps, Omit<TextFormControlBaseProps, "children"> {
    onChangeGeneric?: OnChangeGenericType<T>
    onBlurGeneric?: OnChangeGenericType<T>
    loading?: boolean
    maxLength?: number
} 
