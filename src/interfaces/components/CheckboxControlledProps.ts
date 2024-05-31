import { ChangeEvent } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import CheckboxProps from "./CheckboxProps";
import ComponentControlledProps, { OnBlurControlledType, OnChangeControlledType } from "./ComponentControlledProps";

export default interface CheckboxControlledProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends Omit<CheckboxProps, "onChange" | "onChangeGeneric" | "onBlur" | "onBlurGeneric">, ComponentControlledProps<TFieldValues, TName> {
    onChange?: OnChangeControlledType<
        ChangeEvent<HTMLInputElement>,
        boolean
    >;
    onBlur?: OnBlurControlledType;
}

