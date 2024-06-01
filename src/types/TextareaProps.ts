import { InputTypeMap, TextareaProps as TextareaPropsJoy } from '@mui/joy';
import { ElementType } from "react";
import { TextFormControlBaseProps } from '../interfaces/components';
import { DefaultTextFieldValueType } from './DefaultTextFieldValueType';
import { OnChangeGenericType } from './OnChangeGenericType';

type TextareaProps<
    T extends DefaultTextFieldValueType,
    D extends ElementType = InputTypeMap['defaultComponent'],
    P = { component?: ElementType }
> = {
    onChangeGeneric: OnChangeGenericType<T>
} & Omit<TextFormControlBaseProps, "children"> & TextareaPropsJoy<D, P>
export default TextareaProps
