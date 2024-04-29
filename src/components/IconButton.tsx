import { CircularProgress, IconButton, Tooltip } from '@mui/joy';
import IconButtonProps from '../interfaces/components/IconButtonProps';
import ErrorComponent from './ErrorComponent';

export default function CIconButton(props: IconButtonProps) {
    const {
        fieldName,
        children,
        ariaLabel,
        variant = "solid",
        color = "primary",
        loading,
        ...rest
    } = props;

    try {
        if (loading) {
            return (
                <Tooltip
                    title={ariaLabel}
                >
                    <div> {/* This div is necessary to avoid the tooltip to be cutted */}
                        <CircularProgress
                            sx={{ '--CircularProgress-size': '30px' }}
                        />
                    </div>
                </Tooltip>
            );
        }
        return (
            <Tooltip
                title={ariaLabel}
            >
                <div> {/* This div is necessary to avoid the tooltip to be cutted */}
                    <IconButton
                        {...rest}
                        title={ariaLabel}
                        variant={variant}
                        color={color}
                    >
                        {children}
                    </IconButton>
                </div>
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Icon Button"} />
    }
}
