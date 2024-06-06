import { TextareaProps as TextareaPropsJoy } from '@mui/joy';
import { TextFormControlBaseProps } from '.';
import { DefaultTextFieldValueType } from '../../types/DefaultTextFieldValueType';
import { OnChangeGenericType } from '../../types/OnChangeGenericType';

export default interface TextareaProps<
    T extends DefaultTextFieldValueType,
> extends Omit<TextFormControlBaseProps, "children">, TextareaPropsJoy {
    onChangeGeneric: OnChangeGenericType<T>
} 
