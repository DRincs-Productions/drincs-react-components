import { ChipProps as ChipPropsJoy, ChipTypeMap } from '@mui/joy';

export default interface ChipProps extends ChipPropsJoy<ChipTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    ariaLabel?: string
}
