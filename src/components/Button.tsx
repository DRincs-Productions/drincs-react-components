import { Button as ButtonJoy, ButtonTypeMap, Tooltip } from '@mui/joy';
import { useTheme } from '../Theme';
import { ButtonProps } from '../types/components';
import ErrorComponent from './ErrorComponent';

export default function Button<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
>(props: ButtonProps<D, P>) {
    const theme = useTheme()
    const {
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
                        boxShadow: elevation ? useTheme().shadow[elevation] : undefined,
                        ...sx,
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
                />
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Button"} />
    }
}
