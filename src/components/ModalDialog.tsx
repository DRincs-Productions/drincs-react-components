import Modal from '@mui/joy/Modal';
import { default as ModalDialogJoy } from '@mui/joy/ModalDialog';
import { Transition } from 'react-transition-group';
import ModalDialogProps from '../interfaces/components/ModalDialogProps';

export default function ModalDialog({ sx, open, setOpen, transitionTimeout = 400, ...rest }: ModalDialogProps) {
    return (
        <Transition in={open} timeout={transitionTimeout}>
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
                                transition: `opacity ${transitionTimeout}ms, backdrop-filter ${transitionTimeout}ms`,
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
                            transition: `opacity ${transitionTimeout * 0.75}ms`,
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
