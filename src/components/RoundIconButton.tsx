import { IconButton } from ".";
import RoundIconButtonProps from "../interfaces/components/RoundIconButtonProps";

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
                ...sx
            }}
            {...rest}
        />
    );
}
