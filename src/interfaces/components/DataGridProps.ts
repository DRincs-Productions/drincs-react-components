import { DataGridProps as DataGridPropsX, GridColDef, GridValidRowModel as GridValidRowModelX } from '@mui/x-data-grid';

export default interface DataGridProps<T extends GridValidRowModel> extends DataGridPropsX<T> {
    columns: GridColDef<T>[]
    hidenColumns?: string[]
    height?: number
}

export interface GridValidRowModel extends GridValidRowModelX {
    id?: any,
}