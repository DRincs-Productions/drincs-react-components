import { DividerProps, DividerTypeMap } from "@mui/joy";

export default interface DragHandleDividerProps extends DividerProps<DividerTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    onMouseDown: React.MouseEventHandler<any>
}
