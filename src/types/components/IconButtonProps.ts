import { IconButtonProps as IconButtonPropsJoy, Shadow } from '@mui/joy';

type IconButtonProps = {
    ariaLabel?: string
    loading?: boolean
    elevation?: keyof Shadow
} & IconButtonPropsJoy
export default IconButtonProps
