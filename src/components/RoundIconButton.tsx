import { RoundIconButtonProps } from "../types";
import IconButton from "./IconButton";

export default function RoundIconButton(props: RoundIconButtonProps) {
    const {
        sx,
        circumference,
        ...rest
    } = props;

    return (
        <IconButton
            sx={{
                borderRadius: "50%",
                height: circumference,
                width: circumference,
                '& .ImageBackdrop-root': {
                    borderRadius: "50%",
                },
                '& .ImageSrc-root': {
                    borderRadius: "50%",
                },
                ...sx
            }}
            {...rest}
        />
    );
}
