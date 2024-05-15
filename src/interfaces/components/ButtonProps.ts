import { ButtonProps as ButtonPropsJoy, ButtonTypeMap, Shadow } from '@mui/joy';
import { ElementType } from 'react';

export default interface ButtonProps extends ButtonPropsJoy<ButtonTypeMap['defaultComponent'], {
    component?: ElementType;
}> {
    ariaLabel?: string
    elevation?: keyof Shadow
}
