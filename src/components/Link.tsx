import { Typography, useTheme } from '@mui/joy';
import LinkJoy from '@mui/joy/Link';
import { LinkProps } from '../interfaces/components';

export default function Link({
    children,
    disabled,
    selected,
    ...rest
}: LinkProps) {
    return (
        <LinkJoy
            {...rest}
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
