import { Skeleton } from "@mui/joy";

export function TextFieldSkeleton() {
    return (
        <Skeleton
            animation="wave"
            height={36}
            sx={{
                marginTop: 3.2,
            }}
        />
    )
}
