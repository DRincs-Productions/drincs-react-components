import { ChangeEvent } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import CheckboxWithFormProps from "./CheckboxWithFormProps";
import ComponentControlledProps, { OnBlurControlledType, OnChangeControlledType } from "./ComponentControlledProps";

export default interface CheckboxWithFormControlledProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends Omit<CheckboxWithFormProps, "onChange" | "onChangeGeneric" | "onBlur" | "onBlurGeneric">, ComponentControlledProps<TFieldValues, TName> {
    onChange?: OnChangeControlledType<
        ChangeEvent<HTMLInputElement>,
        boolean
    >;
    onBlur?: OnBlurControlledType;
}

