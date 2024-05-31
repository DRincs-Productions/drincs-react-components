import { GridColumnVisibilityModel } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

export function createColumnVisibilityModel(hidenColumns: string[], initialState?: GridInitialStateCommunity): GridColumnVisibilityModel {
    let columnVisibilityModel = initialState?.columns?.columnVisibilityModel ?? {};
    hidenColumns.forEach((column) => {
        columnVisibilityModel[column] = false;
    })
    return columnVisibilityModel;
}
