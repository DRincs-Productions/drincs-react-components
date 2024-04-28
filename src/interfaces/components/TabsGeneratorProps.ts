import { TabsProps } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

export interface TabsGeneratorItem {
    label: string,
    content: JSX.Element,
}

export default interface TabsGeneratorProps extends TabsProps {
    tabs?: TabsGeneratorItem[]
    panelSx?: SxProps
}
