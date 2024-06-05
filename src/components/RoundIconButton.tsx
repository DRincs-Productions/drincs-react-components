import { ExtendIconButtonTypeMap, IconButtonTypeMap } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { RoundIconButtonProps } from "../interfaces";
import IconButton from "./IconButton";

function RoundIconButton(props: RoundIconButtonProps) {
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

export default RoundIconButton as typeof RoundIconButton & OverridableComponent<ExtendIconButtonTypeMap<IconButtonTypeMap<{}, "button">>>;
