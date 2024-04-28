import { Controller } from 'react-hook-form';
import AutocompleteControlledProps from '../interfaces/components/AutocompleteControlledProps';
import Autocomplete from './Autocomplete';
import ErrorComponent from './ErrorComponent';

export default function AutocompleteControlled<T extends object>(props: AutocompleteControlledProps<T>) {
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
