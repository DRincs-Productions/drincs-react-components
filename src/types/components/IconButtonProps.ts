import { IconButtonProps as IconButtonPropsJoy, IconButtonTypeMap, Shadow } from '@mui/joy';

type IconButtonProps<
    D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
> = {
    ariaLabel?: string
    loading?: boolean
    elevation?: keyof Shadow
} & IconButtonPropsJoy<D, P> & IconButtonPropsJoy
export default IconButtonProps
