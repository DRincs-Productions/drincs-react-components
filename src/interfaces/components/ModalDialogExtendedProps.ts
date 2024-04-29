import * as React from 'react';
import ModalDialogProps from './ModalDialogProps';

export default interface ModalDialogExtendedProps extends ModalDialogProps {
    children?: React.ReactNode | React.ReactNode[];
    head?: string | React.ReactNode | React.ReactNode[];
    actions?: React.ReactNode | React.ReactNode[]
}
