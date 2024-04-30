import { DividerProps, DividerTypeMap } from "@mui/joy";
import { ElementType, MouseEventHandler } from "react";

export default interface DragHandleDividerProps extends DividerProps<DividerTypeMap['defaultComponent'], {
    component?: ElementType;
}> {
    onMouseDown: MouseEventHandler<any>
}
