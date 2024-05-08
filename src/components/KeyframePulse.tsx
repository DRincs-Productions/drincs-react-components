import { keyframes } from '@emotion/react';
import KeyframePulseProps from '../interfaces/components/KeyframePulseProps';

export default function KeyframePulse({
    children,
    style,
    ...rest
}: KeyframePulseProps) {
    return (
        <div
            style={{
                animation: `${keyframes({
                    "0%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.1)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    }
                })}`,
                animationName: "pulse",
                animationDuration: "2s",
                animationDelay: ".5s",
                ...style
            }}
            {...rest}
        >
            {children}
        </div>
    );
}
