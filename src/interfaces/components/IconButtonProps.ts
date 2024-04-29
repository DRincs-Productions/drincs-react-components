import { IconButtonProps as IconButtonPropsJoy, IconButtonTypeMap } from '@mui/joy';

export default interface IconButtonProps extends IconButtonPropsJoy<IconButtonTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    ariaLabel?: string
    loading?: boolean
    fieldName?: string
}
