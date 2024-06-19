import { CircularProgress, ExtendIconButtonTypeMap, IconButton as IconButtonJoy, Tooltip } from '@mui/joy';
import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';
import { useContext } from 'react';
import LoadingContext from '../contexts/LoadingContext';
import { IconButtonProps } from '../interfaces';
import ElementTypeMap from '../interfaces/ElementTypeMap';
import { useTheme } from '../Theme';
import ErrorComponent from './ErrorComponent';

type IconButtonType<M extends OverridableTypeMap = ElementTypeMap<IconButtonProps, "button">> =
    ((props: OverrideProps<ExtendIconButtonTypeMap<M>, 'a'>) => JSX.Element)
    & OverridableComponent<ExtendIconButtonTypeMap<M>>;

const IconButton: IconButtonType = (props: IconButtonProps) => {
    const theme = useTheme()
    const loadingContext = useContext(LoadingContext)
    const {
        id,
        children,
        ariaLabel,
        variant = "solid",
        color = "primary",
        loading = id ? loadingContext.fieldIsLoading(id) : undefined,
        sx,
        elevation,
        ...rest
    } = props;

    try {
        if (loading) {
            return (
                <Tooltip
                    key={props.key ? "tooltip-" + props.key : undefined}
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
                key={props.key ? "tooltip-" + props.key : undefined}
                title={ariaLabel}
            >
                <div> {/* This div is necessary to avoid the tooltip to be cutted */}
                    <IconButtonJoy
                        title={ariaLabel}
                        variant={variant}
                        color={color}
                        sx={{
                            boxShadow: elevation ? theme.shadow[elevation] : undefined,
                            ...sx,
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
                        {...rest}
                    >
                        {children}
                    </IconButtonJoy>
                </div>
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Button"} />
    }
}

export default IconButton;
