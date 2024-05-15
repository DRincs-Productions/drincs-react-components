import { Button as ButtonJoy, Tooltip } from '@mui/joy';
import { ButtonProps } from '../interfaces/components';
import { useTheme } from '../Theme';
import ErrorComponent from './ErrorComponent';

export default function Button(props: ButtonProps) {
    const theme = useTheme()
    const {
        children,
        ariaLabel,
        fullWidth = true,
        variant = "solid",
        color = "primary",
        sx,
        elevation,
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
                    sx={{
                        ...sx,
                        boxShadow: elevation ? `0 0 ${elevation * 2}px ${elevation}px #000000be` : undefined,
                        '& .ImageSrc-root': {
                            borderRadius: "var(--Button-radius, var(--joy-radius-sm))",
                        },
                        '&:hover': {
                            '& .ImageBackdrop-root': {
                                backgroundColor: theme.palette.common.white,
                                opacity: 0.15,
                            }
                        },
                        "&:disabled": {
                            '& .ImageBackdrop-root': {
                                backgroundColor: theme.palette.common.black,
                                opacity: 0.5,
                            }
                        },
                        "&:active": {
                            '& .ImageBackdrop-root': {
                                backgroundColor: theme.palette.common.white,
                                opacity: 0.25,
                            }
                        }
                    }}
                >
                    {children}
                </ButtonJoy>
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Button"} />
    }
}
