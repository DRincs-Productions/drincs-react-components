import { CircularProgress, IconButton, Tooltip } from '@mui/joy';
import IconButtonProps from '../interfaces/components/IconButtonProps';
import { useTheme } from '../Theme';
import ErrorComponent from './ErrorComponent';

export default function CIconButton(props: IconButtonProps) {
    const theme = useTheme()
    const {
        fieldName,
        children,
        ariaLabel,
        variant = "solid",
        color = "primary",
        loading,
        sx,
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
                        sx={{
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
                    </IconButton>
                </div>
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Icon Button"} />
    }
}
