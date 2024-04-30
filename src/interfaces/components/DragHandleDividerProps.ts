import { DividerProps, DividerTypeMap } from "@mui/joy";
import { ElementType, MouseEventHandler } from "react";

export default interface DragHandleDividerProps extends Omit<DividerProps<DividerTypeMap['defaultComponent'], {
    component?: ElementType;
}>, "onMouseDown"> {
    onMouseDown?: MouseEventHandler<SVGSVGElement>;
}
