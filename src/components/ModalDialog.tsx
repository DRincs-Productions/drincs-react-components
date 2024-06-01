import Modal from '@mui/joy/Modal';
import { default as ModalDialogJoy } from '@mui/joy/ModalDialog';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import ModalDialogProps from '../interfaces/components/ModalDialogProps';

export default function ModalDialog({ sx, open, setOpen, transitionTimeout = 400, ...rest }: ModalDialogProps) {
    const [internalOpen, setInternalOpen] = useState(open)
    useEffect(() => {
        if (open) {
            setInternalOpen(open)
            return
        }
        const timeout = setTimeout(() => {
            setInternalOpen(open)
        }, transitionTimeout)
        return () => {
            clearTimeout(timeout)
        }
    }, [open])

    return (
        <Modal
            keepMounted
            open={internalOpen}
            onClose={() => setOpen(false)}
            component={motion.div}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: open ? 1 : 0,
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: transitionTimeout / 1000,
            }}
        >
            <ModalDialogJoy
                sx={{
                    ...sx,
                }}
                component={motion.div}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: open ? 1 : 0,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: transitionTimeout / 1000 * 0.75,
                }}
                {...rest}
            />
        </Modal>
    );
}
