import { IconButtonTypeMap } from "@mui/joy";
import IconButtonProps from "./IconButtonProps";

type RoundIconButtonProps<
    D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
    P = { component?: React.ElementType }
> = {
    circumference?: string | {} | number
} & IconButtonProps<D, P>
export default RoundIconButtonProps
