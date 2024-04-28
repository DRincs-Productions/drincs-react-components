import { Sheet as SheetJoy, SheetProps, useTheme } from "@mui/joy";

export default function Sheet({ sx, ...rest }: SheetProps) {
    return (
        <SheetJoy
            sx={{
                borderRadius: "lg",
                boxShadow: 'md',
                border: '1px solid',
                borderColor: useTheme().palette.neutral[300],
                ...sx
            }}
            {...rest}
        />
    );
}
