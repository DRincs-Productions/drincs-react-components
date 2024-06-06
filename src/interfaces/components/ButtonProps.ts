import { ButtonProps as ButtonPropsJoy, Shadow } from '@mui/joy';

export default interface ButtonProps extends ButtonPropsJoy {
    ariaLabel?: string
    elevation?: keyof Shadow
} 
