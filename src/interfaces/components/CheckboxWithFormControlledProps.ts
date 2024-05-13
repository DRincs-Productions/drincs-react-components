import { FieldPath, FieldValues } from "react-hook-form";
import CheckboxWithFormProps from "./CheckboxWithFormProps";
import ComponentControlledProps from "./ComponentControlledProps";

export default interface CheckboxWithFormControlledProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends CheckboxWithFormProps, ComponentControlledProps<TFieldValues, TName> { }
