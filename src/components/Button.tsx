import { Button as ButtonJoy, ExtendButtonTypeMap, Tooltip } from '@mui/joy';
import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';
import { ButtonProps } from '../interfaces';
import ElementTypeMap from '../interfaces/ElementTypeMap';
import { useTheme } from '../Theme';
import ErrorComponent from './ErrorComponent';

type IconButtonType<M extends OverridableTypeMap = ElementTypeMap<ButtonProps, "button">> =
    ((props: OverrideProps<ExtendButtonTypeMap<M>, 'a'>) => JSX.Element)
    & OverridableComponent<ExtendButtonTypeMap<M>>;

const Button: IconButtonType = (props: ButtonProps) => {
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

export default Button;
