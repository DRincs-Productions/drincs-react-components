import { IconButtonProps as IconButtonPropsJoy, IconButtonTypeMap, Shadow } from '@mui/joy';
import { HTMLAttributes } from 'react';

type IconButtonProps<
    D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
> = {
    ariaLabel?: string
    loading?: boolean
    elevation?: keyof Shadow
} & IconButtonPropsJoy<D, P> & HTMLAttributes<HTMLDivElement>
export default IconButtonProps
