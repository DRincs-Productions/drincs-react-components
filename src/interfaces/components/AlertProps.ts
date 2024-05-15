import { AlertProps as AlertPropsJoy, AlertTypeMap, Shadow } from '@mui/joy';

export default interface AlertProps extends AlertPropsJoy<AlertTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    elevation?: keyof Shadow
}
