import { ModalDialogProps as ModalDialogPropsJoy } from '@mui/joy/ModalDialog';

export default interface ModalDialogProps extends ModalDialogPropsJoy {
    open: boolean;
    setOpen: (open: boolean) => void;
}
