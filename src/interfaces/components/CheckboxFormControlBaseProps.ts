import { ReactNode } from 'react';

export default interface CheckboxFormControlBaseProps {
    label?: string | ReactNode;
    addHelperMarginIfIsHidden?: boolean;
    helperText?: string | JSX.Element;
    error?: boolean;
    loading?: boolean;
    required?: boolean;
    children: ReactNode,
}
