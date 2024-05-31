import { GridProps, GridTypeMap } from '@mui/joy';

export default interface GridHideableProps extends GridProps<GridTypeMap['defaultComponent'], {
    component?: React.ElementType;
}> {
    id: string
}
