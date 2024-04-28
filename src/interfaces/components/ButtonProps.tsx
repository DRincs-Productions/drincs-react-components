import { ButtonProps as ButtonPropsJoy, ButtonTypeMap } from '@mui/joy';

export default interface ButtonProps extends ButtonPropsJoy<ButtonTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    ariaLabel?: string
}
