import { Typography } from '@mui/joy';
import LinkJoy from '@mui/joy/Link';
import { LinkProps } from '../interfaces/components';

export default function Link({
    children,
    disabled,
    selected,
    textColor = "text.primary",
    selectedTextColor = "primary.500",
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
