import { InputTypeMap } from "@mui/joy";
import { ChangeEvent, ElementType } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import ComponentControlledProps, { OnBlurControlledType, OnChangeControlledType } from "../interfaces/components/ComponentControlledProps";
import { DefaultTextFieldValueType } from "./DefaultTextFieldValueType";
import TextFieldProps from "./TextFieldProps";

type TextFieldControlledProps<
    T extends DefaultTextFieldValueType,
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
    D extends ElementType = InputTypeMap['defaultComponent'],
    P = { component?: ElementType }
> = {
    onChange?: OnChangeControlledType<
        ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        T
    >;
    onBlur?: OnBlurControlledType;
} & Omit<TextFieldProps<T, D, P>, "onChange" | "onChangeGeneric" | "onBlur" | "onBlurGeneric"> & ComponentControlledProps<TFieldValues, TName>
export default TextFieldControlledProps
