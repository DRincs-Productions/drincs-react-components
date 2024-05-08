import { DataGrid as DataGridX, GridColumnVisibilityModel } from '@mui/x-data-grid';
import * as locales from '@mui/x-data-grid/locales';
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity';
import DataGridProps, { GridValidRowModel } from '../interfaces/components/DataGridProps';
import ErrorComponent from './ErrorComponent';
import Sheet from './Sheet';

function createColumnVisibilityModel(hidenColumns: string[], initialState?: GridInitialStateCommunity): GridColumnVisibilityModel {
    let columnVisibilityModel = initialState?.columns?.columnVisibilityModel ?? {};
    hidenColumns.forEach((column) => {
        columnVisibilityModel[column] = false;
    })
    return columnVisibilityModel;
}

export default function DataGrid<T extends GridValidRowModel>(props: DataGridProps<T>) {
    const getLanguage = (locales: any) => {
        let languageBrowser = navigator.language.replace("-", "")
        if (languageBrowser.length === 2) {
            languageBrowser = languageBrowser + languageBrowser.toUpperCase()
        }
        return locales[`${languageBrowser}`]?.components?.MuiDataGrid?.defaultProps?.localeText
    }

    const {
        rows,
        columns,
        initialState = {},
        hidenColumns,
        height = 600,
        sx,
        ...rest
    } = props;

    const columnVisibilityModel = createColumnVisibilityModel(hidenColumns ?? [], initialState);

    try {
        let internalData = rows?.map(((d, index) => {
            if (d.id === undefined)
                d.id = index
            return d;
        }))

        return (
            <Sheet
                sx={{
                    width: '100%',
                }}
            >
                <DataGridX
                    sx={{
                        height: height,
                        ...sx,
                    }}
                    rows={internalData}
                    columns={columns}
                    initialState={{
                        ...initialState,
                        columns: {
                            ...initialState.columns,
                            columnVisibilityModel: columnVisibilityModel,
                        },
                    }}
                    localeText={
                        getLanguage(locales)
                    }
                    {...rest}
                />
            </Sheet>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Data Grid"} />
    }
}
