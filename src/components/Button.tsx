import { Button as ButtonJoy, Tooltip } from '@mui/joy';
import { ButtonProps } from '../interfaces/components';
import ErrorComponent from './ErrorComponent';

export default function Button(props: ButtonProps) {
    const {
        children,
        ariaLabel,
        fullWidth = true,
        variant = "solid",
        color = "primary",
        ...rest
    } = props;

    try {
        return (
            <Tooltip
                title={ariaLabel}
            >
                <ButtonJoy
                    {...rest}
                    fullWidth={fullWidth}
                    title={ariaLabel}
                    variant={variant}
                    color={color}
                >
                    {children}
                </ButtonJoy>
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Button"} />
    }
}
