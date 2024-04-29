import { useState } from 'react';
import { ModalConfirmationProps } from '../interfaces/components';
import CButton from './Button';
import ModalDialogExtended from './ModalDialogExtended';

export default function ModalConfirmation(props: ModalConfirmationProps) {
    const {
        setOpen
        , onClick
        , onClickAsync
        , children
        , color
        , disabledConfirm
        , confirmText
        , cancelText
        , ...rest
    } = props
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <ModalDialogExtended
            setOpen={setOpen}
            color={color}
            actions={[
                <CButton
                    variant="solid"
                    color={color}
                    onClick={() => {
                        if (onClick) {
                            const result = onClick()
                            setOpen(!result)
                            return
                        }
                        if (!onClickAsync) return
                        setLoading(true)
                        onClickAsync().then((result) => {
                            setLoading(false)
                            setOpen(!result)
                        }).catch(() => {
                            setLoading(false)
                        })
                    }}
                    disabled={disabledConfirm}
                    fullWidth={false}
                    loading={loading}
                >
                    {confirmText || 'Confirm'}
                </CButton>,
                <CButton
                    variant="plain"
                    color="neutral"
                    onClick={() => setOpen(false)}
                    fullWidth={false}
                    disabled={loading}
                >
                    {cancelText || 'Cancel'}
                </CButton>
            ]}
            {...rest}
        >
            {children}
        </ModalDialogExtended>
    );
}