import { ChangeEvent } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import ComponentControlledProps, { OnBlurControlledType, OnChangeControlledType } from "./ComponentControlledProps";
import TextFieldProps from "./TextFieldProps";

export default interface TextFieldControlledProps<
    T extends DefaultTextFieldValueType,
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends Omit<TextFieldProps<T>, "onChange" | "onChangeGeneric" | "onBlur" | "onBlurGeneric">, ComponentControlledProps<TFieldValues, TName> {
    onChange?: OnChangeControlledType<
        ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        T
    >;
    onBlur?: OnBlurControlledType;
}
