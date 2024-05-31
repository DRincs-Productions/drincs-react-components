import { ReactNode } from "react";

export default interface TextFormControlBaseProps {
    id?: string;
    label?: string;
    addHelperMarginIfIsHidden?: boolean;
    helperText?: string;
    helperErrorText?: string;
    required?: boolean;
    error?: boolean;
    loading?: boolean;
    children: ReactNode
}