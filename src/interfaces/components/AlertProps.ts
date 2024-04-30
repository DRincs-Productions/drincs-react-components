import { AlertProps as AlertPropsJoy, AlertTypeMap } from '@mui/joy';

export default interface AlertProps extends AlertPropsJoy<AlertTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> { }
