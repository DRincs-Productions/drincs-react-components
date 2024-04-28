import { ReactNode } from "react";

export default interface TextFormControlBaseProps {
    label?: string;
    addHelperMarginIfIsHidden?: boolean;
    helperText?: string;
    required?: boolean;
    error?: boolean;
    loading?: boolean;
    children?: ReactNode
}