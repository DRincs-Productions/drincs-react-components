import { CircularProgress, IconButton as IconButtonJoy, IconButtonTypeMap, Tooltip } from '@mui/joy';
import { useContext } from 'react';
import LoadingContext from '../contexts/LoadingContext';
import { useTheme } from '../Theme';
import { IconButtonProps } from '../types';
import ErrorComponent from './ErrorComponent';

export default function IconButton<
    D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
>(props: IconButtonProps<D, P>) {
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
                    <IconButtonJoy
                        {...rest}
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
