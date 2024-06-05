import { IconButtonProps as IconButtonPropsJoy, Shadow } from '@mui/joy';

export default interface IconButtonProps extends IconButtonPropsJoy {
    ariaLabel?: string
    loading?: boolean
    elevation?: keyof Shadow
} 
