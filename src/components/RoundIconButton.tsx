import { IconButtonTypeMap } from "@mui/joy";
import { RoundIconButtonProps } from "../types";
import IconButton from "./IconButton";

export default function RoundIconButton<
    D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
>(props: RoundIconButtonProps<D, P>) {
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
