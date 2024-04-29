import ModalDialogExtendedProps from "./ModalDialogExtendedProps";

export default interface ModalConfirmationProps extends Omit<ModalDialogExtendedProps, "actions"> {
    /**
     * @returns true if the dialog should be closed
     */
    onClick?: () => boolean
    /**
     * @returns true if the dialog should be closed
     */
    onClickAsync?: () => Promise<boolean>
    children?: React.ReactNode;
    head?: string | React.ReactNode;
    disabledConfirm?: boolean
    cancelText?: string
    confirmText?: string
}
