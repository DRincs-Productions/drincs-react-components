import { Shadow, SxProps } from '@mui/joy/styles/types';
import { DataGridProps as DataGridPropsX, GridColDef, GridValidRowModel as GridValidRowModelX } from '@mui/x-data-grid';

export default interface DataGridProps<T extends GridValidRowModel> extends Omit<DataGridPropsX<T>, "sx"> {
    columns: GridColDef<T>[]
    hidenColumns?: string[]
    height?: number
    head?: React.ReactNode
    sx?: SxProps
    elevation?: keyof Shadow
}

export interface GridValidRowModel extends GridValidRowModelX {
    id?: any,
}