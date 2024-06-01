import { ButtonProps as ButtonPropsJoy, ButtonTypeMap, Shadow } from '@mui/joy';

type ButtonProps<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
> = {
    ariaLabel?: string
    elevation?: keyof Shadow
} & ButtonPropsJoy<D, P>
export default ButtonProps
