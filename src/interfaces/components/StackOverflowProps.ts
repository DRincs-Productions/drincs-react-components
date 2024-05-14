import { StackProps, StackTypeMap } from "@mui/joy";

export default interface StackOverflowProps extends StackProps<StackTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    maxLeght?: string | number;
}
