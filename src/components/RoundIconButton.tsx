import { ExtendIconButtonTypeMap } from "@mui/joy";
import { OverridableComponent, OverridableTypeMap, OverrideProps } from "@mui/material/OverridableComponent";
import { RoundIconButtonProps } from "../interfaces";
import ElementTypeMap from "../interfaces/ElementTypeMap";
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

type RoundIconButtonType<M extends OverridableTypeMap = ElementTypeMap<RoundIconButtonProps, "button">> = ((props: OverrideProps<ExtendIconButtonTypeMap<M>, 'a'>) => JSX.Element) & OverridableComponent<ExtendIconButtonTypeMap<M>>;
export default RoundIconButton as RoundIconButtonType;
