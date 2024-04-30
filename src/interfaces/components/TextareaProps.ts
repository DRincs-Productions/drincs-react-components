import { TextareaProps as TextareaPropsJoy, TextareaTypeMap } from '@mui/joy';
import { OnChangeGenericType } from '../../types';
import { DefaultTextFieldValueType } from '../../types/DefaultTextFieldValueType';
import TextFormControlBaseProps from './TextFormControlBaseProps';

export default interface TextareaProps<T extends DefaultTextFieldValueType> extends Omit<TextFormControlBaseProps, "children">,
    TextareaPropsJoy<TextareaTypeMap['defaultComponent'], {
        component?: React.ElementType;
    }> {
    onChangeGeneric: OnChangeGenericType<T>
}
