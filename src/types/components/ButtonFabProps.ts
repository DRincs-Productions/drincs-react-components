import { ButtonTypeMap } from '@mui/joy';
import { Breakpoint, FabProps, FabTypeMap } from '@mui/material';
import ButtonProps from './ButtonProps';

type ButtonFabProps<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
> = {
    fabProps?: FabProps<FabTypeMap['defaultComponent']>
    breakpoints?: Breakpoint,
    bottom?: number,
    right?: number,
} & ButtonProps<D, P>
export default ButtonFabProps
