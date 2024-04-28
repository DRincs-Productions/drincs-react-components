import { Breakpoint, FabProps, FabTypeMap } from '@mui/material';
import ButtonProps from './ButtonProps';

export default interface ButtonFabProps extends ButtonProps {
    fabProps?: FabProps<FabTypeMap['defaultComponent']>
    breakpoints?: Breakpoint,
    bottom?: number,
    right?: number,
}
