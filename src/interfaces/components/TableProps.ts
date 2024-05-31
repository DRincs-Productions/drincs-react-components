import { TableProps as TablePropsJoy } from '@mui/joy';
import { CSSProperties } from 'react';

export default interface TableProps extends TablePropsJoy {
    titles?: string[],
    data?: any[][] | object[],
    verticalTitle?: boolean,
    width?: number,
    height?: number,
    toMirrorAcrossDiagonal?: boolean,
    sxColumns?: CSSProperties[]
    sxRows?: CSSProperties[]
    loading?: boolean
    laodingRows?: number
}
