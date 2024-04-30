import { Alert as AlertJoy, Typography } from '@mui/joy';
import AlertProps from '../interfaces/components/AlertProps';
import ErrorComponent from './ErrorComponent';

export default function Alert(props: AlertProps) {
    const {
        children,
    } = props;

    try {
        return (
            <AlertJoy
                {...props}
            >
                <Typography>
                    {children}
                </Typography>
            </AlertJoy>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Alert"} />
    }
}
