import { Sheet as SheetJoy, useTheme } from "@mui/joy";
import { SheetProps } from "../interfaces/components";

export default function Sheet({ elevation = "md", sx, ...rest }: SheetProps) {
    return (
        <SheetJoy
            sx={{
                borderRadius: "lg",
                border: '1px solid',
                borderColor: useTheme().palette.neutral[300],
                boxShadow: elevation ? useTheme().shadow[elevation] : undefined,
                ...sx
            }}
            {...rest}
        />
    );
}
