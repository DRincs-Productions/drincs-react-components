import { ReactNode } from 'react';
import ModalDialogProps from './ModalDialogProps';

export default interface ModalDialogExtendedProps extends ModalDialogProps {
    children?: ReactNode | ReactNode[];
    head?: string | ReactNode | ReactNode[];
    actions?: ReactNode | ReactNode[]
}
