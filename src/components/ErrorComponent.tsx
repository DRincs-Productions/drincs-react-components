import { useTheme } from "@mui/joy";

interface ErrorComponentProps {
    error: any,
    text: string,
}

export default function ErrorComponent(props: ErrorComponentProps) {
    const theme = useTheme()
    console.log(props.text, props.error)
    return <div style={{ color: theme.palette.danger[500] }}>{props.text}</div>
}
