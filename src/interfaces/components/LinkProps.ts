import { LinkProps as LinkPropsJoy } from '@mui/joy';
import { TextColor } from '@mui/joy/styles/types';

export default interface LinkProps extends LinkPropsJoy {
    selected?: boolean
    selectedTextColor?: TextColor;
    disabledTextColor?: TextColor;
}
