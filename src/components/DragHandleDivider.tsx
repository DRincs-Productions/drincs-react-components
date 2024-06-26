import { DragHandle } from "@mui/icons-material";
import { Divider, useTheme } from "@mui/joy";
import { DragHandleDividerProps } from "../interfaces/components";

export default function DragHandleDivider(props: DragHandleDividerProps) {
    const {
        onMouseDown,
        orientation,
        ...rest
    } = props;

    return (
        <Divider
            orientation={orientation}
            {...rest}
        >
            <DragHandle
                sx={{
                    cursor: orientation === "vertical" ? "col-resize" : "row-resize",
                    zIndex: 100,
                    backgroundColor: useTheme().palette.neutral[300],
                    ":hover": {
                        backgroundColor: useTheme().palette.neutral[200],
                    },
                    borderRadius: 2,
                    height: 13,
                    width: 40,
                    transform: orientation === "vertical" ? "rotate(90deg)" : undefined,
                    color: useTheme().palette.neutral[700],
                }}
                onMouseDown={onMouseDown}
            />
        </Divider>
    );
}
