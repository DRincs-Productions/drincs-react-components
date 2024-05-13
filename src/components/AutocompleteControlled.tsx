import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import AutocompleteControlledProps from '../interfaces/components/AutocompleteControlledProps';
import Autocomplete from './Autocomplete';
import ErrorComponent from './ErrorComponent';

export default function AutocompleteControlled<
    T extends object,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: AutocompleteControlledProps<T, TFieldValues, TName>) {
    const {
        controllerProps,
        ...rest
    } = props;

    try {
        return (
            <Controller
                {...controllerProps}
                render={({ field }) => <Autocomplete
                    {...field}
                    {...rest}
                />}
            />
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Autocomplete Controlled"} />
    }
}
