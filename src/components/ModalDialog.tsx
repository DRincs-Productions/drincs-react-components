import Modal from '@mui/joy/Modal';
import { default as ModalDialogJoy } from '@mui/joy/ModalDialog';
import { Transition } from 'react-transition-group';
import ModalDialogProps from '../interfaces/components/ModalDialogProps';

export default function ModalDialog({ sx, open, setOpen, ...rest }: ModalDialogProps) {
    return (
        <Transition in={open} timeout={400}>
            {(state: string) => (
                <Modal
                    keepMounted
                    open={!['exited', 'exiting'].includes(state)}
                    onClose={() => setOpen(false)}
                    slotProps={{
                        backdrop: {
                            sx: {
                                opacity: 0,
                                backdropFilter: 'none',
                                transition: `opacity 200ms, backdrop-filter 200ms`,
                                ...{
                                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                }[state],
                            },
                        },
                    }}
                    sx={{
                        visibility: state === 'exited' ? 'hidden' : 'visible',
                    }}
                >
                    <ModalDialogJoy
                        sx={{
                            opacity: 0,
                            transition: `opacity 50ms`,
                            ...{
                                entering: { opacity: 1 },
                                entered: { opacity: 1 },
                            }[state],
                            ...sx,
                        }}
                        {...rest}
                    />
                </Modal>
            )}
        </Transition>
    );
}
