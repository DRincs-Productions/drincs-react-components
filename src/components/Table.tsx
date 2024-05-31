import { Skeleton, Table as TableJoy } from '@mui/joy';
import { useMemo } from 'react';
import { convertObjectListToValuesList } from '../functions/ObjectArrayFunctions';
import TableProps from '../interfaces/components/TableProps';
import ErrorComponent from './ErrorComponent';

export default function Table(props: TableProps) {
    const {
        verticalTitle
        , toMirrorAcrossDiagonal
        , titles
        , data: preData
        , sxColumns = []
        , sxRows = []
        , borderAxis = "both"
        , loading
        , laodingRows = 5
        , ...rest
    } = props;

    const data = useMemo(() => {
        return convertObjectListToValuesList(preData, toMirrorAcrossDiagonal)
    }, [preData])

    try {
        if (loading) {
            return (
                <>
                    <TableJoy
                        borderAxis={borderAxis}
                        {...rest}
                        sx={{
                            paddingX: 1,
                        }}
                    >
                    </TableJoy>
                    {Array.from(Array(laodingRows), (e, i) => {
                        return <Skeleton animation="wave" variant="text" level="h2" key={i} />
                    })}
                </>
            );
        }
        return (
            <TableJoy
                borderAxis={borderAxis}
                {...rest}
            >
                <thead>
                    {!verticalTitle && titles &&
                        <tr>
                            {titles.map((title) => {
                                return <th  >
                                    {title}
                                </th>
                            })}
                        </tr>
                    }
                </thead>
                <tbody>

                    {data.map((item, indexRox) => {
                        return item.length > 0 ? <tr key={indexRox}>
                            {verticalTitle && titles &&
                                <th >
                                    {titles.length > indexRox && <>
                                        {titles[indexRox]}
                                    </>}
                                </th>
                            }
                            {item.map((item, indexColumn) => {
                                if (sxColumns.length > indexColumn) {
                                    return <th
                                        scope="row"
                                        style={sxColumns[indexColumn]}
                                        key={indexColumn}
                                    >
                                        {item}
                                    </th>
                                }
                                if (sxRows.length > indexRox) {
                                    return <td
                                        style={sxRows[indexRox]}
                                        key={indexColumn}
                                    >
                                        {item}
                                    </td>
                                }
                                return <td
                                    key={indexColumn}
                                >
                                    {item}
                                </td>
                            })}
                        </tr>
                            : <></>
                    })}
                </tbody>
            </TableJoy>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Table"} />
    }
}
