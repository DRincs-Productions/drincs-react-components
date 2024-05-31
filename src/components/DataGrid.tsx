import { DataGrid as DataGridX } from '@mui/x-data-grid';
import * as locales from '@mui/x-data-grid/locales';
import { createColumnVisibilityModel } from '../functions/DataGridFunctions';
import { DataGridProps, GridValidRowModel } from '../interfaces/components';
import ErrorComponent from './ErrorComponent';
import Sheet from './Sheet';

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
        head,
        elevation,
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
                elevation={elevation}
                sx={{
                    width: '100%',
                    padding: "16px",
                    ...sx,
                }}
            >
                {head}
                <DataGridX
                    sx={{
                        height: height,
                        transition: 'transform 0.2s, height 0.2s',
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
