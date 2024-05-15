import { styled } from '@mui/joy';
import KeyframePulseProps from '../interfaces/components/KeyframePulseProps';

function KeyframePulseBase({
    children,
    style,
    animationDuration = 2,
    animationDelay = 0.5,
    ...rest
}: KeyframePulseProps) {
    return (
        <div
            style={{
                animationDuration: `${animationDuration}s`,
                animationDelay: `${animationDelay}s`,
                ...style
            }}
            {...rest}
        >
            {children}
        </div>
    );
}

const KeyframePulse = styled(KeyframePulseBase)({
    animationName: "pulse",

    "@keyframes pulse": {
        "0%": {
            transform: "scale(1)",
        },
        "50%": {
            transform: "scale(1.1)",
        },
        "100%": {
            transform: "scale(1)",
        }
    },
});

export default KeyframePulse;
