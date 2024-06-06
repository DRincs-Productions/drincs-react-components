import { Typography } from '@mui/joy';
import { useState } from 'react';
import { ModalConfirmationProps } from '../interfaces/components';
import Button from './Button';
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
        , startDecorator
        , variantButton = "outlined"
        , headText
        , ...rest
    } = props
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <ModalDialogExtended
            setOpen={setOpen}
            color={color}
            head={<Typography level="h4"
                startDecorator={startDecorator}
            >
                {headText}
            </Typography>}
            actions={[
                <Button
                    key='confirm-button'
                    variant={variantButton}
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
                    startDecorator={startDecorator}
                >
                    {confirmText || 'Confirm'}
                </Button>,
                <Button
                    key='cancel-button'
                    variant="plain"
                    color="neutral"
                    onClick={() => setOpen(false)}
                    fullWidth={false}
                    disabled={loading}
                >
                    {cancelText || 'Cancel'}
                </Button>
            ]}
            {...rest}
        >
            {children}
        </ModalDialogExtended>
    );
}