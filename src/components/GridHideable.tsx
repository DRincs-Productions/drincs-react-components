import { Grid } from '@mui/joy';
import { useContext } from 'react';
import VisibilityContext from '../contexts/VisibilityContext';
import { GridHideableProps } from '../interfaces/components';

export default function GridHideable(props: GridHideableProps) {
    const {
        id,
        ...rest
    } = props

    const visibilityContext = useContext(VisibilityContext)
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }

    return (
        <Grid
            {...rest}
        />
    );
}
