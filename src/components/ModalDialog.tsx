import Modal from '@mui/joy/Modal';
import { default as ModalDialogJoy } from '@mui/joy/ModalDialog';
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
            <Modal
                keepMounted
                open={internalOpen}
                onClose={() => setOpen(false)}
                component={motion.div}
                variants={{
                    open: {
                        opacity: 1,
                        pointerEvents: "auto",
                        backdropFilter: "blur(8px)",
                    },
                    closed: {
                        opacity: 0,
                        pointerEvents: "none",
                        backdropFilter: "blur(0px)",
                    }
                }}
                initial={"closed"}
                animate={open ? "open" : "closed"}
                exit={"closed"}
                transition={{
                    duration: transitionTimeout / 1000,
                }}
            >
                <ModalDialogJoy
                    sx={{
                        ...sx,
                    }}
                    component={motion.div}
                    variants={{
                        open: {
                            opacity: 1,
                            pointerEvents: "auto",
                        },
                        closed: {
                            opacity: 0,
                            pointerEvents: "none",
                        }
                    }}
                    initial={"closed"}
                    animate={internalOpen ? "open" : "closed"}
                    exit={"closed"}
                    transition={{
                        duration: transitionTimeout / 1000 * 0.75,
                    }}
                    {...rest}
                />
            </Modal>
        </AnimatePresence>
    );
}
