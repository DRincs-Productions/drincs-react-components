import { IconButtonProps as IconButtonPropsJoy, IconButtonTypeMap } from '@mui/joy';
import { ElementType } from 'react';

export default interface IconButtonProps extends IconButtonPropsJoy<IconButtonTypeMap['defaultComponent'], {
    component?: ElementType;
}> {
    ariaLabel?: string
    loading?: boolean
    fieldName?: string
}
