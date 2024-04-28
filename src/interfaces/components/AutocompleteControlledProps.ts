import AutocompleteProps from './AutocompleteProps';
import ComponentControlledProps from './ComponentControlledProps';

export default interface AutocompleteControlledProps<T extends object> extends AutocompleteProps<T>, ComponentControlledProps { }
