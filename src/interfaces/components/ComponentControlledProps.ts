import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

export default interface ComponentControlledProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> {
    controllerProps: Omit<UseControllerProps<TFieldValues, TName>, "render">
}

export type OnChangeControlledType<TEvent, TValue> = (
    event: TEvent,
    value: TValue,
    controllerOnChange: (...event: any[]) => void
) => void;

export type OnBlurControlledType = (
    controllerOnBlur: (...event: any[]) => void
) => void;
