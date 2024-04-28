import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

export default interface ComponentControlledProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    controllerProps: Omit<UseControllerProps<TFieldValues, TName>, "render">
}
