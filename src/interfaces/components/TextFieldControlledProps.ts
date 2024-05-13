import { FieldPath, FieldValues } from "react-hook-form";
import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import ComponentControlledProps from "./ComponentControlledProps";
import TextFieldProps from "./TextFieldProps";

export default interface TextFieldControlledProps<
    T extends DefaultTextFieldValueType,
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends TextFieldProps<T>, ComponentControlledProps<TFieldValues, TName> { }
