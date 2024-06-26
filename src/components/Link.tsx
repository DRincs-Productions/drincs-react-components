import { Typography } from '@mui/joy';
import LinkJoy from '@mui/joy/Link';
import { LinkProps } from '../interfaces/components';

export default function Link({
    children,
    disabled,
    selected,
    textColor = "neutral.500",
    selectedTextColor = "primary.600",
    disabledTextColor = "neutral.300",
    ...rest
}: LinkProps) {
    return (
        <LinkJoy
            {...rest}
        >
            <Typography
                textColor={
                    selected ? selectedTextColor :
                        disabled ? disabledTextColor :
                            textColor
                }
            >
                {children}
            </Typography>
        </LinkJoy>
    );
}
