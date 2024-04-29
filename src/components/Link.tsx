import { Typography, useTheme } from '@mui/joy';
import LinkJoy from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import LinkProps from '../interfaces/components/LinkProps';

export default function Link({
    children,
    disabled,
    selected,
    ...rest
}: LinkProps) {
    return (
        <LinkJoy
            {...rest}
            component={RouterLink}
        >
            <Typography
                textColor={
                    selected ? useTheme().palette.primary[500] :
                        disabled ? useTheme().palette.neutral[500] :
                            useTheme().palette.neutral[300]
                }
            >
                {children}
            </Typography>
        </LinkJoy>
    );
}
