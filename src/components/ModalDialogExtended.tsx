import { DialogActions, Divider, ModalClose } from '@mui/joy';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalDialogExtendedProps from '../interfaces/components/ModalDialogExtendedProps';
import ModalDialog from './ModalDialog';

export default function ModalDialogExtended(props: ModalDialogExtendedProps) {
    const {
        children
        , actions
        , head
        , ...rest
    } = props;

    return (
        <ModalDialog
            {...rest}
        >
            <ModalClose />
            <DialogTitle>
                {head}
            </DialogTitle>
            <Divider />
            <DialogContent
                sx={{
                    padding: 1
                }}
            >
                {children}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </ModalDialog>
    );
}
