import { AutocompleteProps as AutocompletePropsJoy } from '@mui/joy';
import { FieldPath } from 'react-hook-form';
import { OnChangeGenericType } from '../../types';
import TextFormControlBaseProps from './TextFormControlBaseProps';

export default interface AutocompleteProps<T extends object> extends AutocompletePropsJoy<T, any, any, any>, Omit<TextFormControlBaseProps, "children"> {
    onChangeGeneric?: OnChangeGenericType<T>
    descriptionFieldName: FieldPath<T>
    oidFieldName: FieldPath<T>
    disableFildName?: FieldPath<T>
    loadingForm?: boolean
}
