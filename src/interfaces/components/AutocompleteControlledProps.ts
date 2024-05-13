import { FieldPath, FieldValues } from 'react-hook-form';
import AutocompleteProps from './AutocompleteProps';
import ComponentControlledProps from './ComponentControlledProps';

export default interface AutocompleteControlledProps<
    T extends object,
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> extends AutocompleteProps<T>, ComponentControlledProps<TFieldValues, TName> { }
