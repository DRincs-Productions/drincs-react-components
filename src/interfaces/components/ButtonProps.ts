import { ButtonProps as ButtonPropsJoy, ButtonTypeMap } from '@mui/joy';
import { ElementType } from 'react';

export default interface ButtonProps extends ButtonPropsJoy<ButtonTypeMap['defaultComponent'], {
    component?: ElementType;
}> {
    ariaLabel?: string
}
