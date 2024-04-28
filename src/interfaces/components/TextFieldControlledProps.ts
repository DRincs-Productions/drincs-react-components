import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import TextFieldProps from "./TextFieldProps";

export default interface TextFieldControlledProps<
    T extends DefaultTextFieldValueType,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends TextFieldProps<T> {
    controllerProps: Omit<UseControllerProps<TFieldValues, TName>, "render">
}
