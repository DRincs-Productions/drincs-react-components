import { VariantProp } from "@mui/joy";
import { ReactNode } from "react";
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
    children?: ReactNode
    head?: string | ReactNode
    disabledConfirm?: boolean
    cancelText?: string
    confirmText?: string
    /**
     * Element placed before the children.
     */
    startDecorator?: ReactNode
    /**
     * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
     * @default 'solid'
     */
    variantButton?: VariantProp
    headText?: string
}
