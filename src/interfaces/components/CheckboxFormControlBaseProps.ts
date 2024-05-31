import { ReactNode } from 'react';

export default interface CheckboxFormControlBaseProps {
    id?: string;
    label?: string | ReactNode;
    addHelperMarginIfIsHidden?: boolean;
    helperText?: string;
    helperErrorText?: string;
    error?: boolean;
    loading?: boolean;
    required?: boolean;
    children: ReactNode,
}
