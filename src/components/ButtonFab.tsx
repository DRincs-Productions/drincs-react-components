import { Fab, Theme, Zoom, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { ButtonFabProps } from '../interfaces/components';
import Button from './Button';
import ErrorComponent from './ErrorComponent';

export default function ButtonFab(props: ButtonFabProps) {
    const {
        fabProps,
        breakpoints = 'sm',
        bottom = 16,
        right = 16,
        ...rest
    } = props;
    const smScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoints));
    const [zoomIn, setZoomIn] = useState(false);

    // this timeout is added to avoid the zoom effect on the first render. therefore avoid it being shown for a few milliseconds at the point where the normal button should have been inserted
    setTimeout(() => {
        setZoomIn(true)
    }, 500);

    try {
        if (smScreen) {
            return <Zoom
                in={zoomIn}
            >
                <Fab
                    onClick={rest.onClick}
                    disabled={rest.disabled}
                    color="primary"
                    {...fabProps}
                    sx={{
                        position: 'fixed',
                        bottom: bottom,
                        right: right,
                        ...fabProps?.sx
                    }}
                >
                    {rest.startDecorator ? rest.startDecorator : rest.endDecorator}
                </Fab>
            </Zoom>
        }
        else {
            return <Button {...rest} />
        }
    }
    catch (error) {
        return <ErrorComponent error={error} text={"Button Fab"} />
    }
}
