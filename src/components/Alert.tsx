import { Alert as AlertJoy } from '@mui/joy';
import AlertProps from '../interfaces/components/AlertProps';
import { useTheme } from '../Theme';
import ErrorComponent from './ErrorComponent';

export default function Alert(props: AlertProps) {
    const {
        elevation,
        sx,
        ...rest
    } = props;

    try {
        return (
            <AlertJoy
                sx={{
                    boxShadow: elevation ? useTheme().shadow[elevation] : undefined,
                    ...sx
                }}
                {...rest}
            />
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Alert"} />
    }
}
