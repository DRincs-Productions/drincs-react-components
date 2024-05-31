import { SyntheticEvent } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import AutocompleteProps from './AutocompleteProps';
import ComponentControlledProps, { OnBlurControlledType, OnChangeControlledType } from './ComponentControlledProps';

export default interface AutocompleteControlledProps<
    T extends object,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<AutocompleteProps<T>, "onChange" | "onChangeGeneric" | "onBlur" | "onBlurGeneric">, ComponentControlledProps<TFieldValues, TName> {
    onChange?: OnChangeControlledType<
        SyntheticEvent<Element, Event>,
        NonNullable<string | T> | (string | T)[] | null
    >;
    onBlur?: OnBlurControlledType;
}
